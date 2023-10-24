---
sidebar_position: 4
---

# Access Waggle sensors
A Waggle sensor is an entity that produces measurements of a phenomenon and that helps users analyze what is happening in the environment. There are sensors already hosted by Waggle and also sensors that are being integrated into Waggle as a user-hosted sensor. A sensor does not necessarily mean a physical device, but can be a program producing measurements from data -- we call it __software-defined sensor__. Once those sensors become available in Waggle nodes edge applications running inside the nodes can pull measurements from the sensors to process them.

In general, Waggle sensors are desinged to be accessible from any edge applications running on the Waggle node that hosts the sensors, but can be limited their access to groups and personnel. For example, a pan-tilt-zoom featured camera may be only accessed from authorized applications in order to prevent other applications from operating the camera. Ideally, Waggle sensors can form and support the Waggle ecosystem where sensor measurements are integrated and used by edge applications for higher level computation and complex decision making.

## Waggle physical sensors
![Figure 1: Sensors of Waggle node](./images/waggle_node.jpg)
The Waggle node is designed to accommodate sensors commonly used to support environmental science, but not limited to host other sensors. The currently supported sensors are,

_NOTE: not all Waggle nodes have the same set of sensors, and the sensor configuration depends on what to capture from the environment where the node is deployed_

<table className="full-width">
  <tbody>
    <tr>
      <td><a href="https://portal.sagecontinuum.org/sensors/BME680">BME680</a></td>
      <td>temperature, humidity, pressure, and gas</td>
      <td>
        <a href="https://portal.sagecontinuum.org/query-browser?type=names&names=env.temperature">preview</a>
      </td>
    </tr>
    <tr>
      <td><a href="https://portal.sagecontinuum.org/sensors/RG-15">RG-15</a></td>
      <td>rainfall</td>
      <td><a href="https://portal.sagecontinuum.org/query-browser?apps=.*plugin-raingauge.*&window=h">preview</a></td>
    </tr>
    <tr>
      <td><a href="https://portal.sagecontinuum.org/sensors/ML1-WS%20IP54">ETS ML1-WS</a></td>
      <td>20-16 kHz microphone recording sound</td>
      <td rowSpan="5"></td>      
    </tr>
    <tr>
      <td><a href="https://portal.sagecontinuum.org/sensors/XNV-8080R">XNV-8080R</a></td>
      <td>5 MP camera with 92.1 degree horizontal and 67.2 degree vertical angle view</td>
    </tr>
      <tr>
      <td><a href="https://portal.sagecontinuum.org/sensors/XNV-8082R">XNV-8082R</a></td>
      <td>6 MP camera with 114 degree horizontal and 62 degree vertical angle view</td>
    </tr>
      <tr>
      <td><a href="https://portal.sagecontinuum.org/sensors/XNF-8010RV">XNF-8010RV</a></td>
      <td>6 MP fisheye camera with 192 degree horizontal and vertical angle view</td>
    </tr>
    <tr>
      <td><a href="https://portal.sagecontinuum.org/sensors/XNV-8081Z">XNV-8081Z</a></td>
      <td>5 MP digital pan-tilt-rotate-zoom camera</td>
    </tr>
  </tbody>
</table>

Any collaborators and user communities can bring up their sensors to Waggle node. The node can easily host sensor devices that support serial interface as well as network interface (e.g., http, rtsp, etc). Other currently supported user sensors include:

- Software-defined Radio: detecting raindrops and snow flakes
- Radiation detector: radiation detector
- LIDAR: distance of nearby objects
- Mobotix: infrared camera

[[view more...](https://portal.sagecontinuum.org/sensors)]

## Waggle software-defined sensors
Software-defined sensors are limitless as edge applications define them. You can start building your edge application that publishes outputs using [PyWaggle's basic example](https://github.com/waggle-sensor/pywaggle/blob/main/docs/writing-a-plugin.md#basic-example) that can become a software-defined sensor. Later, such outputs can be consumed by other edge applications to produce higher level information about the measurements. A few example of Waggle software-defined sensors are,

- [Object Counter](https://portal.sagecontinuum.org/apps/app/yonghokim/object-counter): `env.count.OBJECT` counts objects from an image, where `OBJECT` is the object name that is recognized
- [Cloud Coverage Estimator](https://portal.sagecontinuum.org/apps/app/seonghapark/cloud-cover): `env.coverage.cloud` provides a percentage of cloud covered in an image

## Access to Waggle sensors
![Figure 2: Access to Waggle sensors](./images/access_to_sensors.svg)

Waggle sensors are integrated into Waggle using the PyWaggle library. PyWaggle utilizes AMQP, [the message publishing and subscribing mechanism](https://www.amqp.org), to support exchanging sensor measurements between device plugins and edge applications. An edge application can subscribe and process those measurements using [PyWaggle's subscriber](https://github.com/waggle-sensor/pywaggle/blob/main/docs/writing-a-plugin.md#subscribing-to-other-measurements). The application then produces its output and publishes it as a measurement back to the system using [PyWaggle publisher](https://github.com/waggle-sensor/pywaggle/blob/main/docs/writing-a-plugin.md#more-about-the-publish-function).

PyWaggle often provides edge applications direct access to physical sensors. For sensors that support realtime protocols like RTSP and RTP and others, PyWaggle exposes those protocols to edge applications, and it is up to the applications to process data using given protocol. For example, RTSP protocol can be handled by OpenCV's VideoCapture class inside an application. If any physical sensor device that requires a special interfacing to the device, an edge application that supports the interfacing need to run in order to publish sensor measurements to the system, and later those measurements are used by other edge applications.

## Example: sampling images from camera
It is often important to sample images from cameras in the field to create initial dataset for a machine learning algorithm. [The example](https://github.com/waggle-sensor/pywaggle/blob/main/docs/writing-a-plugin.md#accessing-a-video-stream) describes how to access to a video stream from a camera sensor using PyWaggle.

## Bring your own sensor to Waggle
Users may need to develop their own device plugin to expose the sensor to the system, or to publish measurement data from the sensor to the cloud. Unlike an edge application or software-defined sensors, device plugins communicating with a physical sensor may need special access, e.g. serial port, in order to talk to the sensor attached to Waggle node. Such device plugin may need to be verified by the Waggle team. Visit the [Building your own Waggle device](./create-waggle.md) page for the guide to set up your Waggle device.

To integrate your sensor device into Waggle, head over to the [Contact Us](../contact-us.md) page
