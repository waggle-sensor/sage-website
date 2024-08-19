import React from 'react'
import clsx from 'clsx'
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from '@docusaurus/plugin-content-docs/client'
import DocCard from '@theme/DocCard'
import type {Props} from '@theme/DocCardList'

import type {PropSidebarItem} from '@docusaurus/plugin-content-docs';

import LinkCard from '../../components/ImageLinkCard'
import icons from '../../../science/icons'


function DocCardListForCurrentSidebarCategory({className}: Props) {
  const category = useCurrentSidebarCategory()
  return <DocCardList items={category.items} className={className} />
}

type Item = PropSidebarItem & {
  docId: string
  label: string
  href: string
}


export default function DocCardList(props): JSX.Element {
  const {items} = props
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />
  }

  const filteredItems = filterDocCardListItems(items) as Item[]

  // todo(nc): section tag should have clsx('row', className) if needed

  return (
    <section className={clsx('flex flex-wrap md:max-w-screen-md lg:max-w-screen-lg mx-auto')}>
      {filteredItems.map((item, index) => {
        const {docId, label, href} = item
        const id = docId || null
        const name = id?.slice(id.lastIndexOf('/') + 1)
        const assetPath = icons[name]
        return (
          assetPath ?
            <article key={index} className="flex flex-col md:flex-row flex-wrap mr-4 my-4">
              <LinkCard
                title={label}
                link={href}
                src={assetPath}
              />
            </article>
            :
            <article key={index} className="col col--6 margin-bottom--lg">
              <DocCard item={item} />
            </article>
        )
      })}
    </section>
  )
}
