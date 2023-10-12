import React from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';

import partners from '@site/static/img/partners/partners';


// render image and link instead
export default function BlogPostItemHeaderInfo({className}) {
  const {metadata} = useBlogPost();

  const {project_id} = metadata.frontMatter;
  const partner = partners.find(obj => obj.id == project_id)
  const {logo, url} = partner || {}

  return (
    <div className={clsx(styles.container, 'margin-vert--md', className, 'flex flex-col')}>
      {logo && <a href={url} className="h-full">
        <img src={require(`@site/static/${logo}`).default} className="max-h-[250px]" />
      </a>}
    </div>
  );
}
