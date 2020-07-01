/* const articlesContainer = document.querySelector(".articles-container");

const someArticles = new SomeArticles(articlesContainer, dataArticles, createArticle);
function createArticle(article) {
  const articleObj = new Article(article);
  return articleObj
}

someArticles.renderArticles(); */

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
const createArticle = (data) => {
  const articleContentMarkup = `
    <div class="article__buttons-container">
      <button class="article__button article__button_type_title"></button>
      <button class="article__button article__button_type_text"></button>
      <button class="article__button article__button_type_delete"></button>
      <button class="article__button article__button_type_move"></button>
    </div>
    <div class="article__title" contenteditable="true" data-placeholder="Заголовок статьи"></div>
  `;

  const article = document.createElement('article');
  article.classList.add('article', 'articles-container__article');
  article.insertAdjacentHTML('afterbegin', articleContentMarkup);

  const articleTitle = article.querySelector('.article__title');
  articleTitle.textContent = data.articleTitle;

  const articleTextElements = data.articleTexts.map((text) => {
    return `<div class="article__text" contenteditable="true" data-placeholder="Текст статьи">${text}</div>`;
  });

  article.insertAdjacentHTML('beforeend', articleTextElements.join(''));

  return article;
};

// обработчики
const headerTitleHandler = () => {
  storage.headerTitle = headerTitle.value;
};

// слушатели
headerTitle.addEventListener('input', headerTitleHandler);

// Инициализация
const initHeaderTitle = () => {
  headerTitle.textContent = storage.headerTitle;
};

// Использовать в классе someArticles?
const initArticles = () => {
  storage.articles.forEach((data) => {
    articlesContainer.append(createArticle(data));
  });
};

const initAppData = () => {
  Object.entries(defaultData).forEach(([key, value]) => {
    if (storage.hasOwnProperty(key)) {
      return;
    }

    storage[key] = value;
  });
};

initAppData();
initHeaderTitle();
initArticles();
