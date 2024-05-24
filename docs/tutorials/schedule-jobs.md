---
sidebar_position: 3
---

# Submit your job

Are you ready to deploy your plugins to measure the world? We will use [edge scheduler](../about/architecture.md#edge-scheduler-es) to submit a job and demonstrate how you can deploy plugins to field-deployed Waggle nodes. 

:::caution
If you have not created your account, please go to [https://portal.sagecontinuum.org](https://portal.sagecontinuum.org) and sign in to create a new account with your email. Once signed in, you will be able to create and edit your jobs, but will need a permission to submit jobs to the scheduler. Please [contact-us](../contact-us.md) to request for the job submission permission.
:::

Jobs are an instance of a science goal. They detail what needs to be accomplished on Waggle nodes. A science goal may have multiple jobs to fill the missing data to answer scientific questions of the goal. A job describes,
- [plugins](../about/architecture.md#what-is-a-plugin) that are registered and built in [edge code repository](../about/architecture.md#edge-code-repository-ecr) with specification including any plugin arguments,
- a list of Waggle nodes on which the plugins will be scheduled and run,
- science rules describing a condition-action set that includes when the plugins should be scheduled,
- conditions to determine when the job is considered as completed

Creating and submitting jobs are an important step for successful science mission using Waggle nodes.

## Create a job

We create a job file in YAML format (JSON format is also supported. Please check out [details of job attributes](https://github.com/waggle-sensor/edge-scheduler/tree/main/docs/sesctl).)

```bash
cat << EOF > myjob.yaml
---
name: myjob
plugins:
- name: image-sampler
  pluginSpec:
    image: registry.sagecontinuum.org/theone/imagesampler:0.3.0
    args:
    - -stream
    - bottom_camera
nodes:
  W023:
scienceRules:
- "schedule(image-sampler): cronjob('image-sampler', '* * * * *')"
successcriteria:
- WallClock(1d)
EOF
```

In this example, we want to schedule a plugin named `image-sampler` to collect an image from the camera named `bottom_camera` on `W023` node. As a result of the job execution, we will get images from the node's camera. The job also specifies that the plugin needs to be scheduled every minute (i.e., `* * * * *` in [crontab expression](https://crontab.guru/)). The job completes 24 hours after the job started to run on the node.

:::info
We support human-friendly names for the sensors we host. The "bottom_camear" is named based on the orientation the camera is attached to the node. The full list of sensors including cameras for the `W023` node can be found [here](https://auth.sagecontinuum.org/manifests/w023/)
:::

:::note
We currently do not check job's success criteria. This means that once a job is submitted it is served forever. We will update our system to support different conditions for the success criteria attribute.
:::

## Upload your job to the scheduler

`sesctl` is a command-line tool to manage jobs in the scheduler. You can download the latest version from our [Github repository](https://github.com/waggle-sensor/edge-scheduler/releases). Please make sure you download the tool supported for your machine. For example, on Linux desktop or laptop you would download linux-amd64 version of the tool. Please see the [sesctl document](https://github.com/waggle-sensor/edge-scheduler/tree/main/docs/sesctl#readme) for more details.

:::note
Once you have [contacted us](../contact-us.md) for access permissions, you will need a token provided from [the access page](https://portal.sagecontinuum.org/account/access). Replace the `<<user token>>` below with the access token provided on this page.
:::

You can set the SES host and user token as an environmental variable to your terminal. Please follow your shell's guidance to set them properly. In Bash shell,
```bash
export SES_HOST=https://es.sagecontinuum.org
export SES_USER_TOKEN=<<user token>>
```

Let's ping the scheduler in the cloud,
```bash
sesctl ping
```

You will get a response "pong" from the scheduler,
```
{
 "id": "Cloud Scheduler (cloudscheduler-sage)",
 "version": "0.18.0"
}
```

To create a job using the job file,
```bash
sesctl create --file-path myjob.yaml
```

The scheduler will return a job id and the state for the job creation,
```bash
{
 "job_id": "56",
 "job_name": "myjob",
 "state": "Created"
}
```

To verify that we have uploaded the job,
```bash
sesctl stat
```

You will see the job entry from the response of the command,
```bash
JOB_ID  NAME                         USER       STATUS     AGE     
====================================================================
...
56      myjob                        theone     Created    - 
...
```

## Submit the job

To submit the job,

```bash
sesctl submit --job-id 56
```

The response should indicate that the job state is changed to "Submitted",
```bash
{
 "job_id": "56",
 "state": "Submitted"
}
```

:::note
You may receive a list of errors from the scheduler if the job fails to be validated. For instance, your account may not have scheduling permission on the node `W023`. Please consult with us for any error, especially errors related to scheduling permission on nodes in the job.
:::

## Check status of jobs
We check status of the job we submitted,
```bash
sesctl stat --job-id 56
```

The tool will print details of the job,
```bash
===== JOB STATUS =====
Job ID: 56
Job Name: myjob
Job Owner: 
Job Status: Submitted
Job Starttime: 2022-10-10 02:21:37.373437 +0000 UTC

===== SCHEDULING DETAILS =====
Science Goal ID: 45afe963-5b8b-4e15-654c-54e2946f2ddb
Total number of nodes 1
```

The job status can be also shown in [job status page](https://portal.sagecontinuum.org/job-status).

## [Access to data](./access-waggle-sensors.md)

A few minutes later, the `W023` Waggle node would start collecting images by scheduling the plugin on the node. Collected images are transferred to [Beehive](../about/architecture.md#beehive) for users to download.

```console
curl -H 'Content-Type: application/json' https://data.sagecontinuum.org/api/v1/query -d '
{
    "start": "-5m",
    "filter": {
        "task": "image-sampler",
        "vsn": "W023",
        "name": "upload"
    }
}
'
```

## Clean it up
As we approach to the end of this tutorial, we need to clean up the job because otherwise it will be served forever. To remove the job from the scheduler,
```bash
# since the job is running, we remove the job forcefully
sesctl rm --force 56
```

You should see output that looks like,
```bash
{
 "job_id": "56",
 "state": "Removed"
}
```

## More tutorials using _sesctl_

More tutorials can be found in our [Github repository](https://github.com/waggle-sensor/edge-scheduler/tree/main/docs/sesctl).

## Creating job description with advanced science rules for supporting realistic science mission
The science rule used in the tutorial asked the scheduler to schedule the image sampler plugin every minute. For collecting training images from a set of Waggle nodes this makes total sense with the science rule. However, users in Waggle should want more complex behaviors at the node to not only schedule plugins, but enable cloud computation triggered by sending local events to the cloud. The events and triggers can be captured by creating science rules that monitor local sensor measurement on nodes. Please visit the [science rules](https://github.com/waggle-sensor/edge-scheduler/blob/main/docs/sciencerules/README.md) to know more complex science rules that user can create.
