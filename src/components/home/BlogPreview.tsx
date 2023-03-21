import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'


/**
 * BlogPreview parses the articles from production site (or whatever is provided in /docusaurus.config.js)
 * and renders the article body (up until <!--truncate-->), including with links to articles
 *
 * Note docusaurus is following the schema.org format https://schema.org/BlogPosting
 */

export default function BlogPreview() {

  const [data, setData] = useState()
  const {siteConfig} = useDocusaurusContext()

  useEffect(() => {
    // fetch blog preview from prod site
    const {url, baseUrl} = siteConfig
    fetch(url + baseUrl + 'blog')
      .then(res => res.text())
      .then(content => {
        const parser = new DOMParser()
        const parsedHtml = parser.parseFromString(content, 'text/html')
        const items = parsedHtml.getElementsByTagName("article")

        let data
        try {
          data = [...items].map(ele => {
            const url = ele.querySelectorAll('[itemprop=url')[0].href
            return {
              headline: ele.querySelectorAll('[itemprop=headline')[0].innerText,
              articleBody: ele.querySelectorAll('[itemprop=articleBody')[0].innerText,
              url: url.slice(url.indexOf('/', 8)) // strip domain
            }
          })
        } catch (e) {
          console.log(`Could not parse ${url}`, e)
        }

        setData(data)
      })
  }, [])

  return (
    <Root>
      {(data || []).map(meta => {
        const {headline, articleBody, url} = meta

        return (
          <div key={headline}>
            <h3><Link to={url}>{headline}</Link></h3>
            <p>{articleBody} <Link to={url}>Read more...</Link></p>
          </div>
        )
      })}
    </Root>
  )
}

const Root = styled.div`

`
