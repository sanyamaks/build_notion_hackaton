class Article {
  constructor(articleData, localStorageAPI) {
    this.articleData = articleData;
    this.localStorageApi = localStorageAPI;
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
    this.setEventListeners(article);
    return article;
  };

  setEventListeners(article) {
    article
      .querySelector(".article__button_type_title")
      .addEventListener("click", this.editTitle);
    article
      .querySelector(".article__button_type_text")
      .addEventListener("click", this.editText);
    article
      .querySelector(".article__button_type_delete")
      .addEventListener("click", this.editRemove);
    article
      .querySelector(".article__button_type_move")
      .addEventListener("click", this.editMove);
  }

  removeEventListeners(article) {
    article
      .querySelector(".article__button_type_title")
      .removeEventListener("click", this.editTitle);
    article
      .querySelector(".article__button_type_text")
      .removeEventListener("click", this.editText);
    article
      .querySelector(".article__button_type_delete")
      .removeEventListener("click", this.editRemove);
    article
      .querySelector(".article__button_type_move")
      .removeEventListener("click", this.editMove);
  }

  editTitle() {
    this.localStorageApi.addDataItem({articleTitle: "title", articleTexts: ["body"] }, this.articleData.id);
    // document.body.appendChild(this.createArticle1({articleTitle: "title", articleTexts: ["body"] }));
  };

  editText() {
    console.log("editText");
  }

  editRemove = (event) => {
    const parent = event.target.closest(".articles-container");
    const child = event.target.closest(".article");
    this.removeEventListeners(child);
    parent.removeChild(child);
    this.localStorageApi.removeDataItem(this.articleData.id);
  };

  editMove() {
    console.log("editMove");
  }
}
