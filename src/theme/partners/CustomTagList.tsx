import React from 'react'
import Link from '@docusaurus/Link'


type Tag = {
  label: string
  permalink: string
}

type Props = {
  tags: Tag[]
}


// todo: using hardcoded theme class names here could be an issue.
// swizzle tag components instead?
export default function CustomTagList(props: Props) {
  const {tags} = props

  return (
    <ul className="padding--none">
      {tags?.map(({label, permalink}) => {
        return (
          <li
            className="tag_node_modules-@docusaurus-theme-classic-lib-theme-TagsListInline-styles-module"
            key={label}
          >
            <Link
              className="tag_node_modules-@docusaurus-theme-classic-lib-theme-Tag-styles-module tagRegular_node_modules-@docusaurus-theme-classic-lib-theme-Tag-styles-module whitespace-nowrap"
              to={permalink}
            >
              {label}
            </Link>
          </li>
        )
      })}
    </ul>

  )
}
