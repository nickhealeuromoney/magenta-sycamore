const mockApi = {
  deleteArticle: 'http://localhost:3001/api/deleteArticle',
  saveArticle: 'http://localhost:3001/api/saveArticle',
  unmarkedArticles: 'http://localhost:3001/api/getUnmarkedArticles',
};

const realAPI = {
  deleteArticle: 'http://localhost:3001/api/deleteArticle',
  saveArticle: 'http://localhost:3001/api/saveArticle',
  unmarkedArticles: 'https://swipestory.azurewebsites.net/api/articles/getunmarkedarticles',
};

export default mockApi;