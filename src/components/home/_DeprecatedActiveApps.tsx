import React from 'react'
import styled from 'styled-components'
import { type App } from './StatusChart'



type Props = {
  vsn: string
  appsOnNode: App[]
}

export default function _DeprecatedActiveApps(props: Props) {
  const {appsOnNode, vsn} = props

  return (
    <Root>
      <div className="mx-5">
        <h3>
          <span className="text-purple">Node {vsn}</span>
          <span className="text-gray-700"> | {appsOnNode.length} active apps</span>
        </h3>
        <ul className="list-none p-0">
          {appsOnNode.map(obj => {
            const {appName} = obj
            return (
              <li key={appName}>{appName}</li>
            )
          })}
        </ul>
      </div>
    </Root>
  )
}

const Root = styled.div`

`
