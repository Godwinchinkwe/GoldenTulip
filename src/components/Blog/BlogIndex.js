// src/pages/BlogIndex.jsx
import React from 'react';
// import { posts } from '../data/blogPosts';
// import BlogCard from '../components/BlogCard';
import { posts } from "./blogPosts"
import BlogCard from './BlogCard';
import './blog.css';

export default function BlogIndex() {
  return (
    <main className="blog-page containered">
      <header className="blog-header">
        <h1>Hotel Blog</h1>
        <p className="blog-subtitle">Stories, tips and local guides from our team.</p>
      </header>

      <section className="blog-list">
        {posts.map((post) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </section>
    </main>
  );
}
