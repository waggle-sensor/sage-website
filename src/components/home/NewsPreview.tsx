import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PREVIEW_COUNT = 3
const SKIP_LIST = ['Pedestrian Count for Crosswalk Violations']


/**
 * BlogPreview parses the articles from production site (or whatever is provided in /docusaurus.config.js)
 * and renders the article body (up until <!--truncate-->), with links to articles
 *
 * Note docusaurus is following the schema.org format https://schema.org/BlogPosting
 */

export default function NewsPreview() {

  const [data, setData] = useState()
  // const {siteConfig} = useDocusaurusContext()

  useEffect(() => {
    // fetch blog preview from prod site
    fetch('https://sagecontinuum.org/' + 'news')
      .then(res => res.text())
      .then(content => {
        const parser = new DOMParser()
        const parsedHtml = parser.parseFromString(content, 'text/html')
        const items = parsedHtml.getElementsByTagName('article')

        let data
        try {
          data = [...items].map(ele => {
            const url = ele.querySelectorAll('[itemprop=url]')[0].href

            return {
              datePublished: ele.querySelectorAll('[itemprop=datePublished]')[0].innerText,
              headline: ele.querySelectorAll('[itemprop=headline]')[0].innerText,
              articleBody: ele.querySelectorAll('[itemprop=articleBody]')[0].innerHTML,
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
      {(data || [])
        .filter(obj => !SKIP_LIST.includes(obj.headline))
        .slice(0, PREVIEW_COUNT)
        .map(meta => {
          const {datePublished, headline, articleBody, url} = meta
          const hasReadMoreLink = articleBody.toLowerCase().includes('read more')

          return (
            <article key={headline}>
              <span className="text-gray-500 font-bold text-sm">{datePublished}</span>
              <h3 className="mb-2"><Link to={url}>{headline}</Link></h3>
              <div dangerouslySetInnerHTML={{__html: articleBody}}></div>
              {!hasReadMoreLink &&
                <Link to={url}>Read more...</Link>
              }
            </article>
          )
        })}
    </Root>
  )
}

const Root = styled.div`
  article {
    margin-bottom: 2rem;

    p{
      margin-bottom: 0;
    }
  }
`
