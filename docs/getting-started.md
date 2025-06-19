---
sidebar_label: Getting Started
sidebar_position: 0
---

# Getting Started with Sage

Welcome to Sage, a distributed software-defined sensor network that enables intelligent edge computing. This guide will help you get started based on your specific needs and expertise.

## What is Sage?

Sage is a cyberinfrastructure platform that deploys intelligent sensor nodes across remote and urban environments. These nodes can:

- **Collect data** from various sensors (infrared cameras, RGB cameras, LiDAR, and traditional sensors for air quality and wind, as well as LoRaWAN connected sensors for low-bandwidth measurements such as soil moisture)
- **Process data locally** using machine learning algorithms and AI models on embedded computers
- **Transmit results** to central servers for further analysis
- **Enable real-time monitoring** and automated responses and insights to events

[Read More About the Sage Grande Testbed](/about)

## Choose Your Path

Select the path that best describes your role and goals:

### 🤖 AI Developers
**You want to create edge AI applications and deploy them on sensor nodes**

**What you'll learn:**
- How to develop and deploy edge applications
- Working with sensor data and AI/ML models
- Publishing apps to the Edge Code Repository (ECR)

**Quick Start:**
1. [Create an account](./tutorials/create-an-account)
2. [Introduction to Edge Apps](./tutorials/edge-apps/intro-to-edge-apps)
3. [Creating an Edge App](./tutorials/edge-apps/creating-an-edge-app)
4. [Testing on Nodes](./tutorials/edge-apps/testing-an-edge-app)
5. [Publishing to ECR](./tutorials/edge-apps/publishing-to-ecr)

**Key Resources:**
- [Developer Quick Reference](./reference-guides/dev-quick-reference)
- [Edge App Cookiecutter Template](https://github.com/waggle-sensor/cookiecutter-sage-app)

---

### 📊 AI Users
**You want to access and analyze sensor data and AI-generated inferences and insights**

**What you'll learn:**
- How to query and download sensor data
- Working with the Sage Data API
- Analyzing data and AI inferences

**Quick Start:**
1. [Create an account](./tutorials/create-an-account) (optional for public data)
2. [Accessing Data](./tutorials/accessing-data)
3. [Cloud Compute & HPC](./tutorials/cloud-compute)
4. [Schedule Jobs](./tutorials/schedule-jobs)

**Key Resources:**
- [Sage Data Client](https://pypi.org/project/sage-data-client/)
- [Data API Documentation](https://github.com/waggle-sensor/waggle-beehive-v2/blob/main/docs/querying-measurements.md)
- [Data Bundles](https://web.lcrc.anl.gov/public/waggle/sagedata/SAGE-Data.tar)

---

### 🎓 Educators
**You want to teach AI and data science using real-world sensor networks**

**What you'll learn:**
- How to set up educational environments
- Creating hands-on AI projects with real data
- Building your own sensor nodes for classroom use

**Quick Start:**
1. [Create an account](./tutorials/create-an-account)
2. [Accessing Data](./tutorials/accessing-data) (for classroom examples)
3. [Introduction to Edge Apps](./tutorials/edge-apps/intro-to-edge-apps)

**Key Resources:**
- [Sample Data for Education](./tutorials/accessing-data#data-bundles)
- [Edge App Examples](https://portal.sagecontinuum.org/apps/)

---

### ⚙️ AI Operations
**You want to manage infrastructure, deploy systems, and integrate sensors**

**What you'll learn:**
- How to deploy and manage sensor nodes
- Integrating new sensors and hardware
- Managing distributed systems

**Quick Start:**
1. [Create an account](./tutorials/create-an-account)
2. [Architecture Overview](./about/architecture)
3. [Access Waggle Sensors](./tutorials/access-waggle-sensors)
4. [Developer Quick Reference](./category/reference-guides)

**Key Resources:**
- [System Architecture](./about/architecture)
- [WSN Manual](./installation-manuals/wsn-manual)
- [Plugin Control Tools](./reference-guides/pluginctl)
- [Sensor Control Tools](./reference-guides/sesctl)

---

## Common First Steps

Regardless of your path, here are some universal first steps:

### 1. Explore the Platform
- Visit the [Sage Portal](https://portal.sagecontinuum.org) to see live data and applications
- Browse the [Edge Code Repository](https://portal.sagecontinuum.org/apps/) to see existing applications
- Check out the [Architecture Overview](./about/architecture) to understand the system

### 2. Create an Account
Most features require an approved account. [Follow these steps](./tutorials/create-an-account) to get started.

### 3. Access Data
Start exploring with the [Sage Data Client](https://pypi.org/project/sage-data-client/):

```python
import sage_data_client

# Get recent temperature data
df = sage_data_client.query(
    start="-1h",
    filter={
        "name": "env.temperature",
        "sensor": "bme680"
    }
)

print(df.head())
```

### 4. Join the Community
- [Contact us](./contact-us) for support and questions
- Join our community discussions and events
- Contribute to open-source components

## Next Steps

Once you've completed your chosen path, you can:

- **Collaborate** with other researchers and developers
- **Publish** your applications and findings
- **Scale** your solutions across multiple nodes
- **Contribute** to the open-source ecosystem

## Need Help?

- **Documentation**: Browse the [tutorials](./category/tutorials) and [reference guides](./category/reference-guides/)
- **Support**: [Contact our team](./contact-us)
- **Examples**: Check out some existing applications in the [ECR](https://portal.sagecontinuum.org/apps/)

---

*Ready to get started? Choose your path above and begin your journey with Sage!*