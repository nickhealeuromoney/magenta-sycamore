import React, { useEffect, useState } from 'react';
import apiFormatter from '../utils/apiFormatter';

// const ARTICLES = {
//   article: {
//     metadata: 'Today · 5 minute read',
//     image: 'https://placebear.com/250/250',
//     title: 'China’s digital currency: A small leap forward',
//   }
// }

const ArticleSection = ({
  articleId,
}) => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    async function getArticles() {
      try {
        const rawResponse = await fetch('https://swipestory.azurewebsites.net/api/articles/getunmarkedarticles');
        const response = await rawResponse.json();
        setArticles(apiFormatter(response));
      } catch(e) {
        console.error(e);
      }
    }
    getArticles();
  }, []);

  console.log(articles, articleId);
  
  const article = articles ? articles.find(({ Id }) => Id === articleId) : null;

  if (!article) return <p style={{ boxSizing: 'border-box', margin: '0 auto', maxWidth: '375px', padding: '24px' }}>Loading...</p>;

  const {
    ArticleBody,
    ImageUrl,
    Metadata,
    Title,
  } = article;

  const style = {
    backgroundImage: `
      linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.3) 100%),
      url("https://www.euromoneycdn.com${ImageUrl}")
    `,
  };

  return (
    <article className="article">
      <section className="article__header" style={style}>
        <h3 className="article__category">Category</h3>
        <h2 className="article__title">{ Title }</h2>
        <p className="article__metadata">{ Metadata }</p>
      </section>
      <p className="article__body" dangerouslySetInnerHTML={{ __html: ArticleBody }} />
    </article>
  );
}

export default ArticleSection;
