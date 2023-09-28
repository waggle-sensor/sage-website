import React from 'react';
import BlogPostItemHeaderTitle from '@theme/partners/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/partners/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
export default function BlogPostItemHeader() {
  return (
    <header>
      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderInfo />
      <BlogPostItemHeaderAuthors />
    </header>
  );
}
