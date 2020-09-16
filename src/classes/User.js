import Auth0 from 'react-native-auth0';
import Bird from './Bird';
import RNFS from 'react-native-fs';
export const domain = 'dev-684eht1o.auth0.com'; //'dev-684eht1o.auth0.com';
export const clientId = 'adhFRjTq5vW0fQ7KXtAHESSljoxad4H9'; //'adhFRjTq5vW0fQ7KXtAHESSljoxad4H9';

export default class User {
  constructor() {
    this.token = null;
    this.refreshToken = null;
    this.expiresIn = null;
    this.date = null;
    this.client = null;
    this.sub = null;
    this.email = null;
    this.data = {};
    this.record = {};
    this.areaClearRecord = {};
  }
  static setToken(token, refreshToken, expiresIn) {
    this.token = token;
    if (refreshToken) this.refreshToken = refreshToken;
    this.expiresIn = expiresIn;
    this.date = new Date().valueOf();
  }
  static setData(data) {
    this.data = data;
  }
  static checkPin(pin) {
    return this.data.pin == pin;
  }
  static refresh(cb) {
    if (this.expiresIn < new Date().valueOf() - this.date)
      this.client.auth
        .refreshToken({refreshToken: this.refreshToken})
        .then(info => {
          this.setToken(info.accessToken, info.refreshToken, info.expiresIn);
          cb();
        });
    else cb();
  }
  static loginViaAuth0(cb, ecb) {
    this.client = new Auth0({domain, clientId});
    this.client.webAuth
      .authorize({
        scope:
          'openid profile email read:current_user update:current_user_metadata offline_access',
        audience: `https://${domain}/api/v2/`,
      })
      .then(credentials => {
        this.setToken(
          credentials.accessToken,
          credentials.refreshToken,
          credentials.expiresIn,
        );
        this.client.auth
          .userInfo({token: credentials.accessToken})
          .then(info => {
            this.sub = info.sub;
            this.email = info.email;
            cb(credentials, info);
          });
      })
      .catch(error => {
        ecb(error, this.client);
      });
  }
  static authAvailable(cb, ecb) {
    const timeout = new Promise((resolve, reject) => {
      setTimeout(reject, 60000, 'Request timed out');
    });

    const request = fetch('https://' + domain);

    return Promise.race([timeout, request])
      .then(response => {
        cb(response);
      })
      .catch(error => {
        ecb(error);
      });
  }
  static login(cb, ecb) {
    let path = RNFS.DocumentDirectoryPath + '/whmjournal.data';
    RNFS.readFile(path, 'utf8')
      .then(data => {
        data = JSON.parse(data);
        this.authAvailable(
          () => {
            this.loginViaAuth0(
              (credentials, info) => {
                data.accessToken = credentials.accessToken;
                data.refreshToken = credentials.refreshToken;
                data.tokenExpiry = credentials.expiresIn;
                data.tokenCreated = Date.parse(new Date());
                data.info = info;
                RNFS.unlink(path).then(() => {
                  RNFS.writeFile(path, JSON.stringify(data), 'utf8')
                    .then(success => {
                      cb(info);
                    })
                    .catch(err => {
                      alert(err.message);
                    });
                });
              },
              (error, client) => {
                ecb(error);
              },
            );
          },
          err => {
            let date = Date.parse(new Date());
            if (
              data.accessToken &&
              data.tokenCreated &&
              data.tokenExpiry &&
              ((date / 1000) - (data.tokenCreated / 1000) > data.tokenExpiry)
            ) {
              alert('App cannot connect to server. Please try again later');
            } else {
              this.sub = data.info.sub;
              this.email = data.info.email;
              cb(data.info);
            }
          },
        );
      })
      .catch(err => {
        let data = {};
        data.disablePin = 0;
        data.accessToken = null;
        data.refreshToken = null;
        data.tokenExpiry = null;
        data.tokenCreated = null;
        data.info = null;
        if (err.message.includes('No such file or directory')) {
          RNFS.writeFile(path, JSON.stringify(data), 'utf8')
            .then(success => {
              this.authAvailable(
                () => {
                  this.loginViaAuth0(
                    (credentials, info) => {
                      data.accessToken = credentials.accessToken;
                      data.refreshToken = credentials.refreshToken;
                      data.tokenExpiry = credentials.expiresIn;
                      data.tokenCreated = Date.parse(new Date());
                      data.info = info;
                      RNFS.unlink(path).then(() => {
                        RNFS.writeFile(path, JSON.stringify(data), 'utf8')
                          .then(success => {
                            cb(info);
                          })
                          .catch(err => {
                            alert(err.message);
                          });
                      });
                    },
                    (error, client) => {
                      ecb(error);
                    },
                  );
                },
                err => {
                  if (
                    data.accessToken &&
                    data.tokenCreated &&
                    data.tokenExpiry &&
                    Date.parse(new Date()) - data.tokenCreated >
                      data.tokenExpiry
                  ) {
                    alert(
                      'App cannot connect to server. Please try again later',
                    );
                  } else {
                    this.sub = data.info.sub;
                    this.email = data.info.email;
                    cb(data.info);
                  }
                },
              );
            })
            .catch(err => {
              alert(err.message);
            });
        } else alert(err.message);
      });
  }
  static logout(cb) {
    this.client.webAuth.clearSession().catch(() => {});
    this.token = null;
    this.refreshToken = null;
    this.expiresIn = null;
    this.date = null;
    this.client = null;
    this.sub = null;
    this.email = null;
    this.data = {};
    let data2 = {};
    data2.disablePin = 0;
    data2.accessToken = null;
    data2.refreshToken = null;
    data2.tokenExpiry = null;
    data2.tokenCreated = null;
    data2.info = null;
    let path = RNFS.DocumentDirectoryPath + '/whmjournal.data';
    RNFS.unlink(path).then(() => {
      RNFS.writeFile(path, JSON.stringify(data2), 'utf8')
        .then(success => {
          cb();
        })
        .catch(err => {
          alert(err.message);
        });
    });
  }
  static savePin(pin, cb, ecb) {
    this.refresh(() => {
      let newData = this.data;
      if (!newData) newData = {};
      if (!newData.pin) newData.pin = [];
      newData.pin = pin;
      this.client
        .users(this.token)
        .patchUser({
          id: this.sub,
          metadata: newData,
        })
        .then(info => {
          this.data = newData;
          let path = RNFS.DocumentDirectoryPath + '/whmjournal.data';
          RNFS.readFile(path, 'utf8')
            .then(data => {
              data = JSON.parse(data);
              data.info.pin = pin;
              RNFS.unlink(path).then(() => {
                RNFS.writeFile(path, JSON.stringify(data), 'utf8')
                  .then(success => {})
                  .catch(err => {
                    alert(err.message);
                  });
              });
            })
            .catch(err => {
              alert(err.message);
            });
          cb(info);
        })
        .catch(error => {
          ecb(error);
        });
    });
  }
  static isFavorite(item) {
    return this.data && this.data.favorites
      ? this.data.favorites.includes(item)
      : false;
  }
  static saveFavorites(item, cb, ecb) {
    this.refresh(() => {
      let newData = this.data;
      if (!newData) newData = {};
      if (!newData.favorites) newData.favorites = [];
      let oldData = newData;
      let isFavorite = this.isFavorite(item);
      if (!isFavorite) newData.favorites.push(item);
      else
        newData.favorites = oldData.favorites.filter(function(e) {
          return e !== item;
        });
      this.client
        .users(this.token)
        .patchUser({
          id: this.sub,
          metadata: newData,
        })
        .then(info => {
          this.data = newData;
          cb(info);
        })
        .catch(error => {
          ecb(error);
        });
    });
  }
  static setRecord(key, value) {
    if (!this.record) this.record = {};
    let birds = [];
    switch (key) {
      case Bird.BIRD_RECORD:
        if (!this.record[Bird.BIRD_RECORD])
          this.record[Bird.BIRD_RECORD] = [{name: value, count: 0}];
        else {
          birds = this.record[Bird.BIRD_RECORD];
          birds.push({name: value, count: 0});
          this.record[Bird.BIRD_RECORD] = birds;
        }
        break;
      case Bird.BIRD_COUNT:
        birds = this.record[Bird.BIRD_RECORD];
        birds[birds.length - 1]['count'] = parseInt(value);
        this.record[Bird.BIRD_RECORD] = birds;
        break;
      case Bird.BIRD_BEHAVIOR_AMMO:
        this.record[Bird.BIRD_BEHAVIOR_AMMO] = parseInt(value);
        break;
      default:
        this.record[key] = value;
        break;
    }
  }
  static setAreaClear(key, value) {
    if (!this.areaClearRecord) this.areaClearRecord = {};
    switch (key) {
      default:
        this.areaClearRecord[key] = value;
        break;
    }
  }
  static getAreaClearRecord() {
    return this.areaClearRecord;
  }
  static clearAreaClearRecord() {
    return (this.areaClearRecord = null);
  }
  static getRecord() {
    return this.record;
  }
  static clearRecord() {
    return (this.record = null);
  }
}
