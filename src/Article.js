class Article {
  constructor(articleData) {
    this.articleData = articleData;
  }

  createArticle = () => {
    const articleContentMarkup = `
    <div class="article__buttons-container">
      <button class="article__button article__button_type_title"></button>
      <button class="article__button article__button_type_text"></button>
      <button class="article__button article__button_type_delete"></button>
      <button class="article__button article__button_type_move"></button>
    </div>
    <div class="article__title" contenteditable="true" data-placeholder="Заголовок статьи"></div>
  `;

    const article = document.createElement("article");
    article.classList.add("article", "articles-container__article");
    article.insertAdjacentHTML("afterbegin", articleContentMarkup);

    const articleTitle = article.querySelector(".article__title");
    articleTitle.textContent = this.articleData.articleTitle;

    const articleTextElements = this.articleData.articleTexts.map((text) => {
      return `<div class="article__text" contenteditable="true" data-placeholder="Текст статьи">${text}</div>`;
    });

    article.insertAdjacentHTML("beforeend", articleTextElements.join(""));

    return article;
  };

  setEventListeners(buttonTitle, buttonText, buttonRemove, buttonMove) {
    buttonTitle.addEventListener("click", this.editTitle);
    buttonText.addEventListener("click", this.editText);
    buttonRemove.addEventListener("click", this.editRemove);
    buttonMove.addEventListener("click", this.editMove);
  }

  editTitle() {
    console.log("editTitle");
  }

  editText() {
    console.log("editText");
  }

  editRemove() {
    console.log("editRemove");
  }

  editMove() {
    console.log("editMove");
  }
}
