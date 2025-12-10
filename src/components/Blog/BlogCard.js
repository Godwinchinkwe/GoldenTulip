// src/components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './blog.css'; // shared styles

export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <Link to={`/blog/${post.slug}`} className="blog-image-link">
        <img src={post.image} alt={post.title} className="blog-image" />
      </Link>

      <div className="blog-card-content">
        <h3 className="blog-title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <time className="blog-date">{new Date(post.date).toLocaleDateString()}</time>
        <p className="blog-excerpt">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="read-more">
          Read more →
        </Link>
      </div>
    </article>
  );
}
