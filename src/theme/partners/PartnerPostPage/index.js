import React from 'react';
import clsx from 'clsx';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {BlogPostProvider, useBlogPost} from '@docusaurus/theme-common/internal';
import BlogLayout from '@theme/partners/BlogLayout';
import BlogPostItem from '@theme/partners/BlogPostItem';
import BlogPostPaginator from '@theme/partners/BlogPostPaginator';
import BlogPostPageMetadata from '@theme/partners/PartnerPostPage/Metadata';

function BlogPostPageContent({sidebar, children}) {
  const {metadata} = useBlogPost();
  const {nextItem, prevItem} = metadata;

  return (
    <BlogLayout
      sidebar={sidebar}
      toc={false} // false since we modified the layout
    >
      <BlogPostItem>{children}</BlogPostItem>

      {(nextItem || prevItem) && (
        <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
      )}
    </BlogLayout>
  );
}
export default function BlogPostPage(props) {
  const BlogPostContent = props.content;
  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage,
        )}>
        <BlogPostPageMetadata />
        <BlogPostPageContent sidebar={props.sidebar}>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  );
}
