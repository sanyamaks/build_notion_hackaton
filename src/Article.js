class Article {
  constructor(articleData) {
    this.articleData = articleData;
  }

  createText(article, body) {
    const articleText = document.createElement("p");
    articleText.classList.add("article__text");
    articleText.textContent = body;
    article.appendChild(articleText);
  }

  createArticle() {
    const { title, body } = this.articleData;
    const article = document.createElement("article");
    const articleTitle = document.createElement("h2");
    const articleButtonsContainer = document.createElement("div");
    const articleButtonTitle = document.createElement("button");
    const articleButtonText = document.createElement("button");
    const articleButtonRemove = document.createElement("button");
    const articleButtonMove = document.createElement("button");

    article.classList.add("article");
    article.classList.add("articles-container__article");
    articleTitle.classList.add("article__title");
    articleButtonsContainer.classList.add("article__buttons-container");
    articleButtonTitle.classList.add("article__button");
    articleButtonTitle.classList.add("article__button_type_title");
    articleButtonText.classList.add("article__button");
    articleButtonText.classList.add("article__button_type_text");
    articleButtonRemove.classList.add("article__button");
    articleButtonRemove.classList.add("article__button_type_delete");
    articleButtonMove.classList.add("article__button");
    articleButtonMove.classList.add("article__button_type_move");

    articleTitle.textContent = title;

    article.appendChild(articleTitle);
    body.forEach((item) => {
      this.createText(article, item);
    });
    article.appendChild(articleButtonsContainer);
    articleButtonsContainer.appendChild(articleButtonTitle);
    articleButtonsContainer.appendChild(articleButtonText);
    articleButtonsContainer.appendChild(articleButtonRemove);
    articleButtonsContainer.appendChild(articleButtonMove);
    this.setEventListeners(
      articleButtonTitle,
      articleButtonText,
      articleButtonRemove,
      articleButtonMove
    );
    return article;
  }

  setEventListeners(buttonTitle, buttonText, buttonRemove, buttonMove) {
    buttonTitle.addEventListener("click", this.editTitle);
    buttonText.addEventListener("click", this.editText);
    buttonRemove.addEventListener("click", this.editRemove);
    buttonMove.addEventListener("click", this.editMove);
  }

  editTitle(){
    console.log("editTitle");
  }

  editText(){
    console.log("editText");
  }

  editRemove(){
    console.log("editRemove");
  }

  editMove(){
    console.log("editMove");
  }
}
