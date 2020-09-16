import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeClass from './Home';

export default class Navigator {
  constructor() {
    this.instance = null;
    this.container = null;
  }
  static createMainNavigator(obj) {
    return (this.instance = createStackNavigator(
      {...obj},
      {
        defaultNavigationOptions: {header: null},
        initialRouteName: HomeClass.NAME,
      },
    ));
  }
  static createMainContainer(obj) {
    return (this.container = createAppContainer(obj));
  }
}
