---
slug: /
sidebar_position: 1
breadcrumbs: False
---
import OrgChart from './OrgChart.tsx'


# Staff Overview

Sage brings together experts from institutions across the country.

- **[Leadership](/team/leadership)**
- **[Teams](/team/team-members) | [Cyberinfrastructure](/team/team-members#cyberinfrastructure), [Research](/team/team-members#research--ai-enablement), and [Platform](/team/team-members#platform)**
- **[Collaborators](/team/collaborators)**

```mermaid
graph TD
    A["Director: Pete Beckman, NU <br> Deputy Director: Nicola Ferrier, NU <br> Exec. Director/PM: Helen Taaffe, NU <br> Risk Management: Jim Olds, GMU"]
    E["Advisory Committee AC: Daniel Reed, chair, Bill Gropp, Others to be invited"]

    A --- F["AI Enablement: N. Ferrier, NU <br> AI for Edge: J. Leigh, UH <br> AI for Data Commons: I. Altintas, UCSD & M. Parashar, Utah <br> Trustworthy AI: N. Ferrier, NU <br> AI for Earth Science: E. Kelly, CSU & D. Toomey, UO"]
    A --- G["Cyberinfrastructure: S. Shahkarami, NU <br> Sage Core: S. Shahkarami, NU <br> LLM Tools: N. Conrad, NU <br> Data Commons & HPC Workflows: I. Perez, UCSD <br> Cybersecurity: S. Shahkarami, NU"]
    A --- H["Platform Upgrades / Deployments: R. Sankaran, NU <br> Edge Platform: R. Sankaran, NU <br> Hardware Procurement: NU <br> Manufacturing WSN: NU <br> Science Integration w/ Existing Networks: E. Kelly, CSU"]
    A --- I["Education & Student Training: M. Papka, UIC / V. Taylor, NU <br> Curriculum: V. Taylor, NU <br> Community Engagement: V. Taylor, NU <br> Indigenous Peoples: K. Marion Suiseeya, CNAIR <br> Community Engagement & Broadening Participation: NU"]
    A --- J["Operations and User Support: N. Conrad, NU <br> User Services: NU <br> Technical User Support: NU <br> Maintenance of Sage Grande Tested: NU <br> Training & Documentation: NU"]

    %% Apply left-alignment to all nodes
    classDef leftAlign text-align:left;

    %% Assign the left-alignment class to all nodes
    class A,E,F,G,H,I,J leftAlign;


    style A fill:#FF6F61,stroke:#333,stroke-width:2px,color:white
    style E fill:#FFD700,stroke:#333,stroke-width:2px,color:black
    style F fill:#FF4500,stroke:#333,stroke-width:2px,color:white
    style G fill:#4682B4,stroke:#333,stroke-width:2px,color:white
    style H fill:#8A2BE2,stroke:#333,stroke-width:2px,color:white
    style I fill:#32CD32,stroke:#333,stroke-width:2px,color:white
    style J fill:#DC143C,stroke:#333,stroke-width:2px,color:white
```

