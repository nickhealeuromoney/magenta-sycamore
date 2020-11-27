import React, { useEffect, useState } from 'react';

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
        const rawResponse = await fetch('http://localhost:3001/api/getUnmarkedArticles');
        const response = await rawResponse.json();
        setArticles(response);
      } catch(e) {
        console.error(e);
      }
    }
    getArticles();
  }, []);
  
  const article = articles ? articles.find(({ id }) => id === +articleId) : null;

  if (!article) return <p>Loading...</p>;

  const {
    image,
    metadata,
    title,
  } = article;

  const style = {
    backgroundImage: `
      linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.3) 100%),
      url("${image}")
    `,
  };

  return (
    <article className="article">
      <section className="article__header" style={style}>
        <h3 className="article__category">Category</h3>
        <h2 className="article__title">{ title }</h2>
        <p className="article__metadata">{ metadata }</p>
      </section>
      <p className="article__body">
        The current pandemic has completely disrupted the entire business...
      </p>
    </article>
  );
}

export default ArticleSection;
