import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/usePosts';
export default () => {
  const posts = usePosts();
  return (
    <Layout>
      <h1>Home</h1>
      <Link to="/about/">About Me </Link>

      <h2>My blog</h2>
      {posts.map(post => (
        <pre>{JSON.stringify(post, null, 2)}</pre>
      ))}
    </Layout>
  );
};
