import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import Filters from './Filters';
import SavedArticle from './SavedArticle';

// const ARTICLES = new Array(100).fill(0).map((_, index) => {
//   return index % 2 === 0 ? {
//     id: index,
//     metadata: 'Today · 5 minute read',
//     image: 'https://placebear.com/250/250',
//     title: 'China’s digital currency: A small leap forward',
//   } : {
//     id: index,
//     metadata: 'Today · 5 minute read',
//     image: 'https://placebear.com/250/251',
//     title: 'Top Trumps: Private banking and the US election',
//   };
// });

const SavedArticlesSection = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    async function getCards() {
      try {
        const rawResponse = await fetch('http://localhost:3001/api/getSavedArticles');
        const response = await rawResponse.json();
        setArticles(response);
      } catch(e) {
        console.error(e);
      }
    }
    getCards();
  }, []);
  
  function onClick(id) {
    navigate(`/article/${id}`);
  }

  async function onDelete(index, id) {
    const newArticles = [...articles];
    newArticles.splice(index, 1);
    setArticles(newArticles);
    try {
      await fetch('http://localhost:3001/api/deleteArticle', {
        method: 'PUT',
        body: JSON.stringify({ id })
      });
    } catch(e) {
      console.error(e);
    }
  }

  return (
    <>
      <Filters />
      {!articles ? (
        <p style={{ boxSizing: 'border-box', margin: '0 auto', maxWidth: '375px', padding: '24px' }}>Loading...</p>
      ) : ( 
        <>
          {articles.map((article, index) => (
            <SavedArticle
              key={article.id}
              onClick={() => onClick(article.id)}
              onDelete={() => onDelete(index, article.id)}
              {...article}
            />
          ))}
        </>
      )}
    </>
  );
};

export default SavedArticlesSection;
