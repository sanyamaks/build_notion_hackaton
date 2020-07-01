const header = document.querySelector(".header");
const articlesContainer = document.querySelector(".articles-container");

const createArticle = (article) => {
  const articleObj = new Article(article, localStorageAPI);
  return articleObj.createArticle();
};
const renderHeaderTitle = (title) => {
  const headerTitleMarkup = `<div class="header__title" contenteditable="true" data-placeholder="Заголовок страницы">${title}</div>`;
  header.insertAdjacentHTML("beforeend", headerTitleMarkup);
};

const headerTitleHandler = (event) => {
  localStorageAPI.updateHeaderTitle(event.target.textContent);
};

const localStorageAPI = new LocalStorageAPI();
const someArticles = new SomeArticles(articlesContainer, createArticle);

if (!localStorageAPI.hasLocalData()) {
  localStorageAPI.setLocalData(defaultData);
} else {
  localStorageAPI.updateLocalData();
}

someArticles.renderArticles(localStorageAPI.getLocalArticles());

renderHeaderTitle(localStorageAPI.getLocalHeaderTitle());

// localStorageAPI.addDataItem({ articleTitle: "title", articleTexts: ["body"] }, 1);
// localStorageAPI.updateDataItem({ articleTitle: "title1", articleTexts: ["body1"] }, 2);

header
  .querySelector(".header__title")
  .addEventListener("input", headerTitleHandler);
