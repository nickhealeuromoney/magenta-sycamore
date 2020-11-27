import React, { useState } from 'react';
import { navigate } from 'gatsby';
import Filters from './Filters';
import SavedArticle from './SavedArticle';

const ARTICLES = new Array(100).fill(0).map((_, index) => {
  return index % 2 === 0 ? {
    metadata: 'Today · 5 minute read',
    image: 'https://placebear.com/250/250',
    title: 'China’s digital currency: A small leap forward',
  } : {
    metadata: 'Today · 5 minute read',
    image: 'https://placebear.com/250/251',
    title: 'Top Trumps: Private banking and the US election',
  };
});

const SavedArticlesSection = () => {
  const [articles, setArticles] = useState(ARTICLES);
  
  function onClick() {
    navigate('/article/article');
  }

  function onDelete(index) {
    const newArticles = [...articles];
    newArticles.splice(index, 1);
    setArticles(newArticles);
  }

  return (
    <>
      <Filters />
      {articles.map((article, index) => (
        <SavedArticle
          key={`${index}-${article.image}`}
          onClick={onClick}
          onDelete={() => onDelete(index)}
          {...article}
        />
      ))}
    </>
  );
};

export default SavedArticlesSection;
