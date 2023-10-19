import React from 'react'
import Tag from '@theme/Tag';

type Props = {
  tags: {label: string, permalink: string}[]
}

export default function CustomTagList(props: Props) {
  const {tags} = props

  return (
    <ul className="flex list-none p-0 gap-2">
      {tags?.map(({label, permalink}) => {
        return (
          <li key={label}>
            <Tag label={label} permalink={permalink} />
          </li>
        )
      })}
    </ul>

  )
}
