// src/pages/BlogPostPage.jsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
// import { getPostBySlug } from '../data/blogPosts';
import { getPostBySlug } from "./blogPosts";
import './blog.css';

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="blog-page containered">
        <h2>Post not found</h2>
        <p>The blog post you requested does not exist.</p>
        <button className="btn" onClick={() => navigate('/blog')}>
          Back to blog
        </button>
      </main>
    );
  }

  return (
    <main className="blog-page containered">
      <article className="single-post">
        <header className="single-post-header">
          <h1>{post.title}</h1>
          <time>{new Date(post.date).toLocaleDateString()}</time>
        </header>

        <img src={post.image} alt={post.title} className="single-post-image" />

        <section
          className="single-post-content"
          // content is safe because it's authored by you; if user-generated, sanitize
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="single-post-footer">
          <Link to="/blog" className="back-link">← Back to blog</Link>
        </footer>
      </article>
    </main>
  );
}
