class LocalStorageAPI {
  constructor() {
    this.data = null;
  }

  setLocalData(articles) {
    this.data = articles;
    localStorage.setItem("data", JSON.stringify(this.data));
  }

  getLocalData() {
    this.data = JSON.parse(localStorage.getItem("data"));
    return this.data;
  }

  hasLocalData() {
    return !!localStorage["data"];
  }

  addDataItem(article, pos) {
    this.data = [
      ...this.data.slice(0, pos),
      article,
      ...this.data.slice(pos, this.data.length),
    ];
    this.setLocalData(this.data);
  }

  updateDataItem(article, pos) {
    this.data = [
      ...this.data.slice(0, pos - 1),
      article,
      ...this.data.slice(pos, this.data.length),
    ];
    this.setLocalData(this.data);
  }
}
