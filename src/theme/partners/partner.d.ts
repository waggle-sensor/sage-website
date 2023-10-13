import {BlogPostMetadata} from '@docusaurus/plugin-content-blog';

// extend front matter for partner markdown
export type PartnerFrontMatter = BlogPostMetadata & {
  project_id: string
  partner_tags: string[]
}