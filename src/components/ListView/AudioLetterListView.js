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
  AppState,
} from 'react-native';
import PinClass from '../../classes/Pin';
import {Col, Row, Grid} from 'react-native-easy-grid';
import FlashMessage, {showMessage} from 'react-native-flash-message';

import User from '../../classes/User';
import ListViewClass from '../../classes/ListView';
import DialerClass from '../../classes/Dialer';
import ActionClass from '../../classes/Action';
import Audio from '../../classes/Audio';

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
    height: '100%',
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  itemNavContainer: {
    width: '33.3%',
    height: '100%',
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  itemEmptyContainer: {
    width: '100%',
    height: '0%',
    backgroundColor: '#333333',
  },
  itemImageContainer: {
    width: '100%',
    height: '0%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    display: 'none',
  },
  itemTextContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keys: {
    fontFamily: 'malgun',
    fontSize: 100,
    color: '#797979',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  disabledKeys: {
    fontSize: 100,
    color: '#434343',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  selectedMenu: {
    fontSize: 100,
    color: '#FF7F27',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  menu: {
    fontSize: 100,
    color: '#363538',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  itemText: {
    fontSize: 40,
    color: '#fff',
  },
  icons: {
    width: 400,
    height: 400,
    resizeMode: 'center',
  },
});
let pressLen = 0;
let timer = null;

export default class AudioLetterListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navIndex: 0,
      data: Audio.getData(ListViewClass.LETTER),
    };
    this.goBack = this.goBack.bind(this);
    this.navLeft = this.navLeft.bind(this);
    this.navRight = this.navRight.bind(this);
    this.selectLetter = this.selectLetter.bind(this);
    this.pressIn = this.pressIn.bind(this);
    this.pressOut = this.pressOut.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
  }
  componentDidMount() {
    AppState.addEventListener('change', appState => {
      if (appState === 'active') {
        this.props.navigation.navigate(PinClass.NAME, {
          hasPin: true,
          confirm: false,
        });
      }
    });
    Orientation.lockToLandscape();
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    this.props.navigation.navigate(ListViewClass.AUDIO_VIEW_NAME);
    return true;
  }
  goBack() {
    this.props.navigation.navigate(ListViewClass.AUDIO_VIEW_NAME);
  }
  selectLetter() {
    this.props.navigation.navigate(ListViewClass.AUDIO_LETTER_NAME);
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
      this.props.navigation.navigate(ActionClass.AUDIO_PLAY_NAME);
    } else {
      //User.setRecord(Bird.BIRD_RECORD,item); TODO record audio
      this.props.navigation.navigate(ActionClass.AUDIO_PLAY_NAME);
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
                    <Text style={styles.itemText}>{selectedData[0].text}</Text>
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
                    <Text style={styles.itemText}>{selectedData[4].text}</Text>
                  </View>
                </>
              </TouchableHighlight>
            </Row>
            <Row style={{width: '202%'}}>
              <View style={styles.itemNavWrapperContainer}>
                <TouchableHighlight
                  style={styles.itemNavContainer}
                  onPress={this.navLeft}>
                  <FontAwesome
                    style={{
                      ...(this.state.navIndex
                        ? styles.keys
                        : styles.disabledKeys),
                      textAlign: 'right',
                    }}
                    icon={parseIconFromClassName('fa fa-arrow-left')}
                  />
                </TouchableHighlight>
                <TouchableHighlight style={styles.itemNavContainer}>
                  <Text style={styles.keys}>{ListViewClass.LETTER}</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.itemNavContainer}
                  onPress={this.navRight}>
                  <FontAwesome
                    style={{
                      ...(hasNext ? styles.keys : styles.disabledKeys),
                      textAlign: 'left',
                    }}
                    icon={parseIconFromClassName('fa fa-arrow-right')}
                  />
                </TouchableHighlight>
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
                    <Text style={styles.itemText}>{selectedData[1].text}</Text>
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
                    <Text style={styles.itemText}>{selectedData[5].text}</Text>
                  </View>
                </>
              </TouchableHighlight>
            </Row>
            <Row />
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
                    <Text style={styles.itemText}>{selectedData[2].text}</Text>
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
                    <Text style={styles.itemText}>{selectedData[6].text}</Text>
                  </View>
                </>
              </TouchableHighlight>
            </Row>
            <Row>
              <View style={styles.itemWrapperContainer}>
                <TouchableHighlight
                  style={styles.itemMenuContainer}
                  onPress={this.selectLetter}>
                  <FontAwesome
                    style={styles.keys}
                    icon={parseIconFromClassName('fa fa-search')}
                  />
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
                    <Text style={styles.itemText}>{selectedData[3].text}</Text>
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
                    <Text style={styles.itemText}>{selectedData[7].text}</Text>
                  </View>
                </>
              </TouchableHighlight>
            </Row>
            <Row>
              <View style={styles.itemWrapperContainer}>
                <TouchableHighlight
                  style={styles.itemMenuContainer}
                  onPress={this.goBack}>
                  <FontAwesome
                    style={styles.keys}
                    icon={parseIconFromClassName('fa fa-times')}
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
