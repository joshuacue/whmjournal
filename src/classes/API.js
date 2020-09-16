import Socket from 'socket.io-client';
import Updater from './Updater';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
]);
class API {
  constructor() {
    this.server = 'http://10.0.2.2:4000';
    this.socket = null;
    this.init();
    Updater.init(this);
  }
  init() {
    this.socket = Socket(this.server);
    this.socket.on('connect', () => {
      Updater.setUpdate(true);
    });
    this.socket.on('event', data => {
      alert('event');
    });
    this.socket.on('error', data => {
      alert('error');
    });
    this.socket.on('disconnect', () => {
      Updater.setUpdate(false);
    });
    this.socket.connect();
  }
  sendMessage(key, message, callback) {
    if (this.socket)
      this.socket.emit(key, message, data => {
        if (callback) callback(data);
      });
  }
}
const api = new API();
export default api;
