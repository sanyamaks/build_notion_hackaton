import Article from './Article.js';

// Пример дефолтной даты
const defaultData = {
  headerTitle: 'Правки',
  articles: [
    {
      articleTitle: 'Статья 81',
      articleTexts: [
        'Конституции Российской Федерации',
        'Конституции ',
      ],
    },
  ],
};

// localStorage
const storage = {};

// dom-элементы
const headerTitle = document.querySelector('.header__title');
const articlesContainer = document.querySelector('.articles-container');

// функции
const updateArticleData = () => {
  // LocalStorageAPI.updateItem();
};

const addArticleData = () => {
  // LocalStorageAPI.addDataItem();
};

const deleteArticleData = () => {
  // LocalStorageAPI.deleteData();
};

const createArticle = (data) => {
  const article = new Article(data, updateArticleData, addArticleData, deleteArticleData);

  return article.create();
};

// обработчики
const headerTitleHandler = () => {
  storage.headerTitle = headerTitle.textContent;
};

// слушатели
headerTitle.addEventListener('input', headerTitleHandler);
headerTitle.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === 'Escape') {
    document.activeElement.blur()
    headerTitleHandler();
  }
});

//  ---- Инициализация ------
const initHeaderTitle = () => {
  headerTitle.textContent = storage.headerTitle;
};

someArticles.renderArticles(localStorageAPI.getLocalArticles());

renderHeaderTitle(localStorageAPI.getLocalHeaderTitle());

// localStorageAPI.addDataItem({ articleTitle: "title", articleTexts: ["body"] }, 1);
// localStorageAPI.updateDataItem({ articleTitle: "title1", articleTexts: ["body1"] }, 2);

header
  .querySelector(".header__title")
  .addEventListener("input", headerTitleHandler);
