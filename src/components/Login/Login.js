import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import {Alert, BackHandler} from 'react-native';
import PinClass from '../../classes/Pin';
import User from '../../classes/User';
import Loader from '../Common/Loader';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.login = this.login.bind(this);
  }
  login() {
    User.login(
      info => {
        let hasPin = false;
        Object.keys(info).forEach(key => {
          if (key.indexOf('user_metadata') > -1) {
            hasPin = true;
            User.setData(info[key]);
            this.props.navigation.navigate(PinClass.NAME, {
              hasPin: true,
              confirm: false,
            });
          }
        });
        if (!hasPin)
          this.props.navigation.navigate(PinClass.NAME, {
            hasPin: false,
            confirm: false,
          });
      },
      () => {
        Alert.alert('Login', 'Something went wrong! App will close...');
        BackHandler.exitApp();
      },
    );
  }
  render() {
    this.login();
    return <Loader />;
  }
}
