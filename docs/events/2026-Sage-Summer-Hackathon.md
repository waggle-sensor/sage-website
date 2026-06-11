---
sidebar_label: Sage Grande Summer of AI
slug: 2026-Sage-Summer-Hackathon
---
import Button from '@mui/material/Button'


# Sage Grande: Summer of AI


![Collage of Sage Summer of AI event images. UIC Viz Lab, a Sage Thor-blade, a ptz camera, and wild sage node (v1)](./img/2026-sage-summer-hackathon-collage.jpg)

## Hack and Build AI@Edge

**Dates:** Monday, July 20 – Tuesday, July 28, 2026 \
**Location:** [UIC Electronic Visualization Laboratory (EVL)](https://www.evl.uic.edu/location), Chicago, IL \
**Format:** In-person with hands-on lab sessions \
**Audience:** Graduate students, postdoctoral researchers, and early-career
scientists

:::info
**Sign-up is now closed.** If you're still interested in attending, please **[contact us](/docs/contact-us)** and we'll do our best to accommodate you.  Everyone who has already signed up will receive an update by **Monday, June 15** with confirmation details and next steps.
:::

<Button
  variant="contained"
  disabled
  className="!normal-case hover:text-white hover:opacity-80"
>
  <span>Sign-up Closed</span>
</Button>

### Program Overview

This intensive seven-day summer camp brings together students and postdoctoral
researchers for a deep, hands-on immersion in building and deploying AI systems at the
edge using the Sage platform. Participants will work directly with real Sage nodes,
moving beyond textbook concepts to build, test, and deploy working AI pipelines on live
infrastructure.

The program is structured around a combination of morning and afternoon sessions, along with several hackathons.
Each day builds on the previous, moving from platform fundamentals through AI model deployment, data integration, sensor
expansion, and autonomous agent design. By the end of the week, participants will
have shipped real code to real nodes — including new sensors, new AI models, and
new automated workflows.

This is a hands‑on, collaborative experience. Participants are encouraged to bring their
own research ideas, sensors, and questions, and to play an active role in expanding the
Sage platform throughout the week.

### Prerequisite Skills

To get the most out of this program, participants are encouraged to arrive with the following:

- A general comfort with SSH and basic Linux command‑line tools (moving around the filesystem, managing files, checking processes, etc.)
- Some hands‑on experience running AI models locally — tools like Ollama or LM Studio are great starting points, but anything similar is perfectly fine
- A working familiarity with Python, including writing simple scripts, using virtual environments, and installing packages
- Basic familiarity with containers (Docker or similar) is helpful but not required

Participants should bring a laptop set up for local Python development. Some exercises may
require running models and tools on your own machine as well as on the provided nodes.

### Daily Schedule

| Time | Activity |
|------|----------|
| 8:00 AM – 9:30 AM | Open hacking / independent work |
| 10:00 AM – 12:30 PM | **Morning session (3 hrs)** |
| 12:30 PM – 1:30 PM | Lunch (on your own — campus dining or nearby restaurants) |
| 1:30 PM – 4:30 PM | **Afternoon session (3 hrs)** |
| 4:30 PM – 6:00 PM | Open hacking / independent work |
| Evening | Dinner on your own; hacking in teams, optional after-hours activities (see below) |


### Agenda:

#### Sunday, July 19: Check-in

Check-in and informal welcome dinner.

#### Monday, July 20: Sage Foundations and System Software

A comprehensive tour of the full Sage software stack, from node boot to the lifecycle of a running application. Topics include the node architecture, the Kubernetes‑based container orchestration system, the `pluginctl` scheduler, and the data pipeline.

By the end of this session, participants will have:

- Code development and AI coding assistant environment set up and working with GitHub
- Submitted several AI prompts to Sage nodes
- Submit a Sage job that calls an existing Sage inference service

#### Tuesday Morning, July 21: Finalize Setup

Modern AI development tools — including large language models, code agents, and Model Context Protocol (MCP) servers — are transforming how scientific software is written and maintained. Students will be testing their AI development toolchains:

- Using tools such as Cursor and Claude Code for AI‑assisted programming
- Setting up MCP servers to give AI agents access to Sage APIs and node‑management tools
- Prompt‑engineering strategies for generating reliable, testable code

By the end of this session, students will have completed several foundational Sage skill checkpoints -- AI development environment complete, submit job, explore cloud data, demonstrate your skills and begin making plans for your own project -- what will you accomplish before finishing the Summer Camp?  Create a project plan with your AI assistant.

#### Tuesday Afternoon, July 21: AI+Sage (part 1)

The scientific value of AI depends on accurate, reliable, and efficient AI models running on its nodes. This session surveys the models currently deployed across the fleet, such as:

- **BioClip2** — species identification from camera imagery
- **YOLO variants** — real‑time object detection for wildlife, vehicles, and human presence
- **Flood detection** — water‑level and inundation classification
- **Cloud motion vectors** — atmospheric dynamics estimation
- **Wildfire and smoke detection** — early warning from RGB and thermal imagery

#### Wednesday, July 22: AI+Sage (part 2 & 3)

AI Workflows:

- Test model performance on real datasets
- Understand failure modes and edge cases
- Identify opportunities for improvement
- Discover and adapt new models from Hugging Face and other sources
- Apply quantization and optimization for edge deployment
- Submit new models to the Edge Code Repository (ECR)

#### Thursday Morning, July 23: AI+Sage (part 4)

Wrap up end-to-end AI exploration and work with AI coding agent to advance your project

#### Thursday Afternoon, July 23: NRP/NDP and NSF Resources

The NSF provides cyberinfrastructure for research, including the National Data Platform (NDP), the National Research Platform (NRP), and NSF supercomputer centers such as SDSC, TACC, and NCSA.  This session will guide students through connecting Sage data and AI computation to other NSF resources.

Using the Sage generates a continuous stream of data from hundreds of nodes nationwide. We will explore how to work with data effectively - from raw sensor readings to publication‑ready datasets.

Topics include:

- Querying Beehive data using the Sage Data Client and HTTP APIs
- Integrating Sage data with NEON, NOAA, and satellite imagery
- Publishing and citing datasets using DOIs and FAIR principles
- Working with the Pelican data federation and open data catalogs
- Connecting Sage workflows to NSF cyberinfrastructure (TACC, NDP, NRP)

Participants will build end‑to‑end data pipelines that move from raw measurements to reproducible, shareable outputs.

#### Friday, July 24: Sensors, Hardware, and Physical Integration

Sage nodes are extensible — new sensors and hardware can be added to expand observational capabilities. This hands‑on session explores sensor integration from first principles. Participants are encouraged to bring their own hardware.

Topics (to be finalized):

- Infrasound sensors
- Seismic sensors
- Hyperspectral cameras
- HaLow (802.11ah) wireless cameras
- LoRaWAN sensor nodes
- Actuators and robotic systems (PTZ cameras, robotic arms, autonomous platforms)

A full walkthrough will be provided: hardware bring‑up, driver development, containerization, testing, documentation, and deployment. The goal is for each team to integrate and deploy at least one new sensor to a nearby node.

#### Saturday, July 25: Community Day

Chicago River Architecture tour, Chicago pizza, etc.  Networking and team building.  Hacking.

#### Sunday, July 26: Free Day

Self-directed exploration, project planning, or if needed, rest :-)

#### Monday Morning, July 27: The Future

AI Agents, Autonomous systems, future Sage opportunities.  Project plans finalized

AI agents capable of perception, reasoning, and action are emerging as a powerful paradigm for scientific instrumentation.
Sage is developing experimental frameworks for deploying such agents on edge nodes—systems that can monitor data streams, make decisions, and autonomously control node behavior, from steering PTZ cameras to triggering sampling events to adjusting operating parameters in response to changing conditions.

This session covers:

- Autonomous architecture and design principles
- Safety and governance considerations for autonomous systems
- Hands‑on development of agents that interact with real Sage APIs
- Deployment of agents to live nodes (where appropriate)
- Next‑generation edge accelerators
- New sensor modalities
- Evolving NSF cyberinfrastructure capabilities
- Open research questions in scientific edge computing


#### Monday Afternoon, July 27: Hack Time

Work on your project

#### Tuesday Morning, July 28: Development, Testing, and Preparation

#### Tuesday Afternoon, July 28: Project Presentations and Demos

Show off your project!  Celebrate.  Enjoy dinner and farewell.



## Potential Hackathon Projects

Did you have a project in mind?  If not, here are some examples that we can help you with.  Attendees will be encouraged to organize into teams and tackle projects with guidance and support from the Sage team.

#### Image Search at the Edge

Key pieces: translate the NRP Kubernetes config into a pluginctl setup, swap in edge-friendly models (e.g., Gemma4), replace the vector DB with something edge-compatible (e.g., NVIDIA's NanoDB), and run benchmarks. Example creative ideas: pivot from "image search" to generating daily or weekly summaries of what the node sees.

*(More hackathon topics will be selected based on participants' interests and announced prior to registration.)*

### Baseline Deliverables for All Participants

In addition to hackathon project work, all participants are expected to complete the
following by the end of the week:

- Get new code into the ECR and run it on a deployed node
- Process a batch of images using an LLM and write the results to the Beehive
- Build and test a data pipeline connecting two or more sensor streams

## Interest Form

**Sign-up is now closed.** If you're still interested in attending, please [contact us](/docs/contact-us) and we'll do our best to accommodate you.  Everyone who has already signed up will receive an update by **Monday, June 15** with confirmation details and next steps.

<Button
  variant="contained"
  disabled
  className="!normal-case hover:text-white hover:opacity-80"
>
  <span>Sign-up Closed</span>
</Button>
