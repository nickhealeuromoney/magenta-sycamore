import React from 'react';

const ARTICLES = {
  article: {
    metadata: 'Today · 5 minute read',
    image: 'https://placebear.com/250/250',
    title: 'China’s digital currency: A small leap forward',
  }
}

const ArticleSection = ({
  articleId,
}) => {
  const article = ARTICLES[articleId];

  if (!article) return <p>No article!</p>;

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
