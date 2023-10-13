import React from 'react';
import Link from '@docusaurus/Link';
import {BlogPostProvider} from '@docusaurus/theme-common/internal';

import partners from '@site/static/img/partners/partners';
import Arrow from '@mui/icons-material/PlayCircleOutlineRounded'

export default function BlogPostItems({items}) {
  return (
    <>
      {items.map(({content: BlogPostContent}) => {
        const {frontMatter} = BlogPostContent.metadata;
        const {project_id, title} = frontMatter;

        const partner = partners.find(obj => obj.id == project_id);
        const {logo} = partner || {};

        return (
          <BlogPostProvider
            key={BlogPostContent.metadata.permalink}
            content={BlogPostContent}>
            <div className="mb-12">
              {logo &&
                <Link to={BlogPostContent.metadata.permalink}>
                  <img src={require(`@site/static/${logo}`).default} className="max-h-[250px]" />
                </Link>
              }
              <h3><Link to={BlogPostContent.metadata.permalink}>{title}</Link></h3>
              <BlogPostContent />
              <Link to={BlogPostContent.metadata.permalink} className="flex items-center justify-end gap-1">
                Read more <Arrow />
              </Link>

              <hr className="bg-neutral-200" />
            </div>
          </BlogPostProvider>
        )
      })}
    </>
  );
}
