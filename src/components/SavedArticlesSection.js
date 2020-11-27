import React from 'react';
import { navigate } from 'gatsby';
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
  function onClick() {
    navigate('/article/article');
  }

  return (
    <>
      {ARTICLES.map((article, index) => <SavedArticle key={index} onClick={onClick} onDelete={() => console.log('deleted')} {...article} />)}
    </>
  );
};

export default SavedArticlesSection;
