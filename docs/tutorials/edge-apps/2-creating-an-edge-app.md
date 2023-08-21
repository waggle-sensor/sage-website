---
sidebar_position: 2
---

# Part 2: Creating an edge app

In [part 1](intro-to-edge-apps), we showed an overview of what edge apps are and how they fit into the Waggle ecosystem. Now, we'll dive right in and start writing our very own edge app!

## Prerequisites

For this part of the tutorial, we'll assume you are developing directly on a laptop or machine with a camera or webcam available. You should have some basic development experience in [Python](https://www.python.org) and with [git](https://git-scm.com) for version control.

## Development workflow

In the next few parts of this tutorial, we'll deep dive into the following app development workflow:

![App Workflow](./images/plugin-workflow.svg)

First, **data and model selection** is where you scope the problem and identify a new or existing model for your application. This typically happens _outside_ of our ecosystem.

Second, **develop and test** is where you begin to integrate your initial code with our ecosystem, test and finally build your application in [ECR](/docs/about/architecture#edge-code-repository-ecr).

Finally, **deploy and iterate** is where you schedule your application for deployment and look at the results.

## A driving example

In order to illustrate progress through each of these stages, we'll start with a concrete code example and iterate on it over the next few sections.

In practice, _lots_ of work goes into the data and model selection step. For now, we'll assume that groundwork has already been done and we've settled on the following code snippit to start with.

```python
import numpy as np
import cv2


def compute_mean_color(image):
    return np.mean(image, (0, 1)).astype(float)


def main():
    # read example image from file
    image = cv2.imread("example.jpg")

    # compute mean color
    mean_color = compute_mean_color(image)

    # print mean color
    print(mean_color)


if __name__ == "__main__":
    main()
```

## Bootstrapping our app from a template

We'll start our by using a cookiecutter template to bootstrap our app.

First, ensure the latest cookiecutter is installed:

```sh
pip3 install --upgrade cookiecutter
```

Now, run the following command:

```sh
cookiecutter gh:waggle-sensor/cookiecutter-sage-app
```

You should be prompted to fill in the following fields:

```txt
  [1/5] name (my-amazing-app-name): my-amazing-app-name
  [2/5] description (My really amazing app!):
  [3/5] author (My name):
  [4/5] version (0.1.0):
  [5/5] Select kind
    1 - vision
    2 - usbserial_sensor
    3 - minimal
    4 - tutorial                    <<< use 4 for tutorial
    Choose from [1/2/3/4] (1): 4
```

If this succeeds, a new `app-tutorial` directory will be created with the following files:

| Name | Description |
|------|-------------|
| main.py | Main code |
| requirements.txt | Code dependencies |
| Dockerfile | App build instructions |
| sage.yaml | App metadata |

### Installing the dependencies

The first step in preparing our example for the edge is to install [pywaggle](https://github.com/waggle-sensor/pywaggle) in our local development environment.

pywaggle is our Python SDK which provides edge apps access to devices (ex. cameras and microphones) and messaging within a node.

![Accessing Devices](../images/access_to_sensors.svg)

For this tutorial, we'll install the latest version of the requirements included in the template:

```sh
pip3 install --upgrade --requirement requirements.txt
```

### Accessing a camera

Now that we have pywaggle, the first change we'll make is to use a camera as input rather than a static image file. We'll use the following `shapshot()` function to take an RGB snapshot from the camera.

```python
import numpy as np

from waggle.data.vision import Camera


def compute_mean_color(image):
    return np.mean(image, (0, 1)).astype(float)


def main():
    # open camera and take snapshot
    with Camera() as camera:
        snapshot = camera.snapshot()

    # compute mean color
    mean_color = compute_mean_color(snapshot.data)

    # print mean color
    print(mean_color)


if __name__ == "__main__":
    main()
```

Now, we can try this out by running:

```sh
python3 main.py
```

You should see output like:

```txt
[51.43575738 51.83611871 54.64226671]
```

_You're exact numbers may differ as this is computed using your default camera._

### Publishing results

The next change we'll make is to publish our data to the [Beehive Data Repository](/docs/about/architecture#data-repository-dr) instead of just print it. This will allow it to be sent to a Beehive once it's scheduled on a node.

```python
import numpy as np

from waggle.plugin import Plugin
from waggle.data.vision import Camera


def compute_mean_color(image):
    return np.mean(image, (0, 1)).astype(float)


def main():
    with Plugin() as plugin:
        # open camera and take snapshot
        with Camera() as camera:
            snapshot = camera.snapshot()

        # compute mean color
        mean_color = compute_mean_color(snapshot.data)

        # publish mean color
        plugin.publish("color.mean.r", mean_color[0], timestamp=snapshot.timestamp)
        plugin.publish("color.mean.g", mean_color[1], timestamp=snapshot.timestamp)
        plugin.publish("color.mean.b", mean_color[2], timestamp=snapshot.timestamp)


if __name__ == "__main__":
    main()
```

Now, we'll run this using:

```sh
python3 main.py
```

You may notice something... there's no output! Usually, published data is sent to a beehive where it can be viewed later. However, because we're developing locally and have not configured a beehive, the data isn't going anywhere. In the next section, we'll see how we can tap into our published data.

### Viewing run logs

In order to make developing and debugging apps easier, pywaggle can write out a log directory as follows:

```sh
export PYWAGGLE_LOG_DIR=test-run
python3 main.py
```

This will create a new directory named `test-run` and will contain a file named `data.ndjson` which contains something like:

```json
{"meta":{},"name":"color.mean.r","timestamp":"2022-08-23T13:38:04.619466000","value":32.67932074652778}
{"meta":{},"name":"color.mean.g","timestamp":"2022-08-23T13:38:04.619466000","value":19.087491319444446}
{"meta":{},"name":"color.mean.b","timestamp":"2022-08-23T13:38:04.619466000","value":10.337491319444444}
```

If we run `python3 main.py` again, then we'll see new data appended to that file:

```json
{"meta":{},"name":"color.mean.r","timestamp":"2022-08-23T13:38:04.619466000","value":32.67932074652778}
{"meta":{},"name":"color.mean.g","timestamp":"2022-08-23T13:38:04.619466000","value":19.087491319444446}
{"meta":{},"name":"color.mean.b","timestamp":"2022-08-23T13:38:04.619466000","value":10.337491319444444}
{"meta":{},"name":"color.mean.r","timestamp":"2022-08-23T13:38:19.719910000","value":30.90709743923611}
{"meta":{},"name":"color.mean.g","timestamp":"2022-08-23T13:38:19.719910000","value":16.61302517361111}
{"meta":{},"name":"color.mean.b","timestamp":"2022-08-23T13:38:19.719910000","value":8.565154079861111}
```

This provides a convenient way to understand the behavior of an app, particularly one with a more complicated flow.

### Uploading a snapshot

Finally, the last change we'll make is to upload our snapshots after publishing the mean color.

We'll upload every snapshot for demonstration purposes, but you wouldn't want to do this in a real app. Instead, you'd typically upload in response to detecting an event such as an anomalous object or loud noise.

```python
import numpy as np

from waggle.plugin import Plugin
from waggle.data.vision import Camera


def compute_mean_color(image):
    return np.mean(image, (0, 1)).astype(float)


def main():
    with Plugin() as plugin:
        # open camera and take snapshot
        with Camera() as camera:
            snapshot = camera.snapshot()

        # compute mean color
        mean_color = compute_mean_color(snapshot.data)

        # publish mean color
        plugin.publish("color.mean.r", mean_color[0], timestamp=snapshot.timestamp)
        plugin.publish("color.mean.g", mean_color[1], timestamp=snapshot.timestamp)
        plugin.publish("color.mean.b", mean_color[2], timestamp=snapshot.timestamp)

        # save and upload image
        snapshot.save("snapshot.jpg")
        plugin.upload_file("snapshot.jpg", timestamp=snapshot.timestamp)


if __name__ == "__main__":
    main()
```

Let's run our app again using:

```sh
export PYWAGGLE_LOG_DIR=test-run
python3 main.py
```

If you take a look in the `test-run/uploads` directory, you should now see an image.

Uploads are added to the run log directory using the format `nstimestamp-filename`.

You should also see a corresponding item in the `data.ndjson` file.

```json
{"meta":{},"name":"color.mean.r","timestamp":"2022-08-23T13:39:34.985679000","value":29.601871744791666}
{"meta":{},"name":"color.mean.g","timestamp":"2022-08-23T13:39:34.985679000","value":16.004838324652777}
{"meta":{},"name":"color.mean.b","timestamp":"2022-08-23T13:39:34.985679000","value":8.217218967013888}
{"meta":{"filename":"snapshot.jpg"},"name":"upload","timestamp":"2022-08-23T13:39:34.985679000","value":"/Users/sean/dev/pw-example/test-run/uploads/1661279974985679000-snapshot.jpg"}
```

### Tools for analyzing run logs (Optional)

If you find yourself working with run logs frequently, we recommend the [Sage data client](https://pypi.org/project/sage-data-client/) which provides convenient functionality for loading and doing analysis on the `data.ndjson` file. See the ["Load results from file" example](https://github.com/sagecontinuum/sage-data-client#load-results-from-file) for more info.

## Next steps

Congratulations! You've finished preparing our example code for the edge!

In the [part 3](testing-an-edge-app), we'll look at how we can build and test our app on a real node!
