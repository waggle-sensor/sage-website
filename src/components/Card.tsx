
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

type Props = {
  to?: string
  href?: string
  className: string
  children: ReactNode
}

export default function Card(props: Props) {
  const {to, href, children} = props
  return (
    <Root>
      {to &&
        <Link to={to} {...props}>
          {children}
        </Link>
      }
      {href &&
        <a href={href} {...props}>
          {children}
        </a>
      }
    </Root>
  )
}

const purple = 'rgb(78, 42, 132)'

const Root = styled.div`
  color: #444;
  padding: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;

  a {
    color: #222;
    text-decoration: none;
  }

  p a {
    color: var(--ifm-link-color);
    text-decoration: var(--ifm-link-decoration);
    transition: color var(--ifm-transition-fast) var(--ifm-transition-timing-default);
  }

  p a:hover {
    color: var(--ifm-link-hover-color);
    text-decoration: var(--ifm-link-hover-decoration);
  }

  border-bottom: 3px solid #7a6bac;
  :hover {
    text-decoration: none;
    border: 1px solid #7a6bac;
    border-bottom: 3px solid ${purple};
  }
`