import React from 'react'
import Tag from '@theme/Tag';
import type {TagsListItem} from '@docusaurus/utils';

type Props = {
  tags: TagsListItem[]
}


export default function CustomTagList(props: Props) {
  const {tags} = props

  return (
    <ul className="flex flex-col list-none p-0 ml-2 gap-2">
      {tags?.map(({label, permalink, count}) => {
        return (
          <li key={label} className="whitespace-nowrap flex">
            <Tag label={label} permalink={permalink} count={count} />
          </li>
        )
      })}
    </ul>

  )
}
