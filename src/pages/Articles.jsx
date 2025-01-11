// src/components/Articles.js
import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import './Articles.css'; // Import the CSS file

const Articles = () => {
  return (
    <div className="articles">
      <div className="container">
        <h1>Todos los Articulos</h1>
        <div className="articles-grid">
          {articles.map((article) => (
            <Link key={article.id} to={`/articles/${article.id}`} className="article-card">
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="article-content">
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <div className="article-date">{article.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
