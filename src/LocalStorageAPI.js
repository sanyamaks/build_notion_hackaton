class LocalStorageAPI {
  constructor() {
    this.data = null;
  }

  setLocalData(data) {
    this.data = data;
    localStorage.setItem("data", JSON.stringify(this.data));
  }

  updateLocalData() {
    this.data = JSON.parse(localStorage.getItem("data"));
  }

  getLocalArticles() {
    return JSON.parse(localStorage.getItem("data")).articles;
  }

  getLocalHeaderTitle() {
    return JSON.parse(localStorage.getItem("data")).headerTitle;
  }

  hasLocalData() {
    return !!localStorage["data"];
  }

  addDataItem(article, id) {
    const pos =
      this.data.articles.indexOf(
        ...this.data.articles.filter((item) => item.id === id)
      ) + 1;
    this.data = {
      headerTitle: this.data.headerTitle,
      articles: [
        ...this.data.articles.slice(0, pos),
        article,
        ...this.data.articles.slice(pos, this.data.length),
      ],
    };

    this.setLocalData(this.data);
  }

  updateDataItem(article, pos) {
    this.data = {
      headerTitle: this.data.headerTitle,
      articles: [
        ...this.data.articles.slice(0, pos - 1),
        article,
        ...this.data.articles.slice(pos, this.data.length),
      ],
    };
    this.setLocalData(this.data);
  }

  removeDataItem(id) {
    this.data = {
      headerTitle: this.data.headerTitle,
      articles: this.getLocalArticles().filter((item) => item.id !== id),
    };
    this.setLocalData(this.data);
  }

  updateHeaderTitle(title) {
    this.data = { headerTitle: title, articles: [...this.data.articles] };
    this.setLocalData(this.data);
  }
}
