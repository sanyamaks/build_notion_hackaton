class SomeArticles {
  constructor(articleContainer, articles, createArticle) {
    this.articleContainer = articleContainer;
    this.articles = articles;
    this.createArticle = createArticle;
  }

  renderArticles() {
    this.articles.forEach((item) => {
      const article = this.createArticle(item);
      this.articleContainer.appendChild(article.createArticle());
    });
  }
}
