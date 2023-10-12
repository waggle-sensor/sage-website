import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';
export default function BlogPostItemHeaderTitle({className}) {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {permalink, title} = metadata;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  return (
    <TitleHeading className={clsx(styles.title, className, '!text-sm mb-0 text-neutral-500')} itemProp="headline">
      {isBlogPostPage ? (
        title
      ) : (
        <Link itemProp="url" to={permalink}>
          {title}
        </Link>
      )}
    </TitleHeading>
  );
}
