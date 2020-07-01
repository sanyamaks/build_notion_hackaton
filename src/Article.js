class Article {
  constructor(data, updateArticleData, addArticleData, deleteArticleData) {
    this._data = data;
    this._updateArticleData = updateArticleData;
    this._addArticleData = addArticleData;
    this._deleteArticleData = deleteArticleData;
  }

  create() {
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
    articleTitle.textContent = this._data.articleTitle;
  
    const articleText = this._data.articleTexts.map((text) => {
      return `<div class="article__text" contenteditable="true" data-placeholder="Текст статьи">${text}</div>`;
    }).join('');
  
    article.insertAdjacentHTML('beforeend', articleText);

    this._articleTitle = articleTitle;
    this._buttonsContainer = article.querySelector('.article__buttons-container');
    this._articleTextElements = article.querySelectorAll('.article__text');
    this._buttonTitle = article.querySelector('.article__button_type_title');
    this._buttonText = article.querySelector('.article__button_type_text');
    this._buttonDelete = article.querySelector('.article__button_type_delete');
    this._buttonMove = article.querySelector('.article__button_type_move');
  
    this._setEventListeners();

    return article;
  };

  _setEditTextListeners(element) {
    element.addEventListener('input', this._updateArticleData);
    element.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === 'Escape') {
        document.activeElement.blur()
        this._updateArticleData();
      }
    })
  }

  _showButtonsHandler() {
    this._buttonsContainer.style.display = 'block';

    setTimeout(() => {
      this._buttonsContainer.style.display = 'none';
    }, 2000);
  }

  _setEventListeners() {
    const boundShowButtonsHandler = this._showButtonsHandler.bind(this);

    this._setEditTextListeners(this._articleTitle);
    this._articleTitle.addEventListener('mouseover', boundShowButtonsHandler);
    this._articleTextElements.forEach((element) => {
      this._setEditTextListeners(element);
      element.addEventListener('mouseover', boundShowButtonsHandler);
    });

  }
}

export default Article;
