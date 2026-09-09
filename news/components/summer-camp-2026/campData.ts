// Data behind the 2026 Sage Summer Camp news post visuals.
//
// Everything here is derived from the camp's own artifacts rather than typed
// by hand a second time: the project list and bylines come from the report
// pages in science/2026/*.md, and the schedule comes from the camp schedule
// (July 19-28, 2026, UIC EVL). Keeping it in one module means the map, the
// charts, and the project grid can never disagree about who was there.

export type Project = {
  /** matches the science/2026 filename, so `path` and `thumb` both follow */
  slug: string
  title: string
  blurb: string
  /** people credited in the report's byline, in byline order */
  team: string[]
  /** the tag we treat as the project's primary theme, for the theme chart */
  theme: Theme
}

export type Theme =
  | 'Ecology & Biodiversity'
  | 'Atmospheric Science'
  | 'Wildfire'
  | 'Water & Hydrology'
  | 'Data & Retrieval'
  | 'Edge Systems'

/** Fixed theme order. Color slots are assigned from this, never from rank, so
 *  a theme keeps its hue no matter how the bars sort. */
export const THEMES: Theme[] = [
  'Ecology & Biodiversity',
  'Atmospheric Science',
  'Data & Retrieval',
  'Edge Systems',
  'Wildfire',
  'Water & Hydrology',
]

export const projects: Project[] = [
  {
    slug: 'ndp-scidx-mcp',
    title: 'Sage-NDP-SciDx MCP',
    blurb: 'Lets a conversational agent register Sage query results as National Data Platform datasets and spin up filtered live streams, with edge provenance preserved end to end.',
    team: ['Pratik Kharade', 'Sajan Neupane'],
    theme: 'Data & Retrieval',
  },
  {
    slug: 'bat',
    title: 'Edge Acoustic Sensing for Bat Detection',
    blurb: 'A reusable ultrasonic-mic package plus on-node chirp detection and species classification, with an autoencoder study of how few dimensions a bat call really needs.',
    team: ['Jeongmin Chae', 'Julia Gersey'],
    theme: 'Ecology & Biodiversity',
  },
  {
    slug: 'air-intelligence',
    title: 'Air Quality Intelligence',
    blurb: 'Image-only and multimodal classifiers trained on Chicago node cameras and PurpleAir PM2.5, reading air quality off an ordinary ground-level photograph.',
    team: ['JR Lee', 'Prithviraj Pramanik', 'Veda Yakkali', 'Anastasiia Lehova'],
    theme: 'Atmospheric Science',
  },
  {
    slug: 'manoomin-vision',
    title: 'Manoomin Vision',
    blurb: 'Frozen BioCLIP embeddings of a season of camera images from a Bad River marsh recover the phenology of manoomin (wild rice) with no labels at all.',
    team: ['Jordan Gurneau', 'Ella Neumann', 'Dave MacDonald', 'Deanna DiMonte'],
    theme: 'Ecology & Biodiversity',
  },
  {
    slug: 'dangerous-animal-detection',
    title: 'Dangerous Animal Detection and Alerting',
    blurb: 'YOLO11 detection, BioCLIP2 species ID, and a Gemma risk rating chain into day-and-night alerts for bears, elk, and other animals worth knowing about.',
    team: ['Saurav Koduri', 'Avasyu Chukkapalli'],
    theme: 'Ecology & Biodiversity',
  },
  {
    slug: 'drought-early-warning',
    title: 'Multimodal Drought Early Warning',
    blurb: 'NEON soil and weather series meet PhenoCam greenness through a vision-language model, giving a Texas grassland site availability-aware drought risk in near real time.',
    team: ['Di Fan', 'Levi Johnson', 'John Blackwell', 'Atefeh Hosseini'],
    theme: 'Water & Hydrology',
  },
  {
    slug: 'bisonn',
    title: 'BISONN: Biotic Interaction',
    blurb: 'Compares BioCLIP and DINOv3 embeddings with lightweight heads to spot bird mobbing behavior, then ships the winner as a plugin sized for a node.',
    team: ['Kyle Lima'],
    theme: 'Ecology & Biodiversity',
  },
  {
    slug: 'mortimus-urgent-scheduling',
    title: 'Resilient Urgent Scheduling',
    blurb: 'An explainable, application-agnostic urgent-computing policy inside the Waggle scheduler, so a smoke detection can outrank routine work without special-casing it.',
    team: ['Dave MacDonald', 'Sean Huang', 'Clément Nunes'],
    theme: 'Edge Systems',
  },
  {
    slug: 'bat-counter',
    title: 'Sage Bat Counter',
    blurb: 'YOLOv11 and SORT tracking count bats leaving a roost in thermal video, containerized to run on the Grande hardware instead of a workstation.',
    team: ['Noah Betoshana', 'Liam Fitzpatrick'],
    theme: 'Ecology & Biodiversity',
  },
  {
    slug: 'flashpoint',
    title: 'Lightning Localization & Ignition Watch',
    blurb: 'Existing cameras, mics, and weather stations locate a strike with no clock sync, then watch the spot for days for a holdover fire. Armed 145 minutes early on a real storm replay.',
    team: ['Samuel Watson'],
    theme: 'Wildfire',
  },
  {
    slug: 'halow',
    title: 'Sage-HaLow',
    blurb: 'A solar ESP32-S3 camera reaches Beehive over 802.11ah, scoring frames on-device and spending radio time only when the scene actually changes.',
    team: ['Ben Owusu-Amo', 'Hairik Honarchian Saki'],
    theme: 'Edge Systems',
  },
  {
    slug: 'image-search-at-the-edge',
    title: 'Image Search at the Edge',
    blurb: 'Captioning, CLIP embeddings, and BM25 fused in Qdrant give natural-language search over field imagery on a single Jetson AGX Thor, fully air-gapped.',
    team: ['Sajan Neupane', 'Pratik Kharade'],
    theme: 'Data & Retrieval',
  },
  {
    slug: 'speech-redaction-at-the-edge',
    title: 'Speech Redaction at the Edge',
    blurb: 'A fail-closed YAMNet gate erases human speech in memory before BirdNET ever sees it, so a national-park node can keep listening for birds and never record a visitor.',
    team: ['Miguel Hernandez'],
    theme: 'Edge Systems',
  },
  {
    slug: 'weather-image-classification',
    title: 'Weather Image Classification',
    blurb: 'An exploration of whether node imagery and sensor health together carry an early signal of severe weather over Chicago.',
    team: ['Nathan Severyns'],
    theme: 'Atmospheric Science',
  },
]

export type Site = {
  /** institution as printed on the report bylines */
  name: string
  /** short form for the map label when several share a dot */
  short: string
  lon: number
  lat: number
  /** number of camp participants credited from here */
  people: number
  host?: boolean
}

// Home institutions of the 30 people on the camp roster
// (news/_source/summer-camp-2026/attendees.txt), which is the authoritative
// list. Affiliations come from each attendee's registration address; the three
// who registered with a personal address are placed from their report byline
// (Hosseini at Kansas; Nunes and Pramanik are outside the US, below).
// Coordinates are the campus itself, and these dots account for 28 of the 30.
export const sites: Site[] = [
  {name: 'University of Illinois Chicago (EVL)', short: 'UIC EVL', lon: -87.6476, lat: 41.8697, people: 0, host: true},
  {name: 'Northwestern University', short: 'Northwestern', lon: -87.6753, lat: 42.0565, people: 6},
  {name: 'Colorado State University', short: 'Colorado State', lon: -105.0865, lat: 40.5734, people: 3},
  {name: 'University of Hawai\u02bbi at M\u0101noa', short: 'UH M\u0101noa', lon: -157.8171, lat: 21.2969, people: 3},
  {name: 'University of California, Davis', short: 'UC Davis', lon: -121.7617, lat: 38.5382, people: 2},
  {name: 'University of Utah', short: 'Utah', lon: -111.8421, lat: 40.7649, people: 2},
  {name: 'University of Southern California', short: 'USC', lon: -118.2851, lat: 34.0224, people: 1},
  {name: 'University of Michigan', short: 'Michigan', lon: -83.7382, lat: 42.2780, people: 1},
  {name: 'Michigan State University', short: 'Michigan State', lon: -84.4822, lat: 42.7018, people: 1},
  {name: 'Rutgers University', short: 'Rutgers', lon: -74.4474, lat: 40.5008, people: 1},
  {name: 'MIT', short: 'MIT', lon: -71.0942, lat: 42.3601, people: 1},
  {name: 'University of Illinois Urbana-Champaign', short: 'UIUC', lon: -88.2272, lat: 40.1020, people: 1},
  {name: 'Virginia Tech', short: 'Virginia Tech', lon: -80.4234, lat: 37.2284, people: 1},
  {name: 'University of Florida', short: 'Florida', lon: -82.3549, lat: 29.6436, people: 1},
  {name: 'University of Kansas', short: 'Kansas', lon: -95.2558, lat: 38.9543, people: 1},
  {name: 'Schoodic Institute / University of Maine', short: 'Maine', lon: -68.6689, lat: 44.9012, people: 1},
  {name: 'University of Chicago', short: 'UChicago', lon: -87.5987, lat: 41.7886, people: 1},
  {name: 'Northeastern Illinois University', short: 'NEIU', lon: -87.7176, lat: 41.9803, people: 1},
]

/** Attendees based outside the US, listed beside the map rather than dropped,
 *  the same way the homepage node map handles its international nodes. */
export const offMapSites = [
  {name: 'Inria', country: 'France', people: 1},
  {name: 'NIT Durgapur / UNSW', country: 'India \u00b7 Australia', people: 1},
]

/** Everyone on the camp roster. Twenty-eight of them are credited on one of the
 *  fourteen project reports; all thirty were in the room. */
export const totalParticipants = 30

export type Level =
  | 'Graduate student'
  | 'Research staff / faculty'
  | 'Early career / recent grad'
  | 'Undergraduate'

/** Career stage, bucketed from the free-text "Current Role" each attendee gave
 *  at registration (news/_source/summer-camp-2026/attendees-backgrounds.txt).
 *  Where someone listed two roles the first is used: Levi Johnson wrote
 *  "Graduate Student, Faculty / Research Staff" and counts as a grad student.
 *  Two attendees never filled in the background form; both registered with
 *  class-of-2028 undergraduate addresses and are counted as undergraduates.
 *  Ordered most to least common. */
export const levels: {level: Level; n: number}[] = [
  {level: 'Graduate student', n: 19},
  {level: 'Research staff / faculty', n: 4},
  {level: 'Undergraduate', n: 4},
  {level: 'Early career / recent grad', n: 3}
]

export type Day = {
  date: string
  /** weekday letter shown beside the date */
  dow: string
  label: string
}

// The camp ran Sun Jul 19 (check-in) through Tue Jul 28 (presentations).
export const days: Day[] = [
  {date: 'Jul 19', dow: 'Su', label: 'Check-in at EVL'},
  {date: 'Jul 20', dow: 'M', label: 'Sage foundations and system software'},
  {date: 'Jul 21', dow: 'Tu', label: 'AI toolchains, MCP servers, deep learning'},
  {date: 'Jul 22', dow: 'W', label: 'Foundation models, image search, hacking'},
  {date: 'Jul 23', dow: 'Th', label: 'Project work; NDP, NRP and NSF resources'},
  {date: 'Jul 24', dow: 'F', label: 'Sensors, hardware, physical integration'},
  {date: 'Jul 25', dow: 'Sa', label: 'Community day: hacking, river tour, pizza'},
  {date: 'Jul 26', dow: 'Su', label: 'Hacking and free time'},
  {date: 'Jul 27', dow: 'M', label: 'Autonomous agents and the future; hack time'},
  {date: 'Jul 28', dow: 'Tu', label: 'Final prep, presentations and demos'},
]

// ---------------------------------------------------------------- survey ----
//
// Exit survey, 17 of 30 attendees responding (57%).
// the aggregates below are all that is published, and no
// response carried a name — the survey was answered anonymously, so the quotes
// are attributed to "a participant" and nothing more.

/** Respondents, out of 30 attendees. Every rate below is over this base. */
export const surveyN = 17

/** Self-rated confidence before and after the camp, on the survey's five-point
 *  scale (1 = not at all confident … 5 = extremely confident). Both ratings were
 *  collected on the same post-camp form, so "before" is a retrospective
 *  self-assessment, not a true pre-test — worth saying plainly rather than
 *  presenting it as a controlled measurement. Ordered by size of the gain. */
export const skills: {skill: string; before: number; after: number}[] = [
  {skill: 'Deploying applications on edge devices', before: 2.24, after: 3.76},
  {skill: 'Working with sensors', before: 2.94, after: 4.12},
  {skill: 'Debugging distributed applications', before: 2.35, after: 3.47},
  {skill: 'Developing AI applications', before: 2.71, after: 3.76},
  {skill: 'Working with distributed systems', before: 2.65, after: 3.65},
  {skill: 'Building complete AI/data pipelines', before: 2.94, after: 3.94},
  {skill: 'Containerized software development', before: 2.71, after: 3.65},
  {skill: 'Using foundation models', before: 3.24, after: 4.18},
  {skill: 'Deploying research software', before: 2.82, after: 3.71},
  {skill: 'Using AI coding assistants', before: 3.71, after: 4.35},
]

/** Share who agreed or strongly agreed with each closing statement. */
export const agreement: {statement: string; agree: number}[] = [
  {statement: 'Improved my understanding of edge AI', agree: 17},
  {statement: 'Learned skills I can immediately apply to my research', agree: 17},
  {statement: 'More likely to pursue edge AI research', agree: 17},
  {statement: 'The project work helped me understand the Sage platform', agree: 16},
  {statement: 'Hands-on activities reinforced the lectures', agree: 16},
  {statement: 'Mentors were available when I needed help', agree: 16},
  {statement: 'AI-assisted development increased my productivity', agree: 15},
  {statement: 'I feel prepared to continue using Sage independently', agree: 15},
  {statement: 'Documentation was sufficient for my project', agree: 13},
]

/** Anonymous free-text answers, quoted verbatim. */
export const quotes: {text: string; prompt: string}[] = [
  {
    text: 'My sense of what’s achievable in edge AI computing shifted from something only specialized teams do to something within my own personal reach.',
    prompt: 'the biggest thing they learned',
  },
  {
    text: 'Before this, I thought of edge-AI systems like Sage as a completely separate world from my usual work. That’s changed how I think about what’s possible for real-time monitoring at remote sites.',
    prompt: 'how the camp changed their thinking',
  },
  {
    text: 'The biggest thing I learned was how open many people can be to helping others learn. Regardless of your experience people were willing to help out without any judgement.',
    prompt: 'the biggest thing they learned',
  },
  {
    text: 'Combining ‘domain scientists’ with ‘computer scientists’ was a great way to collaborate on building out these mini projects.',
    prompt: 'the greatest impact on their research',
  },
  {
    text: 'I experienced a much faster way of working, with fewer limitations on data access and computing resources. This genuinely changed the way I think about the end-to-end development of an application.',
    prompt: 'how the camp changed their thinking',
  },
]
