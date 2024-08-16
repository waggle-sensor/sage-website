import React from 'react';
import clsx from 'clsx';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
import {BlogPostProvider, useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogLayout from '@theme/partners/BlogLayout';
import BlogPostItem from '@theme/partners/BlogPostItem';
import BlogPostPaginator from '@theme/partners/BlogPostPaginator';
import BlogPostPageMetadata from '@theme/partners/PartnerPostPage/Metadata';

import CustomPartnerSidebar from '../CustomPartnerSidebar';
import partners from '@site/partners/partners';

function BlogPostPageContent({sidebar, children}) {
  const {metadata} = useBlogPost();
  const {nextItem, prevItem} = metadata;

  const {project_id} = metadata.frontMatter;
  const partner = partners.find(obj => obj.id == project_id)
  const {logo, url} = partner || {}


  return (
    <BlogLayout
      sidebar={sidebar}
      toc={false} // false since we'll use a custom meta sidebar instead
    >
      <div className="flex">
        <div>
          {logo &&
            <a href={url} className="h-full">
              <img src={require(`@site/static/${logo}`).default} className="max-h-[250px]" />
            </a>
          }
          <BlogPostItem>{children}</BlogPostItem>
        </div>
        <div className="mx-6 hidden lg:flex w-full">
          <CustomPartnerSidebar  />
        </div>
      </div>

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
