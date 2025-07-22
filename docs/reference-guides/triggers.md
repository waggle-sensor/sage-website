---
sidebar_label: Trigger examples
sidebar_position: 4
---

# Trigger Examples

This page provides a few examples of triggers within Sage. Triggers are programs which generally use data and events from the edge or cloud to automatically drive or notify other behavior in the system.

## Cloud-to-Edge Examples

Cloud-to-edge triggers are programs running in the cloud which monitor events or external data sources and then, in response, change some behavior on the nodes.

### [Severe Weather Trigger](https://github.com/waggle-sensor/severe-weather-trigger-example)

This example starts and stops jobs in response to severe weather events scraped from the National Weather Service API.

### [Wildfire Trigger](https://github.com/waggle-sensor/wildfire-trigger-example)

This example looks at results from the smoke detector job and modify its own scheduling interval in response. The concept is that as smoke is detected, we want to run more frequent detections.

## Edge-to-Cloud Examples

Edge-to-cloud triggers are programs which monitor data published from the nodes and use it, potentially along with additional data sources, to perform some computation or actions.

### [Sage Data Client Batch Trigger](https://github.com/sagecontinuum/sage-data-client/blob/main/examples/trigger-batch.py)

This is a simple batch trigger example of using [Sage Data Client](https://pypi.org/project/sage-data-client/) to print nodes where the internal mean temperature exceeds a threshold every 5 minutes.

### [Sage Data Client Stream Trigger](https://github.com/sagecontinuum/sage-data-client/blob/main/examples/trigger-stream.py)

This is an example of using [Sage Data Client](https://pypi.org/project/sage-data-client/) to watch the data stream and print nodes where the internal temperature exceeds a threshold.
