---
sidebar_position: 3
---

# Part 3: Testing an edge app

In the [previous part](creating-an-edge-app), we took a code snippit and iterated on it until it was ready for the edge. By the end, we had basic camera access and publishing working!

Now, we're ready to start testing it on a development node and describing our build steps.

## Accessing development nodes

The first thing we need to do is get access to a development node. Unfortunately, we are still developing the infrastructure to open this up to general users.

For now, please [contact us](/docs/contact-us) to request access to a development node and we'll work with you to setup access.

## Creating a repo for our app

Before connecting to our node, let's take a moment to organize our code into a repo we will later use on the node.

Go ahead and create a new Github repo named `app-tutorial` and commit the files from [previous part](creating-an-edge-app).

## Building our app

Now that we've setup node access, ssh to the node then clone and cd into your `app-tutorial` repo:

```sh
git clone https://github.com/username/app-tutorial
cd app-tutorial
```

The first thing we'll do is build our app on the node:

```sh
sudo pluginctl build .
```

This may take some time, but once it completes you should see something like:

```txt
Sending build context to Docker daemon  59.39kB
Step 1/6 : FROM waggle/plugin-base:1.1.1-base
...
Step 2/6 : WORKDIR /app
...
Step 3/6 : COPY requirements.txt .
...
Step 4/6 : RUN pip3 install --no-cache-dir -r requirements.txt
...
Step 5/6 : COPY . .
...
Step 6/6 : ENTRYPOINT ["python3", "main.py"]
...
b38bc0a208d0: Pushed 
1101ffccd70a: Pushed 
latest: digest: sha256:7bee2a62fbcc9913f1c53bbdab79e973e70947618ffe4db90cae6a8f0ff6c8d7 size: 2407
Successfully built plugin

10.31.81.1:5000/local/app-tutorial
```

Once we see `Successfully built plugin`, we can continue to running our app.

## Running our app

When we successfully built our app, the last line of output was `10.31.81.1:5000/local/app-tutorial`. We will
now use this reference to run our app.

```sh
sudo pluginctl run --name app-tutorial 10.31.81.1:5000/local/app-tutorial
```

When you run this, you'll see that there's a bug in the code:

```sh
Launched the plugin app-tutorial-1659971085 successfully 
INFO: 2022/08/08 15:04:45 run.go:63: Plugin is in "Pending" state. Waiting...

[ WARN:0@0.032] global /io/opencv/modules/videoio/src/cap_v4l.cpp (902) open VIDEOIO(V4L2:/dev/video0): can't open camera by index
Traceback (most recent call last):
  File "main.py", line 32, in <module>
    main()
  File "main.py", line 15, in main
    with Camera() as camera:
  File "/usr/local/lib/python3.8/dist-packages/waggle/data/vision.py", line 107, in __enter__
    self.capture.__enter__()
  File "/usr/local/lib/python3.8/dist-packages/waggle/data/vision.py", line 133, in __enter__
    raise RuntimeError(f"unable to open video capture for device {self.device!r}")
RuntimeError: unable to open video capture for device 0
```

This was caused by the fact that most nodes have multiple cameras, so we need to be more specific about which camera to use.

To address this, we'll change the following line in `main.py` from:

```python
        with Camera() as camera:
```

to:

```python
        with Camera("left") as camera:
```

_The specific camera name will depend on your specific node. If you are having problems accessing a camera, please [contact us](/docs/contact-us) for more details._

After rebuilding and running this again, the plugin should run and exit cleanly:

```txt
Launched the plugin app-tutorial-1659971085 successfully 
INFO: 2022/08/08 15:04:45 run.go:63: Plugin is in "Pending" state. Waiting...
# should exit cleanly with no output
```

Now that we know this works, please commit and push the change to the repo from your machine.

Finally, if you are rebuilding and running code frequently, you can combine the build and run into a single step as follows:

```sh
sudo pluginctl run --name app-tutorial $(sudo pluginctl build .)
```

## Viewing our output

We'll close this part, by looking at the data we just published. To do this, we'll query the [Beehive Data Repository](/docs/about/architecture#data-repository-dr):

```sh
curl -s 'Content-Type: application/json' https://data.sagecontinuum.org/api/v1/query -d '
{
    "start": "-5m",
    "filter": {
        "task": "app-tutorial"
    }
}'
```

You should see some results like:

```json
{"timestamp":"2022-08-08T15:04:48.820981933Z","name":"color.mean.b","value":133.61671793619792,"meta":{"host":"000048b02d15bdc2.ws-nxcore","job":"Pluginctl","node":"000048b02d15bdc2","plugin":"app-tutorial","task":"app-tutorial","vsn":"W02F"}}
{"timestamp":"2022-08-08T15:04:48.820981933Z","name":"color.mean.g","value":136.46639404296874,"meta":{"host":"000048b02d15bdc2.ws-nxcore","job":"Pluginctl","node":"000048b02d15bdc2","plugin":"app-tutorial","task":"app-tutorial","vsn":"W02F"}}
{"timestamp":"2022-08-08T15:04:48.820981933Z","name":"color.mean.r","value":134.48696818033855,"meta":{"host":"000048b02d15bdc2.ws-nxcore","job":"Pluginctl","node":"000048b02d15bdc2","plugin":"app-tutorial","task":"app-tutorial","vsn":"W02F"}}
{"timestamp":"2022-08-08T15:04:48.820981933Z","name":"upload","value":"https://storage.sagecontinuum.org/api/v1/data/Pluginctl/sage-app-tutorial-app-tutorial/000048b02d15bdc2/1659971088820981933-snapshot.jpg","meta":{"filename":"snapshot.jpg","host":"000048b02d15bdc2.ws-nxcore","job":"Pluginctl","node":"000048b02d15bdc2","plugin":"app-tutorial","task":"app-tutorial","vsn":"W02F"}}
```

These are exactly the mean color values we computed and published!

This is intended to be a quick preview of how to access data to help get you started. If you are interested, we cover this topic in much depth [here](../accessing-data).

## Next steps

Now we've been able to build, run and even fix a bug in our code! In [part 4](publishing-to-ecr), we'll see how to publish a first release of our code to the Edge Code Repository!
