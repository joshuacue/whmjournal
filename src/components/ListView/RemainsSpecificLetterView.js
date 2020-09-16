import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import FontAwesome, {parseIconFromClassName} from 'react-native-fontawesome';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  BackHandler,
  AppState,
} from 'react-native';
import PinClass from '../../classes/Pin';
import {Col, Row, Grid} from 'react-native-easy-grid';

import ListViewClass from '../../classes/ListView';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: '100%', //'99.4%',
    height: '100%', //'99.7%',
    fontFamily: 'malgun',
    alignItems: 'center',
    margin: 0, //1,
    left: 0, //1,
    right: 0, //1
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
    backgroundColor: '#000', //#fff
  },
  itemNavWrapperContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
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
    height: '15%',
    backgroundColor: '#333333',
  },
  itemImageContainer: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  itemTextContainer: {
    width: '100%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keys: {
    fontFamily: 'malgun',
    fontSize: 100,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
  darkKeys: {
    fontSize: 100,
    color: '#797979',
    fontWeight: '600',
    textAlign: 'center',
    width: '100%',
  },
});

export default class RemainsSpecificLetterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batch: 0,
      letters: [
        [
          {
            letter: 'A',
            func: () => {
              ListViewClass.setLetter('A', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'B',
            func: () => {
              ListViewClass.setLetter('B', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'C',
            func: () => {
              ListViewClass.setLetter('C', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'D',
            func: () => {
              ListViewClass.setLetter('D', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'E',
            func: () => {
              ListViewClass.setLetter('E', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'F',
            func: () => {
              ListViewClass.setLetter('F', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'G',
            func: () => {
              ListViewClass.setLetter('G', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'H',
            func: () => {
              ListViewClass.setLetter('H', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'I',
            func: () => {
              ListViewClass.setLetter('I', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'J-R',
            func: () => {
              this.setState({batch: 1});
            },
          },
          {
            letter: 'S-Z',
            func: () => {
              this.setState({batch: 2});
            },
          },
        ],
        [
          {
            letter: 'J',
            func: () => {
              ListViewClass.setLetter('J', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'K',
            func: () => {
              ListViewClass.setLetter('K', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'L',
            func: () => {
              ListViewClass.setLetter('L', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'M',
            func: () => {
              ListViewClass.setLetter('M', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'N',
            func: () => {
              ListViewClass.setLetter('N', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'O',
            func: () => {
              ListViewClass.setLetter('O', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'P',
            func: () => {
              ListViewClass.setLetter('P', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'Q',
            func: () => {
              ListViewClass.setLetter('Q', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'R',
            func: () => {
              ListViewClass.setLetter('R', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'A-I',
            func: () => {
              this.setState({batch: 0});
            },
          },
          {
            letter: 'S-Z',
            func: () => {
              this.setState({batch: 2});
            },
          },
        ],
        [
          {
            letter: 'S',
            func: () => {
              ListViewClass.setLetter('S', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'T',
            func: () => {
              ListViewClass.setLetter('T', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'U',
            func: () => {
              ListViewClass.setLetter('U', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'V',
            func: () => {
              ListViewClass.setLetter('V', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'W',
            func: () => {
              ListViewClass.setLetter('W', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'X',
            func: () => {
              ListViewClass.setLetter('X', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'Y',
            func: () => {
              ListViewClass.setLetter('Y', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: 'Z',
            func: () => {
              ListViewClass.setLetter('Z', () => {
                this.props.navigation.navigate(
                  ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME,
                );
              });
            },
          },
          {
            letter: '',
            func: null,
          },
          {
            letter: 'A-I',
            func: () => {
              this.setState({batch: 0});
            },
          },
          {
            letter: 'J-R',
            func: () => {
              this.setState({batch: 1});
            },
          },
        ],
      ],
    };
    this.goBack = this.goBack.bind(this);
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
    this.props.navigation.navigate(ListViewClass.REMAINS_SPECIFIC_VIEW_NAME);
    return true;
  }
  goBack() {
    this.props.navigation.navigate(ListViewClass.REMAINS_SPECIFIC_VIEW_NAME);
  }
  render() {
    let index = this.state.batch;
    return (
      <View style={styles.container}>
        <Grid>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPress={this.state.letters[index][0].func}>
                <Text style={styles.keys}>
                  {this.state.letters[index][0].letter}
                </Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPress={this.state.letters[index][4].func}>
                <Text style={styles.keys}>
                  {this.state.letters[index][4].letter}
                </Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <View style={styles.itemWrapperContainer}>
                <TouchableHighlight
                  style={styles.itemMenuContainer}
                  onPress={this.state.letters[index][8].func}>
                  <Text style={styles.keys}>
                    {this.state.letters[index][8].letter}
                  </Text>
                </TouchableHighlight>
              </View>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPress={this.state.letters[index][1].func}>
                <Text style={styles.keys}>
                  {this.state.letters[index][1].letter}
                </Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPress={this.state.letters[index][5].func}>
                <Text style={styles.keys}>
                  {this.state.letters[index][5].letter}
                </Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <View style={styles.itemWrapperContainer}>
                <TouchableHighlight
                  style={styles.itemMenuContainer}
                  onPress={this.state.letters[index][9].func}>
                  <Text style={styles.darkKeys}>
                    {this.state.letters[index][9].letter}
                  </Text>
                </TouchableHighlight>
              </View>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPress={this.state.letters[index][2].func}>
                <Text style={styles.keys}>
                  {this.state.letters[index][2].letter}
                </Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPress={this.state.letters[index][6].func}>
                <Text style={styles.keys}>
                  {this.state.letters[index][6].letter}
                </Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <View style={styles.itemWrapperContainer}>
                <TouchableHighlight
                  style={styles.itemMenuContainer}
                  onPress={this.state.letters[index][10].func}>
                  <Text style={styles.darkKeys}>
                    {this.state.letters[index][10].letter}
                  </Text>
                </TouchableHighlight>
              </View>
            </Row>
          </Col>
          <Col>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPress={this.state.letters[index][3].func}>
                <Text style={styles.keys}>
                  {this.state.letters[index][3].letter}
                </Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <TouchableHighlight
                style={styles.itemMenuContainer}
                onPress={this.state.letters[index][7].func}>
                <Text style={styles.keys}>
                  {this.state.letters[index][7].letter}
                </Text>
              </TouchableHighlight>
            </Row>
            <Row>
              <View style={styles.itemWrapperContainer}>
                <TouchableHighlight
                  style={styles.itemMenuContainer}
                  onPress={this.goBack}>
                  <FontAwesome
                    style={styles.darkKeys}
                    icon={parseIconFromClassName('fa fa-times')}
                  />
                </TouchableHighlight>
              </View>
            </Row>
          </Col>
        </Grid>
      </View>
    );
  }
}
