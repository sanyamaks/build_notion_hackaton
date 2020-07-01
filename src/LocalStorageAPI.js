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
    console.log(this.data);
    return JSON.parse(localStorage.getItem("data")).articles;
  }

  getLocalHeaderTitle() {
    console.log(this.data);
    return JSON.parse(localStorage.getItem("data")).headerTitle;
  }

  hasLocalData() {
    return !!localStorage["data"];
  }

  addDataItem(article, pos) {
    this.data = {
      headerTitle: this.data.headerTitle,
      articles: [
        ...this.data.articles.slice(0, pos),
        article,
        ...this.data.articles.slice(pos, this.data.length),
      ],
    };
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

  updateHeaderTitle(title) {
    console.log(title);
    this.data = { headerTitle: title, articles: [...this.data.articles] };
    console.log(this.data);
    this.setLocalData(this.data);
  }
}
