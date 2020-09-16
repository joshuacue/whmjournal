import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import FontAwesome, {parseIconFromClassName} from 'react-native-fontawesome';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  Alert,
  BackHandler,
  AppState,Dimensions, Platform, PixelRatio
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
import FlashMessage, {showMessage} from 'react-native-flash-message';

import MenuClass from '../../classes/Menu';
import ListViewClass from '../../classes/ListView';
import DialerClass from '../../classes/Dialer';
import MapClass from '../../classes/Map';
import ActionClass from '../../classes/Action';
import Bird from '../../classes/Bird';
import User from '../../classes/User';
import CustomImage from '../Common/CustomImage';

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
    backgroundColor: '#000',
  },
  itemNavWrapperContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    flex: 1,
    flexDirection: 'row',
  },
  itemMenuContainer: {
    width: '100%',
    height: '99.7%',
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  itemNavContainer: {
    width: '33.3%',
    height: '99.7%',
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  itemEmptyContainer: {
    width: '100%',
    height: '0%',
    backgroundColor: '#000',
  },
  itemImageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  itemTextContainer: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  keys: {
    fontFamily: 'malgun',
    fontSize: normalize(30),
    color: '#797979',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  disabledKeys: {
    fontSize: normalize(30),
    color: '#434343',
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
  itemText: {
    fontSize: normalize(15),
    color: '#fff',
  },itemText2: {
    fontSize: normalize(10),
    color: '#fff',
  },
  icons: {
    width: 360,
    height: 300,
    resizeMode: 'stretch',
  },
});
let pressLen = 0;
let timer = null;

export default class RemainsListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navIndex: 0,
      data: Bird.getData(),
    };
    this.goBack = this.goBack.bind(this);
    this.navLeft = this.navLeft.bind(this);
    this.navRight = this.navRight.bind(this);
    this.selectLetter = this.selectLetter.bind(this);
    this.pressIn = this.pressIn.bind(this);
    this.pressOut = this.pressOut.bind(this);
    this.pressIn2 = this.pressIn2.bind(this);
    this.pressOut2 = this.pressOut2.bind(this);
    this.goFavorites = this.goFavorites.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
  }
  componentDidMount() {
    // AppState.addEventListener('change', (appState)=>{
    //   if (appState === 'active') {
    //     this.props.navigation.navigate(PinClass.NAME, {
    //       hasPin: true,
    //       confirm: false,
    //     });
    //   }
    // });
    Orientation.lockToLandscape();
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    this.props.navigation.navigate(ActionClass.REMAINS_BEHAVIOR_NAME);
    return true;
  }
  goBack() {
    this.props.navigation.navigate(ActionClass.REMAINS_BEHAVIOR_NAME);
  }
  goFavorites() {
    this.props.navigation.navigate(ListViewClass.REMAINS_FAVORITE_VIEW_NAME);
  }
  selectLetter() {
    this.props.navigation.navigate(ListViewClass.REMAINS_LETTER_NAME);
  }
  navLeft() {
    let navIndex = this.state.navIndex;
    if (navIndex > 0) {
      navIndex--;
      this.setState({navIndex});
    }
  }
  navRight() {
    let navIndex = this.state.navIndex;
    if (this.state.data.length > 8 * (navIndex + 1)) {
      navIndex++;
      this.setState({navIndex});
    }
  }
  pressIn() {
    timer = setInterval(() => {
      pressLen++;
    }, 50);
  }
  pressOut(item) {
    clearInterval(timer);
    if (pressLen > 6) {
      // if(item.length > 0){
      //     if(!User.isFavorite(item)){
      //         User.saveFavorites(item, ()=>{
      //             showMessage({
      //                 message: "Item is marked as favorite!",
      //                 type: "info",
      //             });
      //         }, ()=>{
      //             Alert.alert('Favorites', 'Something is wrong!');
      //         });
      //     } else {
      //         User.saveFavorites(item, ()=>{
      //             showMessage({
      //                 message: "Item unmarked as favorite!",
      //                 type: "info",
      //             });
      //         }, ()=>{
      //             Alert.alert('Favorites', 'Something is wrong!');
      //         });
      //     }
      // }
      this.props.navigation.navigate(DialerClass.REMAINS_NAME);
    } else {
      //User.setRecord(Bird.BIRD_RECORD,item); TODO record remains
      this.props.navigation.navigate(DialerClass.REMAINS_NAME);
    }
    pressLen = 0;
  }
  pressIn2() {
    timer = setInterval(() => {
      pressLen++;
    }, 100);
  }
  pressOut2() {
    clearInterval(timer);
    if (pressLen > 6) {
      this.props.navigation.navigate(MenuClass.NAME);
    } else {
      this.props.navigation.navigate(ActionClass.REMAINS_BEHAVIOR_NAME);
    }
    pressLen = 0;
  }
  getSelectedData() {
    let selectedData = [];
    for (let i = 0; i < 8; i++)
      selectedData.push(
        this.state.data[8 * (this.state.navIndex + 1) - (8 - i)],
      );
    return selectedData;
  }
  render() {
    let selectedData = this.getSelectedData();
    let hasNext = this.state.data.length > 8 * (this.state.navIndex + 1);
    return (
      <View style={styles.container}>
        <Grid>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPressIn={this.pressIn}
                onPressOut={this.pressOut.bind(this, selectedData[0].text)}>
                <>
                  <View style={styles.itemEmptyContainer} />
                  <View style={styles.itemImageContainer}>
                    <CustomImage
                      style={styles.icons}
                      source={selectedData[0].image}
                    />
                  </View>
                  <View style={styles.itemTextContainer}>
                    <Text style={selectedData[0].text.length > 10 ? styles.itemText2 : styles.itemText}>{selectedData[0].text}</Text>
                  </View>
                </>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPressIn={this.pressIn}
                onPressOut={this.pressOut.bind(this, selectedData[4].text)}>
                <>
                  <View style={styles.itemEmptyContainer} />
                  <View style={styles.itemImageContainer}>
                    <CustomImage
                      style={styles.icons}
                      source={selectedData[4].image}
                    />
                  </View>
                  <View style={styles.itemTextContainer}>
                    <Text style={selectedData[4].text.length > 10 ? styles.itemText2 : styles.itemText}>{selectedData[4].text}</Text>
                  </View>
                </>
              </TouchableHighlight>
            </Row>
            <Row>
              <View style={styles.itemWrapperContainer}>
                <TouchableHighlight
                  style={styles.itemMenuContainer}
                  onPress={this.navLeft}>
                  <Text
                    style={{
                      ...(this.state.navIndex
                        ? styles.keys
                        : styles.disabledKeys),
                      textAlign: 'center',
                    }}
                    icon={parseIconFromClassName('fa fa-arrow-left')}>
                    PREV
                  </Text>
                </TouchableHighlight>
                {/* <TouchableHighlight style={styles.itemNavContainer} onPress={this.goFavorites}>
                                    <FontAwesome style={styles.disabledKeys} icon={parseIconFromClassName('fa fa-heart')} />
                                </TouchableHighlight> */}
                {/* <TouchableHighlight style={styles.itemNavContainer} onPress={this.navRight}>
                                    <FontAwesome 
                                        style={ {...hasNext?styles.keys: styles.disabledKeys, textAlign: 'left'} } 
                                        icon={parseIconFromClassName('fa fa-arrow-right')} />
                                </TouchableHighlight> */}
              </View>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPressIn={this.pressIn}
                onPressOut={this.pressOut.bind(this, selectedData[1].text)}>
                <>
                  <View style={styles.itemEmptyContainer} />
                  <View style={styles.itemImageContainer}>
                    <CustomImage
                      style={styles.icons}
                      source={selectedData[1].image}
                    />
                  </View>
                  <View style={styles.itemTextContainer}>
                    <Text style={selectedData[1].text.length > 10 ? styles.itemText2 : styles.itemText}>{selectedData[1].text}</Text>
                  </View>
                </>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPressIn={this.pressIn}
                onPressOut={this.pressOut.bind(this, selectedData[5].text)}>
                <>
                  <View style={styles.itemEmptyContainer} />
                  <View style={styles.itemImageContainer}>
                    <CustomImage
                      style={styles.icons}
                      source={selectedData[5].image}
                    />
                  </View>
                  <View style={styles.itemTextContainer}>
                    <Text style={selectedData[5].text.length > 10 ? styles.itemText2 : styles.itemText}>{selectedData[5].text}</Text>
                  </View>
                </>
              </TouchableHighlight>
            </Row>
            <Row>
              <View style={styles.itemWrapperContainer}>
                <TouchableHighlight
                  style={styles.itemMenuContainer}
                  onPress={this.navRight}>
                  <Text
                    style={{
                      ...(hasNext ? styles.keys : styles.disabledKeys),
                      textAlign: 'center',
                    }}
                    icon={parseIconFromClassName('fa fa-arrow-right')}>
                    NEXT
                  </Text>
                </TouchableHighlight>
              </View>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPressIn={this.pressIn}
                onPressOut={this.pressOut.bind(this, selectedData[2].text)}>
                <>
                  <View style={styles.itemEmptyContainer} />
                  <View style={styles.itemImageContainer}>
                    <CustomImage
                      style={styles.icons}
                      source={selectedData[2].image}
                    />
                  </View>
                  <View style={styles.itemTextContainer}>
                    <Text style={selectedData[2].text.length > 10 ? styles.itemText2 : styles.itemText}>{selectedData[2].text}</Text>
                  </View>
                </>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPressIn={this.pressIn}
                onPressOut={this.pressOut.bind(this, selectedData[6].text)}>
                <>
                  <View style={styles.itemEmptyContainer} />
                  <View style={styles.itemImageContainer}>
                    <CustomImage
                      style={styles.icons}
                      source={selectedData[6].image}
                    />
                  </View>
                  <View style={styles.itemTextContainer}>
                    <Text style={selectedData[6].text.length > 10 ? styles.itemText2 : styles.itemText}>{selectedData[6].text}</Text>
                  </View>
                </>
              </TouchableHighlight>
            </Row>
            <Row>
              <View style={styles.itemWrapperContainer}>
                <TouchableHighlight
                  style={styles.itemMenuContainer}
                  onPress={this.selectLetter}>
                  <Text style={styles.keys}>A-Z</Text>
                </TouchableHighlight>
              </View>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPressIn={this.pressIn}
                onPressOut={this.pressOut.bind(this, selectedData[3].text)}>
                <>
                  <View style={styles.itemEmptyContainer} />
                  <View style={styles.itemImageContainer}>
                    <CustomImage
                      style={styles.icons}
                      source={selectedData[3].image}
                    />
                  </View>
                  <View style={styles.itemTextContainer}>
                    <Text style={selectedData[3].text.length > 10 ? styles.itemText2 : styles.itemText}>{selectedData[3].text}</Text>
                  </View>
                </>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPressIn={this.pressIn}
                onPressOut={this.pressOut.bind(this, selectedData[7].text)}>
                <>
                  <View style={styles.itemEmptyContainer} />
                  <View style={styles.itemImageContainer}>
                    <CustomImage
                      style={styles.icons}
                      source={selectedData[7].image}
                    />
                  </View>
                  <View style={styles.itemTextContainer}>
                    <Text style={selectedData[7].text.length > 10 ? styles.itemText2 : styles.itemText}>{selectedData[7].text}</Text>
                  </View>
                </>
              </TouchableHighlight>
            </Row>
            <Row>
              <View style={styles.itemWrapperContainer}>
                <TouchableHighlight
                  style={{
                    ...styles.itemMenuContainer,
                    backgroundColor: '#151515',
                  }}
                  onLongPress={() => {
                    this.props.navigation.navigate(MenuClass.NAME);
                  }}
                  onPress={() => {
                    this.props.navigation.navigate(
                      ActionClass.REMAINS_BEHAVIOR_NAME,
                    );
                  }}>
                  <FontAwesome
                    style={styles.keys}
                    icon={parseIconFromClassName('fa fa-backward')}
                  />
                </TouchableHighlight>
              </View>
            </Row>
          </Col>
        </Grid>
        <FlashMessage position="top" />
      </View>
    );
  }
}