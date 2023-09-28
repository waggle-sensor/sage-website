import React from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


// render image and link instead
export default function BlogPostItemHeaderInfo({className}) {
  const {metadata} = useBlogPost();

  const {project_logo, project_url} = metadata.frontMatter;
  const img = useBaseUrl(project_logo)

  return (
    <div className={clsx(styles.container, 'margin-vert--md', className)}>
      {img && <a href={project_url} className="h-full">
        <img src={img} className="max-h-[250px]" />
      </a>}
    </div>
  );
}
