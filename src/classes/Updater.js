import Bird from './Bird';
import Audio from './Audio';

export default class Updater {
  constructor() {
    this.hasSpace = true;
    this.updating = false;
    api = null;
  }
  static init(api) {
    this.hasSpace = true;
    this.updating = false;
    this.api = api;
    this.test();
  }
  static test() {
    //TODO REMOVE WHEN DONE TESTING
    let data = JSON.stringify([
      {
        image: require('../../assets/images/Birds/blackheadedgull.jpg'),
        text: 'BLACK HEADED GULL',
      },
      {
        image: require('../../assets/images/Birds/carrioncrow.png'),
        text: 'CARRION CROW',
      },
      {
        image: require('../../assets/images/Birds/commoncurlew.jpg'),
        text: 'COMMON CURLEW',
      },
      {
        image: require('../../assets/images/Birds/commongull.jpg'),
        text: 'COMMON GULL',
      },
      {
        image: require('../../assets/images/Birds/gheron.jpg'),
        text: 'GHERON',
      },
      {
        image: require('../../assets/images/Birds/herringgull.jpg'),
        text: 'HERRING GULL',
      },
      {
        image: require('../../assets/images/Birds/jackdaw.png'),
        text: 'JACKDAW',
      },
      {
        image: require('../../assets/images/Birds/lapwing.png'),
        text: 'LAPWING',
      },
      {
        image: require('../../assets/images/Birds/redwing.jpg'),
        text: 'REDWING',
      },
      {
        image: require('../../assets/images/Birds/rook.png'),
        text: 'ROOK',
      },
      {
        image: require('../../assets/images/Birds/skylark.png'),
        text: 'SKYLARK',
      },
      {
        image: require('../../assets/images/Birds/starling.png'),
        text: 'STARLING',
      },
      {
        image: require('../../assets/images/Birds/stockdove.jpg'),
        text: 'STOCKDOVE',
      },
      {
        image: require('../../assets/images/Birds/swallow.jpg'),
        text: 'SWALLOW',
      },
      {
        image: require('../../assets/images/Birds/wheatear.jpg'),
        text: 'WHEATEAR',
      },
      {
        image: require('../../assets/images/Birds/woodpigeon.png'),
        text: 'WOOD PIGEON',
      },
    ]);
    Bird.setData(data);
    data = JSON.stringify([
      {
        image: '',
        text: 'HERRING GULL',
        fileName: 'herringgull.mp3',
      },
      {
        image: '',
        text: 'STARLING',
        fileName: 'starling.mp3',
      },
      {
        image: '',
        text: 'ROOK',
        fileName: 'rook.mp3',
      },
      {
        image: '',
        text: 'LAPWING',
        fileName: 'lapwing.mp3',
      },
      {
        image: '',
        text: 'SHOTGUN',
        fileName: 'shotgun.mp3',
      },
      {
        image: '',
        text: 'BUZZ',
        fileName: 'buzz.mp3',
      },
      {
        image: '',
        text: 'JACKDAW',
        fileName: 'jackdaw.mp3',
      },
      {
        image: '',
        text: 'RED KITE',
        fileName: 'red_kite.mp3',
      },
    ]);
    Audio.setData(data);
  }
  static setUpdate(value) {
    this.updating = value;
    if (value && this.hasSpace) {
      //TODO check if has space
      if (true) {
        //TODO Send saved actions
        //TODO loop starts here
        //TODO check every turn if has space
        //TODO if has space, then download new updates
        //TODO if dont have space, then set hasSpace to false and notify user.
        this.api.socket.on('updateBirdListReply', data => {
          Bird.setData(data);
        });
        this.api.sendMessage('updateBirdList', null, data => {
          Bird.setData(data);
        });
        //TODO set updating to false after the update
        this.updating = false;
      } else {
        this.hasSpace = false;
        alert("Can't Update. No storage space!");
      }
    }
  }
  static get UPDATING() {
    return this.updating;
  }
}
