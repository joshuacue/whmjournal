import User from './User';

export default class Audio {
  constructor() {
    audios = [];
    list = [];
    item = null;
  }
  static setItem(item) {
    this.item = item;
  }
  static getItem() {
    return this.item;
  }
  static getAudio() {
    return this.list.filter(item => {
      return item.text === this.item;
    })[0];
  }
  static setData(data) {
    data = JSON.parse(data);
    this.list = data;
  }
  static getData(filter = '') {
    let list = this.list ? this.list : [];
    let newList = [];
    if (filter == '') newList = list;
    else if (filter == 'Favorite') {
      newList = list.filter(item => {
        return User.isFavorite(item.text);
      });
    } else {
      newList = list.filter(item => {
        return item.text.toLowerCase().startsWith(filter.toLowerCase());
      });
    }
    let len = newList.length;
    for (let i = len; i < 8; i++) newList[i] = {text: '', image: null};

    return newList;
  }
}
