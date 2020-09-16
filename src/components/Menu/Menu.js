/* eslint-disable no-alert */
import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import {
  StyleSheet,
  View,
  //Text,
  BackHandler,
  TouchableHighlight,
  Image,
  StatusBar,
  Alert,
  AppState,
  Dimensions, Platform, PixelRatio
} from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
import PinClass from '../../classes/Pin';
import {Col, Row, Grid} from 'react-native-easy-grid';
import HomeClass from '../../classes/Home';
import ListViewClass from '../../classes/ListView';
import MapClass from '../../classes/Map';
import User from '../../classes/User';
import Updater from '../../classes/Updater';
import Loader from '../Common/Loader';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    fontFamily: 'malgun',
    alignItems: 'center',
    margin: 0,
    left: 0,
    right: 0,
  },
  itemContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  itemWrapperContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  itemMenuContainer: {
    width: '100%',
    height: '99.7%',
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  itemMenuSelectedContainer: {
    width: '100%',
    height: '99.7%',
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF7F27',
  },
  itemDefaultContainer: {
    width: '100%',
    height: '100%',
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202020', // CHANGE_COLOR
  },
  itemDefaultToggleContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF7F27', // CHANGE_COLOR
  },
  itemSelectedContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // CHANGE_COLOR
  },
  keys: {
    fontFamily: 'malgun',
    fontSize: normalize(100),
    color: '#797979',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  selectedMenu: {
    fontSize: normalize(100),
    color: '#FF7F27',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  menu: {
    fontSize: normalize(100),
    color: '#363538',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  value: {
    fontSize: normalize(100),
    color: '#FF7F27',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  icons: {
    width: normalize(100),
    height: normalize(80),
    resizeMode: 'cover',
  },
  icons2: {
    width: normalize(100),
    height: normalize(100),
    resizeMode: 'cover',
  },
});

let pressLen = 0;
let timer = null;

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.viewMap = this.viewMap.bind(this);
    this.viewBirdMap = this.viewBirdMap.bind(this);
    this.toggleAirSide = this.toggleAirSide.bind(this);
    this.toggleRunway = this.toggleRunway.bind(this);
    this.handler = null;
    this.stateHandler = appState => {
      if (appState === 'active') {
        props.navigation.navigate(PinClass.NAME, {
          hasPin: true,
          confirm: false,
        });
      }
    };
    this.state = {
      isLoading: false,
      data: [
        {
          selected: true,
          menu: 'Menu1',
          icon: require(`../../../assets/images/Bottom_Nav/Nav_Avian.png`),
          iconSelected: require(`../../../assets/images/Bottom_Nav/Nav_Avian_Selected.png`),
          item1: require(`../../../assets/images/Screen_Avian/Avian_Observation.png`),
          funcItem1: () => {
            props.navigation.navigate(MapClass.OBSERVATION_MAP_NAME);
          },
          item2: require(`../../../assets/images/Screen_Avian/Avian_Overflying.png`),
          funcItem2: () => {
            alert('Coming soon!');
          },
          item3: require(`../../../assets/images/Screen_Avian/Avian_Dispersal.png`),
          funcItem3: () => {
            props.navigation.navigate(MapClass.DISPERSAL_MAP_NAME);
          },
          item4: require(`../../../assets/images/Screen_Avian/Avian_Depredation.png`),
          funcItem4: this.viewBirdMap,
          item5: require(`../../../assets/images/Screen_Avian/Avian_Area_Clear.png`),
          funcItem5: this.viewMap,
          item6: require(`../../../assets/images/Screen_Avian/Avian_Radar.png`),
          funcItem6: () => {
            alert('Coming soon!');
          },
          item7: require(`../../../assets/images/Screen_Avian/Avian_Audio.png`),
          funcItem7: () => {
            props.navigation.navigate(ListViewClass.AUDIO_VIEW_NAME);
          },
          item8: require(`../../../assets/images/Screen_Avian/Avian_Remains.png`),
          funcItem8: () => {
            props.navigation.navigate(MapClass.REMAINS_MAP_NAME);
          },
        },
        {
          selected: false,
          menu: 'Menu2',
          icon: require(`../../../assets/images/Bottom_Nav/Nav_Nonavian.png`),
          iconSelected: require(`../../../assets/images/Bottom_Nav/Nav_Nonavian_Selected.png`),
          item1: require(`../../../assets/images/Screen_Nonavian/Nonavian_Observation.png`),
          funcItem1: () => {
            alert('Coming soon!');
          },
          item2: require(`../../../assets/images/Screen_Nonavian/Nonavian_Tracks.png`),
          funcItem2: () => {
            alert('Coming soon!');
          },
          item3: require(`../../../assets/images/Screen_Nonavian/Nonavian_Dispersal.png`),
          funcItem3: () => {
            alert('Coming soon!');
          },
          item4: require(`../../../assets/images/Screen_Nonavian/Nonavian_Depredation.png`),
          funcItem4: () => {
            alert('Coming soon!');
          },
          item5: require(`../../../assets/images/Screen_Nonavian/Nonavian_Map.png`),
          funcItem5: () => {
            alert('Coming soon!');
          },
          item6: require(`../../../assets/images/Screen_Nonavian/Nonavian_Entry.png`),
          funcItem6: () => {
            alert('Coming soon!');
          },
          item7: require(`../../../assets/images/Screen_Nonavian/Nonavian_Lair.png`),
          funcItem7: () => {
            alert('Coming soon!');
          },
          item8: require(`../../../assets/images/Screen_Nonavian/Nonavian_Remains.png`),
          funcItem8: () => {
            alert('Coming soon!');
          },
        },
        {
          selected: false,
          menu: 'Menu3',
          toggleAirSide: false,
          icon: require(`../../../assets/images/Bottom_Nav/Nav_Vehicle.png`),
          iconSelected: require(`../../../assets/images/Bottom_Nav/Nav_Vehicle_Selected.png`),
          iconRunway: require(`../../../assets/images/Screen_Vehicle/Vehicle_Runway.png`),
          iconSelectedRunway: require(`../../../assets/images/Screen_Vehicle/Vehicle_Runway_Toggle.png`),
          iconAirSide: require(`../../../assets/images/Screen_Vehicle/Vehicle_Airside.png`),
          iconSelectedAirSide: require(`../../../assets/images/Screen_Vehicle/Vehicle_Airside_Toggle.png`),
          item1: require(`../../../assets/images/Screen_Vehicle/Vehicle_Runway.png`),
          funcItem1: this.toggleRunway,
          item2: require(`../../../assets/images/Screen_Vehicle/Vehicle_Overwatch.png`),
          funcItem2: () => {
            alert('Coming soon!');
          },
          item3: require(`../../../assets/images/Screen_Vehicle/Vehicle_Stopped.png`),
          funcItem3: () => {
            alert('Coming soon!');
          },
          item4: require(`../../../assets/images/Screen_Vehicle/Vehicle_Airside.png`),
          funcItem4: this.toggleAirSide,
          item5: require(`../../../assets/images/Screen_Vehicle/Vehicle_Refuel.png`),
          funcItem5: () => {
            alert('Coming soon!');
          },
          item6: require(`../../../assets/images/Screen_Vehicle/Vehicle_Maintenance.png`),
          funcItem6: () => {
            alert('Coming soon!');
          },
          item7: require(`../../../assets/images/Screen_Vehicle/Vehicle_Fault.png`),
          funcItem7: () => {
            alert('Coming soon!');
          },
          item8: require(`../../../assets/images/Screen_Vehicle/Vehicle_Exchange.png`),
          funcItem8: () => {
            alert('Coming soon!');
          },
        },
        {
          selected: false,
          menu: 'Menu4',
          icon: require(`../../../assets/images/Bottom_Nav/Nav_Operator.png`),
          iconSelected: require(`../../../assets/images/Bottom_Nav/Nav_Operator_Selected.png`),
          item1: require(`../../../assets/images/Screen_Operator/Operator_Photo.png`),
          funcItem1: () => {
            alert('Coming soon!');
          },
          item2: require(`../../../assets/images/Screen_Operator/Operator_Custom_Note.png`),
          funcItem2: () => {
            alert('Coming soon!');
          },
          item3: require(`../../../assets/images/Screen_Operator/Operator_Inspection.png`),
          funcItem3: () => {
            alert('Coming soon!');
          },
          item4: require(`../../../assets/images/Screen_Operator/Operator_Security.png`),
          funcItem4: () => {
            alert('Coming soon!');
          },
          item5: require(`../../../assets/images/Screen_Operator/Operator_View_Log.png`),
          funcItem5: () => {
            alert('Coming soon!');
          },
          item6: require(`../../../assets/images/Screen_Operator/Operator_Reassignment.png`),
          funcItem6: () => {
            alert('Coming soon!');
          },
          item7: require(`../../../assets/images/Screen_Operator/Operator_Break.png`),
          funcItem7: () => {
            alert('Coming soon!');
          },
          item8: require(`../../../assets/images/Screen_Operator/Operator_End.png`),
          funcItem8: () => {
            alert('Coming soon!');
          },
        },
        {
          selected: false,
          menu: 'Menu5',
          icon: require(`../../../assets/images/Bottom_Nav/Nav_Operator.png`),
          iconSelected: require(`../../../assets/images/Bottom_Nav/Nav_User.png`),
          item1: require(`../../../assets/images/Screen_User/User_Add_Event.png`),
          funcItem1: () => {
            alert('Coming soon!');
          },
          item2: require(`../../../assets/images/Screen_User/User_Send_Message.png`),
          funcItem2: () => {
            alert('Coming soon!');
          },
          item3: require(`../../../assets/images/Screen_User/User_Announcements.png`),
          funcItem3: () => {
            alert('Coming soon!');
          },
          item4: require(`../../../assets/images/Screen_User/User_Training.png`),
          funcItem4: () => {
            alert('Coming soon!');
          },
          item5: require(`../../../assets/images/Screen_User/User_App_Settings.png`),
          funcItem5: () => {
            alert('Coming soon!');
          },
          item6: require(`../../../assets/images/Screen_User/User_App_Support.png`),
          funcItem6: () => {
            alert('Coming soon!');
          },
          item7: require(`../../../assets/images/Screen_User/User_Manual_Update.png`),
          funcItem7: () => {
            alert('Coming soon!');
          },
          item8: require(`../../../assets/images/Screen_User/User_Logout.png`),
          funcItem8: () => {
            AppState.removeEventListener('change', this.stateHandler);
            this.props.navigation.navigate(HomeClass.NAME);
            User.logout();
          },
        },
      ],
    };
    this.pressIn = this.pressIn.bind(this);
    this.pressOut = this.pressOut.bind(this);
  }
  componentDidMount() {
    AppState.addEventListener('change', this.stateHandler);
    Orientation.lockToLandscape();
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.stateHandler);
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }
  toggleRunway() {
    let data = this.state.data;
    if (!data[2].toggleAirSide) {
      if (data[2].toggleRunway) {
        data[2].toggleRunway = false;
      } else {
        data[2].toggleRunway = true;
      }
      this.setState({data});
    }
  }
  toggleAirSide() {
    let data = this.state.data;
    if (!data[2].toggleRunway) {
      if (data[2].toggleAirSide) {
        data[2].toggleAirSide = false;
      } else {
        data[2].toggleAirSide = true;
      }
      this.setState({data});
    }
  }
  viewMap() {
    //this.setState({isLoading: true},()=>{
    //  setTimeout(()=>{
    this.props.navigation.navigate(MapClass.AREA_MAP_NAME);
    //    this.setState({isLoading: false});
    //  },1);
    //});
  }
  viewBirdMap() {
    //this.setState({isLoading: true},()=>{
    //  setTimeout(()=>{
    this.props.navigation.navigate(MapClass.BIRD_MAP_NAME);
    //    this.setState({isLoading: false});
    //  },1);
    //});
  }
  selectItem(itemNo) {
    let selectedMenu = null;
    this.state.data.forEach((menus, index) => {
      if (menus.selected) selectedMenu = menus;
    });
    selectedMenu[`funcItem${itemNo}`]();
  }
  selectMenu(itemNo) {
    let oldData = this.state.data;
    oldData.forEach((menus, index) => {
      oldData[index].selected = false;
      oldData[index].style = styles.menu;
    });
    oldData[itemNo].selected = true;
    oldData[itemNo].style = styles.selectedMenu;
    this.setState({data: oldData});
  }
  pressIn() {
    timer = setInterval(() => {
      pressLen++;
    }, 50);
  }
  pressOut(item) {
    clearInterval(timer);
    if (pressLen > 5) {
      this.selectMenu(4);
    } else this.selectMenu(item);
    pressLen = 0;
  }
  render() {
    let selectedMenu = null;
    this.state.data.forEach((menus, index) => {
      if (menus.selected) selectedMenu = menus;
    });
    if (this.state.isLoading || Updater.UPDATING)
      return <Loader updating={Updater.UPDATING} />;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Grid>
          <Col>
            <Row>
              <TouchableHighlight
                style={
                  this.state.data[2].selected && this.state.data[2].toggleRunway
                    ? styles.itemMenuSelectedContainer
                    : styles.itemMenuContainer
                }
                onPress={this.selectItem.bind(this, 1)}>
                <Image style={styles.icons2} source={selectedMenu.item1} />
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPress={this.selectItem.bind(this, 5)}>
                <Image style={styles.icons2} source={selectedMenu.item5} />
              </TouchableHighlight>
            </Row>
            <Row>
              <View style={styles.itemWrapperContainer}>
                <TouchableHighlight
                  style={
                    !this.state.data[0].selected
                      ? styles.itemDefaultContainer
                      : styles.itemSelectedContainer
                  }
                  onPress={this.selectMenu.bind(this, 0)}>
                  <Image
                    style={styles.icons}
                    source={
                      !this.state.data[0].selected
                        ? this.state.data[0].icon
                        : this.state.data[0].iconSelected
                    }
                  />
                </TouchableHighlight>
              </View>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPress={this.selectItem.bind(this, 2)}>
                <Image style={styles.icons2} source={selectedMenu.item2} />
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPress={this.selectItem.bind(this, 6)}>
                <Image style={styles.icons2} source={selectedMenu.item6} />
              </TouchableHighlight>
            </Row>
            <Row>
              <View style={styles.itemWrapperContainer}>
                <TouchableHighlight
                  style={
                    !this.state.data[1].selected
                      ? styles.itemDefaultContainer
                      : styles.itemSelectedContainer
                  }
                  onPress={this.selectMenu.bind(this, 1)}>
                  <Image
                    style={styles.icons}
                    source={
                      !this.state.data[1].selected
                        ? this.state.data[1].icon
                        : this.state.data[1].iconSelected
                    }
                  />
                </TouchableHighlight>
              </View>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPress={this.selectItem.bind(this, 3)}>
                <Image style={styles.icons2} source={selectedMenu.item3} />
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPress={this.selectItem.bind(this, 7)}>
                <Image style={styles.icons2} source={selectedMenu.item7} />
              </TouchableHighlight>
            </Row>
            <Row>
              <View style={styles.itemWrapperContainer}>
                <TouchableHighlight
                  style={
                    !this.state.data[2].selected
                      ? this.state.data[2].toggleRunway ||
                        this.state.data[2].toggleAirSide
                        ? styles.itemDefaultToggleContainer
                        : styles.itemDefaultContainer
                      : styles.itemSelectedContainer
                  }
                  onPress={this.selectMenu.bind(this, 2)}>
                  <>
                    <Image
                      style={styles.icons}
                      source={
                        !this.state.data[2].selected
                          ? this.state.data[2].icon
                          : this.state.data[2].iconSelected
                      }
                    />
                    {this.state.data[2].toggleRunway ? (
                      <Image
                        style={styles.icons}
                        source={
                          !this.state.data[2].selected
                            ? this.state.data[2].iconRunway
                            : this.state.data[2].iconSelectedRunway
                        }
                      />
                    ) : null}
                    {this.state.data[2].toggleAirSide ? (
                      <Image
                        style={styles.icons}
                        source={
                          !this.state.data[2].selected
                            ? this.state.data[2].iconAirSide
                            : this.state.data[2].iconSelectedAirSide
                        }
                      />
                    ) : null}
                  </>
                </TouchableHighlight>
              </View>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={
                  this.state.data[2].selected &&
                  this.state.data[2].toggleAirSide
                    ? styles.itemMenuSelectedContainer
                    : styles.itemMenuContainer
                }
                onPress={this.selectItem.bind(this, 4)}>
                <Image style={styles.icons2} source={selectedMenu.item4} />
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPress={this.selectItem.bind(this, 8)}>
                <Image style={styles.icons2} source={selectedMenu.item8} />
              </TouchableHighlight>
            </Row>
            <Row>
              <View style={styles.itemWrapperContainer}>
                {this.state.data[4].selected ? (
                  <TouchableHighlight
                    style={
                      !this.state.data[4].selected
                        ? styles.itemDefaultContainer
                        : styles.itemSelectedContainer
                    }
                    onLongPress={() => {
                      this.selectMenu(4);
                      pressLen = 0;
                    }}
                    onPress={() => {
                      this.selectMenu(3);
                    }}>
                    <Image
                      style={styles.icons}
                      source={
                        !this.state.data[4].selected
                          ? this.state.data[4].icon
                          : this.state.data[4].iconSelected
                      }
                    />
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight
                    style={
                      !this.state.data[3].selected
                        ? styles.itemDefaultContainer
                        : styles.itemSelectedContainer
                    }
                    onLongPress={() => {
                      this.selectMenu(4);
                      pressLen = 0;
                    }}
                    onPress={() => {
                      this.selectMenu(3);
                    }}>
                    <Image
                      style={styles.icons}
                      source={
                        !this.state.data[3].selected
                          ? this.state.data[3].icon
                          : this.state.data[3].iconSelected
                      }
                    />
                  </TouchableHighlight>
                )}
              </View>
            </Row>
          </Col>
        </Grid>
      </View>
    );
  }
}
