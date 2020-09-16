export default class Pin {
  constructor() {
    this.pin = null;
  }
  static get NAME() {
    return 'Pin';
  }
  static setPin(pin) {
    this.pin = pin;
  }
  static checkPin(pin) {
    return this.pin == pin;
  }
}
