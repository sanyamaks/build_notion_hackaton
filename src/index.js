const articlesContainer = document.querySelector(".articles-container");

const someArticles = new SomeArticles(articlesContainer, dataArticles, createArticle);
function createArticle(article) {
  const articleObj = new Article(article);
  return articleObj
}

someArticles.renderArticles();
