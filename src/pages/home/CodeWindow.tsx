import React from 'react'
import styled from 'styled-components'

import Highlight, { defaultProps } from "prism-react-renderer"


type Props = {
  title: string
  code: string
  showUrlBar?: string
}

export default function CodeWindow(props: Props) {
  const {title, code, showUrlBar} = props

  return (
    <Root>
      <div className="code-window">
        <div className="bg-gray-200 dark:bg-gray-800 flex flex-row justify-center p-2 relative rounded-t-md">
          <div className="absolute flex flex-row left-2 top-2">
            <div className="bg-red-500 h-3 mr-2 rounded-full w-3">
                <div id="hmrUnsaved" className="bg-gray-900 h-1 m-1 rounded-full w-1"></div>
            </div>
            <div className="bg-yellow-500 h-3 mr-2 rounded-full w-3"></div>
            <div className="bg-green-500 h-3 rounded-full w-3"></div>
          </div>
          {showUrlBar ?
            <div className="bg-slate-100 pd-2 lg:ml-0 md:ml-5 ml-0 text-gray-500 text-xs">{title}</div> :
            <div className="lg:ml-0 md:ml-5 ml-0 text-gray-500 text-xs">{title}</div>
          }
        </div>

        <Highlight {...defaultProps} language="python" code={code}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </Root>
  )
}

const Root = styled.div`

`
