import React from 'react'
import styled from 'styled-components'
import Layout from '@theme/Layout'

import publications from '../publications'


export default function Publications() {
  return (
    <Layout title="Publications" description="Sage Publications">
      <Root className="md:max-w-screen-md lg:max-w-screen-lg mx-auto my-5">
          <h1>Publications</h1>

          <table>
            <thead>
              <tr>
                <th className="text-left">Name</th>
                <th className="hidden md:block">Year</th>
              </tr>
            </thead>
            <tbody>
              {publications.filter(pub => !pub.hideInFullList)
                .map((pub, i) => {
                  const {authors, name, source, href, year} = pub

                  return (
                    <tr key={i}>
                      <td>
                        <h3>{href ? <a href={href}>{name}</a> : name}</h3>
                        <p>{authors} {source}</p>
                      </td>
                      <td className="hidden md:block">{year}</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
      </Root>
    </Layout>
  );
}



const Root = styled.div`
  table thead, table tr, table td, table th {
    border: none;
    background: none;
  }
`