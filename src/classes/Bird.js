import User from './User';

export default class Bird {
  constructor() {
    birds = [];
    list = [];
  }
  static get BIRD_RECORD() {
    return 'bird';
  }
  static get BIRD_COUNT() {
    return 'bird-count';
  }
  static get BIRD_BEHAVIOR() {
    return 'bird-behavior';
  }
  static get BIRD_BEHAVIOR_TYPE() {
    return 'bird-behavior-type';
  }
  static get BIRD_BEHAVIOR_AMMO() {
    return 'bird-behavior-ammo';
  }
  static get BIRD_NON_LETHAL() {
    return 'bird-non-lethal';
  }
  static get BIRD_RESULT() {
    return 'bird-result';
  }
  static get BIRD_TIME() {
    return 'bird-time';
  }
  static get BIRD_HEADING() {
    return 'bird-heading';
  }
  static setData(data) {
    data = JSON.parse(data);
    // let newData = [];
    // data.map((bird)=>{
    //   newData.push({ image: { uri: bird.image }, text: bird.text});
    // });

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
