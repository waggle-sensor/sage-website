import React from 'react';
import BlogPostItemHeaderTitle from '@theme/partners/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/partners/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
export default function BlogPostItemHeader() {
  return (
    <header>
      <BlogPostItemHeaderInfo />
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderAuthors />
    </header>
  );
}
