---
sidebar_position: 6
---

# Cloud compute & HPC on edge data

Waggle provides a number of interfaces which other computing and HPC systems can build on top of. In this section, we explore some of the most common applications of Waggle.

## Triggering on data from the edge

A common application is monitoring data from the edge and triggering actions when values exceed a threshold or an unusual event is detected.

As a getting started example, we demonstrate an outline of how this can be done in Waggle using the [Sage data client](https://github.com/sagecontinuum/sage-data-client).

```python
import sage_data_client
import time

while True:
    # query pressure data in recent 10 minute window
    df = sage_data_client.query(
        start="-10m",
        filter={
            "name": "env.pressure",
            "sensor": "bme680",
        }
    )

    # compute stddev for nodes' pressure data in window
    std = df.groupby("meta.vsn").value.std()

    # find all pressure events exceeding an example threshold
    events = std[std > 8.0]

    # "post" vsn to alert system
    for vsn in events.index:
        print(f"post {vsn} to alert system")

    time.sleep(60)
```

The above code queries a 10 minute window of atmospheric pressure data every minute and "posts" alerts for nodes exceeding a predefined standard deviation threshold.

This example and more can be found in the Sage data client [examples](https://github.com/sagecontinuum/sage-data-client/blob/main/examples/) directory.
