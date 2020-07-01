class SomeArticles {
  constructor(articleContainer, createArticle) {
    this.articleContainer = articleContainer;
    this.articles = null;
    this.createArticle = createArticle;
  }

  renderArticles(articles) {
    console.log(articles);
    this.articles = articles;
    this.articles.forEach((article) => {
      console.log(article);
      this.articleContainer.appendChild(this.createArticle(article));
    });
  }
}
