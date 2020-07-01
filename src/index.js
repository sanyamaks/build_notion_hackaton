const articlesContainer = document.querySelector(".articles-container");

const localStorageAPI = new LocalStorageAPI();
const someArticles = new SomeArticles(articlesContainer, createArticle);
function createArticle(article) {
  const articleObj = new Article(article);
  return articleObj.createArticle();
}
if (!localStorageAPI.hasLocalData()) {
  localStorageAPI.setLocalData(dataArticles);
}
someArticles.renderArticles(localStorageAPI.getLocalData());
// localStorageAPI.addDataItem({ title: "title", body: ["body"] }, 1);
// localStorageAPI.updateDataItem({ title: "title1", body: ["body1"] }, 2);
