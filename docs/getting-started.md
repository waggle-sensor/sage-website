---
sidebar_label: Getting Started
sidebar_position: 1
---

import { Button, Step, StepLabel, Stepper, StepContent, Chip} from '@mui/material'
import BrowserOnly from '@docusaurus/BrowserOnly'

# Getting Started with Sage

This guide can help you get started based on your specific needs and expertise.

### What is Sage?

Sage is a national AI research platform that brings artificial intelligence to the edge—right where data is collected in real time. Built around powerful, sensor-equipped nodes deployed in natural and urban environments, Sage allows scientists, students, and community partners to run AI directly in the field.

> **[Read more about the Sage Grande Testbed](/about)**

## Creating an account

<BrowserOnly>
  {() => {
    const getUser = require('@site/src/components/getUsername').default;
    return (
      <Stepper orientation="vertical" activeStep={getUser() ? 1 : 0}>
        <Step active={!getUser()} expanded={true} check>
          <StepLabel>
            <big>While many Sage features are open for public use, you'll first need an approved account to perform tasks such as:</big>
          </StepLabel>
          <StepContent>
            <ul>
              <li>Accessing protected data.</li>
              <li>Publishing apps to <a href="https://portal.sagecontinuum.org/apps/explore" target="_blank" rel="noopener noreferrer">the ECR</a>.</li>
              <li>Node access or scheduling apps on nodes (via CLI or <a href="https://portal.sagecontinuum.org" target="_blank" rel="noopener noreferrer">The Portal</a>).</li>
            </ul>
            <p>This will take you to the <b>Globus login page</b> where you'll need to provide your existing organization credentials (recommended). If you do not see your organization, please use an ORCID iD.</p>
            {getUser() && <>✔️ Great! You are signed in as user <b>{getUser()}</b>. ✔️</>}
            {!getUser() && (
              <Button href="https://auth.sagecontinuum.org/?callback=https://sagecontinuum.org/docs/getting-started#creating-an-account" variant="contained" sx={{ width: '300px' }}>
                <span className="normal-case text-[#fff]">Create an Account</span>
              </Button>
            )}
          </StepContent>
        </Step>
        <Step active={getUser()} expanded={true}>
          <StepLabel><big>Do you need to request node access or access to protected data?</big></StepLabel>
          <StepContent>
            <p>Follow the steps here to request node access, scheduling access, or protected file download access:</p>
            <Button href="https://portal.sagecontinuum.org/account/access" target="_blank" variant="contained" disabled={!getUser()}>
              <span className="normal-case text-[#fff]">Request Access or Join project</span>
            </Button>
          </StepContent>
        </Step>
        <Step active={getUser()} expanded={getUser()}>
          <StepLabel><big>Next Steps</big></StepLabel>
          <StepContent>
            <p>If you have already requested access, consider browsing the <b><a href="https://portal.sagecontinuum.org" target="_blank" rel="noopener noreferrer">The Portal</a></b> or taking a look behind. Please <b><a href="./contact-us">Contact us</a></b> if you haven't heard from us within 48 hours or if your request is urgent.</p>
          </StepContent>
        </Step>
      </Stepper>
    );
  }}
</BrowserOnly>

---

## Choose your path

Select the path that best describes your role and goals:

### 🤖 AI Developers
**You want to create edge AI applications and deploy them on sensor nodes**

**What you'll learn:**
- How to develop and deploy edge applications
- Working with sensor data and AI/ML models
- Publishing apps to the Edge Code Repository (ECR)

**Quick Start:**
1. [Create an account](#creating-an-account)
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
1. [Create an account](#creating-an-account) (optional for public data)
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
- How to set up educational environments using Sage nodes and data
- Creating hands-on AI projects with real data


**Quick Start:**
1. [Read about Sage's Educational Impact](/about#educational-and-community-impact)
2. [Create an account](#creating-an-account)
3. [Accessing Data](./tutorials/accessing-data) (for classroom examples)
4. [Introduction to Edge Apps](./tutorials/edge-apps/intro-to-edge-apps)
5. AI Curriculum Development – Coming soon.  **[Contact us](./contact-us)** to collaborate!
6. AI & Data Science Boot Camps, Hackathons, and Workshops – Check back later or **[Contact us](./contact-us)**


**Key Resources:**
- [Sample Data for Education](./tutorials/accessing-data#data-bundles)
- [Edge App Examples](https://portal.sagecontinuum.org/apps/)

---

### ⚙️ AI Infrastructure & Operations
**You want to manage infrastructure, deploy systems, and integrate sensors**

**What you'll learn:**
- How to deploy and manage sensor nodes
- Integrating new sensors and hardware
- Managing distributed systems

**Quick Start:**
1. [Create an account](#creating-an-account)
2. [Architecture Overview](./about/architecture)
3. [Access Waggle Sensors](./tutorials/access-waggle-sensors)
4. [Developer Quick Reference](./category/reference-guides)

**Key Resources:**
- [System Architecture](./about/architecture)
- [WSN Manual](./installation-manuals/wsn-manual)
- [Plugin Control Tools](./reference-guides/pluginctl)
- [Sensor Control Tools](./reference-guides/sesctl)

---

## Common first steps

Regardless of your path, here are some universal first steps:

### 1. Create an account
Some features require an approved account. [Follow these steps above](#creating-an-account) to get started.

### 2. Explore the platform
- Visit the [Sage Portal](https://portal.sagecontinuum.org) to see live data and applications
- Browse the [Edge Code Repository](https://portal.sagecontinuum.org/apps/) to see existing applications
- Check out the [Architecture Overview](./about/architecture) to understand the system

### 3. Access data
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

### 4. Join the community
- [Contact us](./contact-us) for support and questions
- Join our community discussions and events
- Contribute to open-source components

## Next steps

Once you've completed your chosen path, you can:

- **Collaborate** with other researchers and developers
- **Publish** your applications and findings
- **Scale** your solutions across multiple nodes
- **Contribute** to the open-source ecosystem

## Need help?

- **Documentation**: Browse the [tutorials](./category/tutorials) and [reference guides](./category/reference-guides/)
- **Support**: [Contact our team](./contact-us)
- **Examples**: Check out some existing applications in the [ECR](https://portal.sagecontinuum.org/apps/)

---

*Ready to get started? Choose your path above and begin your journey with Sage!*