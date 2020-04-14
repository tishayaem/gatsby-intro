import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/usePosts';
import PostPreview from '../components/PostPreview';
import Hero from '../components/hero';
export default () => {
  const posts = usePosts();
  return (
    <>
    <Hero />
    <Layout>
      <h2>My blog</h2>
      {posts.map(post => (
        // <pre>{JSON.stringify(post, null, 2)}</pre>
        <PostPreview key={post.slug} post={post}/>
      ))}
    </Layout>
    </>
  );
};
