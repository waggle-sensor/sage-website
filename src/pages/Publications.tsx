import React from 'react'
import styled from 'styled-components'
import Layout from '@theme/Layout'

import publications, { conferenceProceedings } from '../publications'


function PubRows(props) {
  const {publications} = props

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left pl-0">Title</th>
          <th className="hidden md:block pr-0 text-right">Year</th>
        </tr>
      </thead>
      <tbody>
        {publications.filter(pub => !pub.hideInFullList)
          .map((pub, i) => {
            const {
              title, authors, publication, volume,
              number, pages, year, href
            } = pub

            return (
              <tr key={i}>
                <td className="pl-0">
                  <h3 className="mb-2">{href ? <a href={href} target="_blank" rel="noreferrer">{title}</a> : title}</h3>
                  <p>
                    {authors}<br/>
                    <i>{publication}</i>{' '}
                    {volume ? volume : ''}{!number && volume ? ', ' : ' '}
                    {number ? `(${number})` : ''}{(volume && number) ? ', ' : ''}
                    {pages ? pages : ''}
                  </p>
                </td>
                <td className="hidden md:block pr-0 text-right">{year}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}


export default function Publications() {
  return (
    <Layout title="Publications" description="Sage Publications">
      <Root className="md:max-w-screen-md lg:max-w-screen-lg mx-5 md:mx-auto my-5">
        <h1>Journal publications</h1>
        <PubRows publications={publications} />

        <h1>Publications in conference proceedings</h1>
        <PubRows publications={conferenceProceedings} />
      </Root>
    </Layout>
  )
}



const Root = styled.div`
  table thead, table tr, table td, table th {
    border: none;
    background: none;
  }
`