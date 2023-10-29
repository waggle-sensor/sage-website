import React from 'react';
import Link from '@docusaurus/Link';
import { BlogPostProvider } from '@docusaurus/theme-common/internal';

import { useLocation } from '@docusaurus/router';
import styled from 'styled-components';
import partners from '@site/partners/partners';
import Arrow from '@mui/icons-material/PlayCircleOutlineRounded';

import { uniqBy, countBy, sortBy } from 'lodash';
import CustomInlineTagList from '../CustomInlineTagList';
import CustomTagList from '../CustomTagList';

// make entire area a link, overriding docusaurus styling
const Section = styled(Link)`
  h2 { color: var(--ifm-link-color); }
  p { color: var(--ifm-font-color-base); }

  &:hover {
    text-decoration: none;
    h2, .read-more {
      text-decoration: var(--ifm-link-hover-decoration);
    }
  }
`


export default function BlogPostItems({items}) {
  const location = useLocation()
  const listingByTag = location.pathname.split('/')[2] == 'tags'

  // get all unique tags, count and sort them
  const allTags = items.reduce((acc, {content}) => [...acc, ...content.metadata.tags], [])
  const counts = countBy(allTags, 'label')
  let tags = uniqBy(allTags.map(obj => ({...obj, count: counts[obj.label]})), 'label')
  tags = sortBy(tags, 'count').reverse()

  return (
    <div className="flex">
      <div className="lg:w-9/12">
        {items.map(({content: BlogPostContent}) => {
          const {frontMatter, permalink, tags} = BlogPostContent.metadata;
          const {project_id, title} = frontMatter;

          const partner = partners.find(obj => obj.id == project_id);
          const {logo} = partner || {};

          return (
            <BlogPostProvider
              key={permalink}
              content={BlogPostContent}>
              <Section className="flex flex-col md:flex-row gap-2" to={permalink}>
                <div className="bg-white shadow-sm rounded-xl">
                  {logo &&
                    <img src={require(`@site/static/${logo}`).default} className="max-h-[250px]" />
                  }
                  <h1 className="text-base mb-4 text-neutral-500">{title}</h1>
                  <BlogPostContent />

                  <div className="flex items-start justify-between">
                    <CustomInlineTagList tags={tags} />
                    <span className="flex items-center gap-1 read-more">
                      Read more <Arrow />
                    </span>
                  </div>

                  <hr className="bg-neutral-200" />
                </div>
              </Section>

            </BlogPostProvider>
          )
        })}
      </div>

      <div className="lg:w-3/12 mx-12 hidden lg:flex sticky top-[calc(60px+2rem)] h-full">
        {!listingByTag &&
          <div className="flex flex-col">
            <h3>Science Tags</h3>
            <CustomTagList tags={tags} />
          </div>
        }
      </div>

    </div>
  );
}
