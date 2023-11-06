import React from 'react';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import partners from '@site/partners/partners';

import { PartnerFrontMatter } from '../partner';


const findInfo = (tag: string) =>
  partners.find(({id, name}) => {
    const idRe = new RegExp(id, 'gi');
    const nameRe = new RegExp(name, 'gi');
    return tag.match(idRe) || tag.match(nameRe);
  })


const shortUrl = (url: string, len = 28) =>
  url.length > len ? `${url.slice(0, len)}...` : url



export default function CustomPartnerSidebar() {
  const {metadata} = useBlogPost();
  const {frontMatter} = metadata;
  const {project_id, partner_tags} = frontMatter as PartnerFrontMatter;

  const partner = partners.find(obj => obj.id == project_id)
  const {url} = partner || {}


  return (
    <div className="ml-8 my-8">

      {url &&
        <div className="mb-12">
          <h3>Website</h3>
          <a href={url} target="_blank" rel="noreferrer" className="whitespace-nowrap">
            {shortUrl(url)}
          </a>
        </div>
      }

      {partner_tags?.length > 0 &&
        <div className="mb-12">
          <h3>Partners</h3>
          <ul className="list-none p-0">
            {partner_tags.map(tag => {
              const {name, url, logo} = findInfo(tag) || {}
              const img = require(`@site/static/${logo}`).default

              let item;
              if (logo && url)
                item = <a href={url} target="_blank" rel="noreferrer">
                  <img src={img} className="max-w-[200px]" />
                </a>
              else if (logo && !url)
                item = <img src={img} className="max-w-[200px]" />
              else if (!logo && url)
                item = <a href={url} target="_blank" rel="noreferrer">{name || tag}</a>
              else
                item = name || tag
              return (
                <li key={name || tag} className="mb-2">
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      }
    </div>
  )
}


