import React from 'react'

import HubIcon from '@mui/icons-material/HubOutlined'
import ScheduleIcon from '@mui/icons-material/ScheduleRounded'
import Apps from '@mui/icons-material/AppsRounded'
import InsightIcon from '@mui/icons-material/InsightsRounded'


type Props = {
  nodes: number
  jobs: number
  apps: number
  records: number
  node?: string
}

export default function JobMetrics(props: Props) {
  const {node, nodes, jobs, apps, records} = props

  return (
    <div className="ml-10">
      <div className="mb-4">
        <div className="flex items-center gap-2 text-2xl"><HubIcon />{node ? 'Node' : 'Nodes'}</div>
        <b className="text-5xl ml-6">{node ? node : nodes.toLocaleString()}</b>
      </div>

      {jobs > 0 &&
        <div className="mb-4">
          <div className="flex items-center gap-2 text-2xl"><ScheduleIcon />Active Jobs</div>
          <b className="text-5xl ml-6">{jobs.toLocaleString()}</b>
        </div>
      }

      {apps > 0 &&
        <div className="mb-4">
          <div className="flex items-center gap-2 text-2xl"><Apps />Recent Apps</div>
          <b className="text-5xl ml-6">{apps.toLocaleString()}</b>
        </div>
      }

      {records > 0 &&
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <InsightIcon  />
            <div className="text-2xl">App Data</div>
          </div>
          <div className="flex-col">
            {/* use approx char?
              <span style={{fontFamily: 'Courier'}} className="text-4xl">≈</span>
            */}
            <b className="text-5xl ml-6">{records.toLocaleString()}</b>
            <div className="text-md text-gray-500 ml-8">Records in the last 24 hours<sup>*</sup></div>
          </div>
        </div>
      }
    </div>
  )
}
