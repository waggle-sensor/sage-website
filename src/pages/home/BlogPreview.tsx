import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


type Props = {

}

export default function BlogPreview(props: Props) {

  const [data, setData] = useState()

  useEffect(() => {
    fetch(`/blog/blog-archive-80c.json`)
      .then(res => res.json())
      .then(data => setData(data.blogPosts))
  }, [])

  return (
    <Root>
      {(data || []).map(blog => {
        const {title, description, permalink} = blog.metadata
        return (
          <div key={title}>
            <h3><Link to={permalink}>{title}</Link></h3>
            <p>{description} <Link to={permalink}>Read more...</Link></p>
          </div>
        )
      })}
    </Root>
  )
}

const Root = styled.div`

`
