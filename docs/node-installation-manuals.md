---
sidebar_label: Node install & deploy manuals
sidebar_position: 5.9
hide_title: true
---

import DownloadIcon from '@mui/icons-material/Download';
import ThorBladeManual from './manuals/SGT_Manual_ThorDev_Blade_V1.0.pdf';
import HpeBladeManual from './manuals/HPE_L40s_Bringup.pdf';
import WsnManual from './manuals/WSN_GS_V1.pdf';

## Node installation & deployment manuals

### Sage Grande Testbed <sup><small className="muted">(new)</small></sup>

#### Thor-blade deployment guide

The Sage Grande Testbed (SGT) Thor Blade is a custom-designed compute node packaged in a 2U blade form factor. Each blade is built around an NVIDIA Jetson Thor T5000 computer and is equipped with 4 TB of NVMe storage. The Thor Blade is intended to serve as a high-performance, edge-capable compute platform for SGT deployments, supporting both data acquisition and on-site AI@Edge workloads.

<strong>
	<a
		href={ThorBladeManual}
		title="Download the Thor-blade deployment guide PDF"
		className="flex"
	>
		<DownloadIcon />
		Thor-blade deployment guide
	</a>
</strong>


#### HPE Blade Setup for Remote OS Installation

This guide provides step-by-step instructions for cabling, powering, and networking the HPE blade and router
used in a Sage Grande deployment for OS installation and provisioning. It covers the required WAN and
management connections, and the final checks needed to confirm that the blade is ready for remote provisioning.

<strong>
	<a
		href={HpeBladeManual}
		title="Download the HPE Blade Setup for Remote OS Installation PDF"
		className="flex"
	>
		<DownloadIcon />
		HPE Blade Setup for Remote OS Installation
	</a>
</strong>


### Sage Legacy Nodes

#### Wild Sage Node manual

The legacy Wild Sage Node "Getting Started" (version 1) manual is a complete overview of installing and getting started with a WSN.


<a
  href={WsnManual}
	title="Download the Wild Sage Node manual PDF"
  className="flex"
>
  <DownloadIcon />
  WSN manual
</a>
