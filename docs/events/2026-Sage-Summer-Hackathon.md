---
sidebar_label: Sage Grande Summer of AI
slug: 2026-Sage-Summer-Hackathon
---
import Button from '@mui/material/Button'
import UIC from './img/uic-evl-lab.jpg'
import Thor from './img/thor-blade.jpg'
import WSN from './img/wsn.jpg'

# Sage Grande: Summer of AI

<div className="float-right ml-4 flex gap-2">
  <img src={UIC} alt="UIC EVL Lab" style={{maxHeight: 200, width: '100%', objectFit: 'cover', flex: 1, minWidth: 0}} />
  <img src={Thor} alt="Thor blade node" style={{maxHeight: 200, width: '100%', objectFit: 'cover', flex: 1, minWidth: 0}} />
  <img src={WSN} alt="Older wild sage node" style={{maxHeight: 200, width: '100%', objectFit: 'cover', flex: 1, minWidth: 0}} />
</div>

## Hack and Build AI@Edge

**Dates:** Monday, July 20 – Tuesday, July 28, 2026 \
**Location:** [UIC Electronic Visualization Lab (EVL)](https://www.evl.uic.edu/location), Chicago, IL \
**Format:** In-person with hands-on lab sessions \
**Audience:** Graduate students, postdoctoral researchers, and early-career
scientists

**Interested in attending?** Fill out our sign-up form to be notified about registration and updates!

<Button
  variant="contained"
  href="https://forms.gle/MS87XK6fmoW4uDeS9"
  className="!normal-case hover:text-white hover:opacity-80"
  target="_blank"
>
  <span>Sign-up Form</span>
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
| 8:00 AM – 10:00 AM | Open hacking / independent work |
| 10:00 AM – 12:30 PM | **Morning session (2.5 hrs)** |
| 12:30 PM – 1:30 PM | Lunch (on your own — campus dining or nearby restaurants) |
| 1:30 PM – 4:30 PM | **Afternoon session (3 hrs)** |
| 4:30 PM – 6:00 PM | Open hacking / independent work |
| Evening | Dinner on your own; hacking in teams, optional after-hours activities (see below) |


### Deep‑Dive Topics

*These are examples of possible deep‑dive sessions. Final topics may vary based on participant interest and schedule.*

#### 1. System Software

Participants will receive a comprehensive tour of the full Sage software stack, from node boot to the lifecycle of a running application. Topics include the Waggle node architecture, the Kubernetes‑based container orchestration system, the `pluginctl` scheduler, and the data pipeline.

By the end of this session, participants will have:

- Built and deployed their own container to a Sage node
- Written an application that calls an inference service
- Connected their application to an automated cloud‑based data workflow

#### 2. AI‑Enabled Code Generation and LLM Tools

Modern AI development tools — including large language models, code agents, and Model Context Protocol (MCP) servers — are transforming how scientific software is written and maintained. This session teaches participants how to use these tools effectively in the context of Sage development.

Possible topics:

- Using tools such as Cursor and Claude Code for AI‑assisted programming
- Setting up MCP servers to give AI agents access to Sage APIs and node‑management tools
- Prompt‑engineering strategies for generating reliable, testable code

Participants will leave with a fully configured AI‑assisted development environment for Sage.

#### 3. AI Enablement — Models for the Edge

The scientific value of AI depends on accurate, reliable, and efficient AI models running on its nodes. This session surveys the models currently deployed across the fleet, such as:

- **BioClip2** — species identification from camera imagery
- **YOLO variants** — real‑time object detection for wildlife, vehicles, and human presence
- **Flood detection** — water‑level and inundation classification
- **Cloud motion vectors** — atmospheric dynamics estimation
- **Wildfire and smoke detection** — early warning from RGB and thermal imagery

Participants will learn how to:

- Test model performance on real datasets
- Understand failure modes and edge cases
- Identify opportunities for improvement
- Discover and adapt new models from Hugging Face and other sources
- Apply quantization and optimization for edge deployment
- Submit new models to the Edge Code Repository (ECR)

#### 4. Data and NSF Resources

Sage generates a continuous stream of data from hundreds of nodes nationwide. This session teaches participants how to work with that data effectively — from raw sensor readings to publication‑ready datasets.

Topics include:

- Querying Beehive data using the Sage Data Client and HTTP APIs
- Integrating Sage data with NEON, NOAA, and satellite imagery
- Publishing and citing datasets using DOIs and FAIR principles
- Working with the Pelican data federation and open data catalogs
- Connecting Sage workflows to NSF cyberinfrastructure (TACC, NDP, NRP)

Participants will build end‑to‑end data pipelines that move from raw measurements to reproducible, shareable outputs.

#### 5. AI for Domain Science

This session connects Sage’s technical capabilities to the scientific questions that motivated its creation. Participants will collaborate with active domain‑science teams to prototype new capabilities.

Projects:

- Drought Mitigation and Prediction — soil moisture, vegetation stress, and snowpack monitoring
- Fire and Flood Detection Strategies
- Atmospheric Science

Teams will form around specific scientific challenges, and participants are encouraged to bring their own domain‑science questions.


#### 6. Hardware, Sensors, and Physical Integration

Sage nodes are extensible — new sensors and hardware can be added to expand observational capabilities. This hands‑on session explores sensor integration from first principles. Participants are encouraged to bring their own hardware.

Topics (to be finalized):

- Infrasound sensors
- Seismic sensors
- Hyperspectral cameras
- HaLow (802.11ah) wireless cameras
- LoRaWAN sensor nodes
- Actuators and robotic systems (PTZ cameras, robotic arms, autonomous platforms)

A full walkthrough will be provided: hardware bring‑up, driver development, containerization, testing, documentation, and deployment. The goal is for each team to integrate and deploy at least one new sensor to a nearby node.

#### 7. AI Agents at the Edge

AI agents capable of perception, reasoning, and action are emerging as a powerful paradigm for scientific instrumentation.
Sage is developing experimental frameworks for deploying such agents on edge nodes—systems that can monitor data streams, make decisions, and autonomously control node behavior, from steering PTZ cameras to triggering sampling events to adjusting operating parameters in response to changing conditions.

This session covers:

- Autonomous architecture and design principles
- Safety and governance considerations for autonomous systems
- Hands‑on development of agents that interact with real Sage APIs
- Deployment of agents to live nodes (where appropriate)

By the end of the week, the aim is to have dozens of new agents monitoring, alerting, and responding across the network.

#### 8. Future Tech — Next‑Generation Directions

This forward‑looking session explores emerging hardware, software, and scientific directions for edge AI.

Topics:

- Next‑generation edge accelerators
- New sensor modalities
- Evolving NSF cyberinfrastructure capabilities
- Open research questions in scientific edge computing

## Hackathon Projects

Attendees will be encouraged to organize into teams and tackle projects with guidance and support from the Sage team.

#### Image Search at the Edge

Key pieces: translate the NRP Kubernetes config into a pluginctl setup, swap in edge-friendly models (e.g., Gemma4), replace the vector DB with something edge-compatible (e.g., NVIDIA's NanoDB), and run benchmarks. Example creative ideas: pivot from "image search" to generating daily or weekly summaries of what the node sees.

*(More hackathon topics will be selected based on participants' interests and announced prior to registration.)*

### Baseline Deliverables for All Participants

In addition to hackathon project work, all participants are expected to complete the
following by the end of the week:

- Get new code into the ECR and run it on a deployed node
- Process a batch of images using an LLM and write the results to the Beehive
- Build and test a data pipeline connecting two or more sensor streams

## Optional After-Hours Activities (TBD)

Activities are being planned!  More details will be provided closer to the event.

- Kayak trip on the Chicago River
- Chicago food night
- Chicago lakefront boat trip

## Interest Form

**Interested in attending the Summer of AI?** Fill out our sign-up form to be notified about registration and updates!

<Button
  variant="contained"
  href="https://forms.gle/MS87XK6fmoW4uDeS9"
  className="!normal-case hover:text-white hover:opacity-80"
  target="_blank"
>
  <span>Sign-up Form</span>
</Button>
