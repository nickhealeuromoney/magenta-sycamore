const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/api/getUnmarkedArticles', (req, res) => {
  const articles = new Array(100).fill(0).map((_, index) => {
    return index % 2 === 0 ? {
      id: index,
      metadata: 'Today · 5 minute read',
      image: 'https://placebear.com/250/250',
      title: 'China’s digital currency: A small leap forward',
    } : {
      id: index,
      metadata: 'Today · 5 minute read',
      image: 'https://placebear.com/250/251',
      title: 'Top Trumps: Private banking and the US election',
    };
  });

  res.json(articles);
});

app.get('/api/getSavedArticles', (req, res) => {
  const articles = new Array(100).fill(0).map((_, index) => {
    return index % 2 === 0 ? {
      id: index,
      metadata: 'Today · 5 minute read',
      image: 'https://placebear.com/250/250',
      title: 'China’s digital currency: A small leap forward',
    } : {
      id: index,
      metadata: 'Today · 5 minute read',
      image: 'https://placebear.com/250/251',
      title: 'Top Trumps: Private banking and the US election',
    };
  });

  res.json(articles);
});

app.put('/api/deleteArticle', (req, res) => {
  res.json({});
});

app.put('/api/saveArticle', (req, res) => {
  res.json({});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
