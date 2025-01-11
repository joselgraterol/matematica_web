// src/pages/ArticleDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Article.css'; // Import the CSS file
import { articles } from '../data/articles';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="article-detail not-found">
        <div className="text-center">
          <h1>Article not found</h1>
          <button onClick={() => navigate('/articles')} className="back-button">
            Back to Articles
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="article-detail">
      <div className="container">
        <button onClick={() => navigate('/articles')} className="back-button">
          <span className="icon">←</span> Volver a Artículos
        </button>

        <article className="article-content">
          <img src={article.image} alt={article.title} className="article-image" />
          <div className="content">
            <h1>{article.title}</h1>
            <div className="date">{article.date}</div>
            <div className="text">
              {article.content.map((item, index) => {
                if (item.type === 'text') {
                  return <p key={index}>{item.value}</p>;
                } else if (item.type === 'image') {
                  return <img key={index} src={item.value} alt={`${article.title} image ${index + 1}`} className="article-image" />;
                } else if (item.type === 'heading') {
                  return <h2 key={index}>{item.value}</h2>;
                  
                } else if (item.type === 'heading2') {
                  return <h3 key={index}>{item.value}</h3>;
                  
                }
                return null;
              })}
            </div>
          </div>
        </article>


        {/* <article className="article-content">
          <img src={article.image} alt={article.title} className="article-image" />
          <div className="content">
            <h1>{article.title}</h1>
            <div className="date">{article.date}</div>
            <div className="text">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article> */}
      </div>
    </div>
  );
};

export default ArticleDetail;
