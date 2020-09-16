console.disableYellowBox = true;
import Navigator from './classes/Navigator';

//---- Main Components
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Pin from './components/Pin/Pin';
import Menu from './components/Menu/Menu';

//---- Sub Components
import ListView from './components/ListView/ListView';
import LetterView from './components/ListView/LetterView';
import ListLetterView from './components/ListView/ListLetterView';
import ListFavoriteView from './components/ListView/ListFavoriteView';
import DepredationListView from './components/ListView/DepredationListView';
import DepredationLetterView from './components/ListView/DepredationLetterView';
import DepredationLetterListView from './components/ListView/DepredationLetterListView';
import DepredationListFavoriteView from './components/ListView/DepredationListFavoriteView';
import ObservationListView from './components/ListView/ObservationListView';
import ObservationLetterView from './components/ListView/ObservationLetterView';
import ObservationLetterListView from './components/ListView/ObservationLetterListView';
import ObservationListFavoriteView from './components/ListView/ObservationListFavoriteView';
import DispersalListView from './components/ListView/DispersalListView';
import DispersalLetterView from './components/ListView/DispersalLetterView';
import DispersalLetterListView from './components/ListView/DispersalLetterListView';
import DispersalListFavoriteView from './components/ListView/DispersalListFavoriteView';
import RemainsListView from './components/ListView/RemainsListView';
import RemainsLetterView from './components/ListView/RemainsLetterView';
import RemainsLetterListView from './components/ListView/RemainsLetterListView';
import RemainsListFavoriteView from './components/ListView/RemainsListFavoriteView';
import RemainsSpecificListView from './components/ListView/RemainsSpecificListView';
import RemainsSpecificLetterView from './components/ListView/RemainsSpecificLetterView';
import RemainsSpecificLetterListView from './components/ListView/RemainsSpecificLetterListView';
import RemainsSpecificListFavoriteView from './components/ListView/RemainsSpecificListFavoriteView';
import AudioListView from './components/ListView/AudioListView';
import AudioLetterView from './components/ListView/AudioLetterView';
import AudioLetterListView from './components/ListView/AudioLetterListView';
import AudioListFavoriteView from './components/ListView/AudioListFavoriteView';
import AudioBirdListView from './components/ListView/AudioBirdListView';
import AudioBirdLetterView from './components/ListView/AudioBirdLetterView';
import AudioBirdLetterListView from './components/ListView/AudioBirdLetterListView';
import AudioBirdListFavoriteView from './components/ListView/AudioBirdListFavoriteView';
import Dialer from './components/Dialer/Dialer';
import DepredationCount from './components/Dialer/DepredationCount';
import DepredationTimestamp from './components/Dialer/DepredationTimestamp';
import DepredationBehaviorCount from './components/Dialer/DepredationBehaviorCount';
import DepredationSubBehaviorCount from './components/Dialer/DepredationSubBehaviorCount';
import ObservationCount from './components/Dialer/ObservationCount';
import ObservationTimestamp from './components/Dialer/ObservationTimestamp';
import DispersalCount from './components/Dialer/DispersalCount';
import DispersalActionCount from './components/Dialer/DispersalActionCount';
import DispersalTimestamp from './components/Dialer/DispersalTimestamp';
import RemainsCount from './components/Dialer/RemainsCount';
import RemainsTimestamp from './components/Dialer/RemainsTimestamp';
import RemainsSpecificCount from './components/Dialer/RemainsSpecificCount';
import RemainsSpecificTimestamp from './components/Dialer/RemainsSpecificTimestamp';
import AudioCount from './components/Dialer/AudioCount';
import AudioActionCount from './components/Dialer/AudioActionCount';
import DepredationAction from './components/Action/DepredationAction';
import DepredationBehaviorAction from './components/Action/DepredationBehaviorAction';
import ObservationAction from './components/Action/ObservationAction';
import ObservationBehaviorAction from './components/Action/ObservationBehaviorAction';
import DispersalAction from './components/Action/DispersalAction';
import DispersalBehaviorAction from './components/Action/DispersalBehaviorAction';
import DispersalSubBehaviorAction from './components/Action/DispersalSubBehaviorAction';
import DepredationSubBehaviorAction from './components/Action/DepredationSubBehaviorAction';
import DepredationLoafingAction from './components/Action/DepredationLoafingAction';
import DispersalMenuAction from './components/Action/DispersalMenuAction';
import AirfieldAction from './components/Action/AirfieldAction';
import DispersalAirfieldAction from './components/Action/DispersalAirfieldAction';
import LocationAction from './components/Action/LocationAction';
import DispersalLocationAction from './components/Action/DispersalLocationAction';
import ObservationLocationAction from './components/Action/ObservationLocationAction';
import RelocationAction from './components/Map/RelocationMap';
import DispersalRelocationAction from './components/Map/DispersalRelocationMap';
import RemainsAction from './components/Action/RemainsAction';
import RemainsBehaviorAction from './components/Action/RemainsBehaviorAction';
import RemainsSubBehaviorAction from './components/Action/RemainsSubBehaviorAction';
import RemainsSpecificAction from './components/Action/RemainsSpecificAction';
import RemainsSpecificBehaviorAction from './components/Action/RemainsSpecificBehaviorAction';
import AudioAction from './components/Action/AudioAction';
import AudioBehaviorAction from './components/Action/AudioBehaviorAction';
import AudioSubBehaviorAction from './components/Action/AudioSubBehaviorAction';
import AudioLocationAction from './components/Action/AudioLocationAction';
import AudioRelocationAction from './components/Map/AudioRelocationMap';
import AudioAirfieldAction from './components/Action/AudioAirfieldAction';
import AudioPlayAction from './components/Action/AudioPlayAction';
import Timestamp from './components/Dialer/Timestamp';
import Map from './components/Map/Map';
import BirdMap from './components/Map/BirdMap';
import ObservationMap from './components/Map/ObservationMap';
import DispersalMap from './components/Map/DispersalMap';
import RemainsMap from './components/Map/RemainsMap';
import AreaMap from './components/Map/AreaMap';
import AreaClear from './components/Map/AreaClear';
import DepredationClear from './components/Map/DepredationClear';
import ObservationClear from './components/Map/ObservationClear';
import DispersalClear from './components/Map/DispersalClear';
import RemainsClear from './components/Map/RemainsClear';
import RemainsSpecificClear from './components/Map/RemainsSpecificClear';
import AudioMap from './components/Map/AudioMap';
import AudioClear from './components/Map/AudioClear';
import Timer from './components/Timer/Timer';
import DepredationTimer from './components/Timer/DepredationTimer';
import ObservationTimer from './components/Timer/ObservationTimer';
import DispersalTimer from './components/Timer/DispersalTimer';
import RemainsTimer from './components/Timer/RemainsTimer';
import RemainsSpecificTimer from './components/Timer/RemainsSpecificTimer';

//---- Classes
import HomeClass from './classes/Home';
import LoginClass from './classes/Login';
import PinClass from './classes/Pin';
import MenuClass from './classes/Menu';
import ListViewClass from './classes/ListView';
import DialerClass from './classes/Dialer';
import ActionClass from './classes/Action';
import MapClass from './classes/Map';
import TimerClass from './classes/Timer';
import API from './classes/API';

let navigationOptions = {};
navigationOptions[HomeClass.NAME] = {screen: Home};
navigationOptions[LoginClass.NAME] = {screen: Login};
navigationOptions[PinClass.NAME] = {screen: Pin};
navigationOptions[MenuClass.NAME] = {screen: Menu};
navigationOptions[ListViewClass.NAME] = {screen: ListView};
navigationOptions[ListViewClass.LETTER_NAME] = {screen: LetterView};
navigationOptions[ListViewClass.LETTER_VIEW_NAME] = {screen: ListLetterView};
navigationOptions[ListViewClass.FAVORITE_VIEW_NAME] = {
  screen: ListFavoriteView,
};
navigationOptions[ListViewClass.DEPREDATION_VIEW_NAME] = {
  screen: DepredationListView,
};
navigationOptions[ListViewClass.DEPREDATION_LETTER_NAME] = {
  screen: DepredationLetterView,
};
navigationOptions[ListViewClass.DEPREDATION_LETTER_VIEW_NAME] = {
  screen: DepredationLetterListView,
};
navigationOptions[ListViewClass.DEPREDATION_FAVORITE_VIEW_NAME] = {
  screen: DepredationListFavoriteView,
};
navigationOptions[ListViewClass.OBSERVATION_VIEW_NAME] = {
  screen: ObservationListView,
};
navigationOptions[ListViewClass.OBSERVATION_LETTER_NAME] = {
  screen: ObservationLetterView,
};
navigationOptions[ListViewClass.OBSERVATION_LETTER_VIEW_NAME] = {
  screen: ObservationLetterListView,
};
navigationOptions[ListViewClass.OBSERVATION_FAVORITE_VIEW_NAME] = {
  screen: ObservationListFavoriteView,
};
navigationOptions[ListViewClass.DISPERSAL_VIEW_NAME] = {
  screen: DispersalListView,
};
navigationOptions[ListViewClass.DISPERSAL_LETTER_NAME] = {
  screen: DispersalLetterView,
};
navigationOptions[ListViewClass.DISPERSAL_LETTER_VIEW_NAME] = {
  screen: DispersalLetterListView,
};
navigationOptions[ListViewClass.DISPERSAL_FAVORITE_VIEW_NAME] = {
  screen: DispersalListFavoriteView,
};
navigationOptions[ListViewClass.REMAINS_VIEW_NAME] = {screen: RemainsListView};
navigationOptions[ListViewClass.REMAINS_LETTER_NAME] = {
  screen: RemainsLetterView,
};
navigationOptions[ListViewClass.REMAINS_LETTER_VIEW_NAME] = {
  screen: RemainsLetterListView,
};
navigationOptions[ListViewClass.REMAINS_FAVORITE_VIEW_NAME] = {
  screen: RemainsListFavoriteView,
};
navigationOptions[ListViewClass.REMAINS_SPECIFIC_VIEW_NAME] = {
  screen: RemainsSpecificListView,
};
navigationOptions[ListViewClass.REMAINS_SPECIFIC_LETTER_NAME] = {
  screen: RemainsSpecificLetterView,
};
navigationOptions[ListViewClass.REMAINS_SPECIFIC_LETTER_VIEW_NAME] = {
  screen: RemainsSpecificLetterListView,
};
navigationOptions[ListViewClass.REMAINS_SPECIFIC_FAVORITE_VIEW_NAME] = {
  screen: RemainsSpecificListFavoriteView,
};
navigationOptions[ListViewClass.AUDIO_VIEW_NAME] = {screen: AudioListView};
navigationOptions[ListViewClass.AUDIO_LETTER_NAME] = {screen: AudioLetterView};
navigationOptions[ListViewClass.AUDIO_LETTER_VIEW_NAME] = {
  screen: AudioLetterListView,
};
navigationOptions[ListViewClass.AUDIO_FAVORITE_VIEW_NAME] = {
  screen: AudioListFavoriteView,
};
navigationOptions[ListViewClass.AUDIO_BIRD_VIEW_NAME] = {
  screen: AudioBirdListView,
};
navigationOptions[ListViewClass.AUDIO_BIRD_LETTER_NAME] = {
  screen: AudioBirdLetterView,
};
navigationOptions[ListViewClass.AUDIO_BIRD_LETTER_VIEW_NAME] = {
  screen: AudioBirdLetterListView,
};
navigationOptions[ListViewClass.AUDIO_BIRD_FAVORITE_VIEW_NAME] = {
  screen: AudioBirdListFavoriteView,
};
navigationOptions[DialerClass.NAME] = {screen: Dialer};
navigationOptions[DialerClass.TIMESTAMP_NAME] = {screen: Timestamp};
navigationOptions[DialerClass.DEPREDATION_NAME] = {screen: DepredationCount};
navigationOptions[DialerClass.DEPREDATION_BEHAVIOR_NAME] = {
  screen: DepredationBehaviorCount,
};
navigationOptions[DialerClass.DEPREDATION_SUB_BEHAVIOR_NAME] = {
  screen: DepredationSubBehaviorCount,
};
navigationOptions[DialerClass.DEPREDATION_TIMESTAMP_NAME] = {
  screen: DepredationTimestamp,
};
navigationOptions[DialerClass.OBSERVATION_NAME] = {screen: ObservationCount};
navigationOptions[DialerClass.OBSERVATION_TIMESTAMP_NAME] = {
  screen: ObservationTimestamp,
};
navigationOptions[DialerClass.DISPERSAL_NAME] = {screen: DispersalCount};
navigationOptions[DialerClass.DISPERSAL_ACTION_NAME] = {
  screen: DispersalActionCount,
};
navigationOptions[DialerClass.DISPERSAL_TIMESTAMP_NAME] = {
  screen: DispersalTimestamp,
};
navigationOptions[DialerClass.REMAINS_NAME] = {screen: RemainsCount};
navigationOptions[DialerClass.REMAINS_TIMESTAMP_NAME] = {
  screen: RemainsTimestamp,
};
navigationOptions[DialerClass.REMAINS_SPECIFIC_NAME] = {
  screen: RemainsSpecificCount,
};
navigationOptions[DialerClass.REMAINS_SPECIFIC_TIMESTAMP_NAME] = {
  screen: RemainsSpecificTimestamp,
};
navigationOptions[DialerClass.AUDIO_NAME] = {screen: AudioCount};
navigationOptions[DialerClass.AUDIO_ACTION_NAME] = {screen: AudioActionCount};
navigationOptions[ActionClass.NAME] = {screen: DepredationAction};
navigationOptions[ActionClass.BEHAVIOR_NAME] = {
  screen: DepredationBehaviorAction,
};
navigationOptions[ActionClass.OBSERVATION_NAME] = {screen: ObservationAction};
navigationOptions[ActionClass.OBSERVATION_BEHAVIOR_NAME] = {
  screen: ObservationBehaviorAction,
};
navigationOptions[ActionClass.DISPERSAL_NAME] = {screen: DispersalAction};
navigationOptions[ActionClass.DISPERSAL_BEHAVIOR_NAME] = {
  screen: DispersalBehaviorAction,
};
navigationOptions[ActionClass.DISPERSAL_SUB_BEHAVIOR_NAME] = {
  screen: DispersalSubBehaviorAction,
};
navigationOptions[ActionClass.LOAFING_NAME] = {
  screen: DepredationLoafingAction,
};
navigationOptions[ActionClass.SUB_BEHAVIOR_NAME] = {
  screen: DepredationSubBehaviorAction,
};
navigationOptions[ActionClass.DISPERSAL_MENU_NAME] = {
  screen: DispersalMenuAction,
};
navigationOptions[ActionClass.AIRFIELD_NAME] = {screen: AirfieldAction};
navigationOptions[ActionClass.DISPERSAL_AIRFIELD_NAME] = {
  screen: DispersalAirfieldAction,
};
navigationOptions[ActionClass.LOCATION_NAME] = {screen: LocationAction};
navigationOptions[ActionClass.DISPERSAL_LOCATION_NAME] = {
  screen: DispersalLocationAction,
};
navigationOptions[ActionClass.OBSERVATION_LOCATION_NAME] = {
  screen: ObservationLocationAction,
};
navigationOptions[ActionClass.RELOCATION_NAME] = {screen: RelocationAction};
navigationOptions[ActionClass.DISPERSAL_RELOCATION_NAME] = {
  screen: DispersalRelocationAction,
};
navigationOptions[ActionClass.REMAINS_NAME] = {screen: RemainsAction};
navigationOptions[ActionClass.REMAINS_BEHAVIOR_NAME] = {
  screen: RemainsBehaviorAction,
};
navigationOptions[ActionClass.REMAINS_SUB_BEHAVIOR_NAME] = {
  screen: RemainsSubBehaviorAction,
};
navigationOptions[ActionClass.REMAINS_SPECIFIC_NAME] = {
  screen: RemainsSpecificAction,
};
navigationOptions[ActionClass.REMAINS_SPECIFIC_BEHAVIOR_NAME] = {
  screen: RemainsSpecificBehaviorAction,
};
navigationOptions[ActionClass.AUDIO_NAME] = {screen: AudioAction};
navigationOptions[ActionClass.AUDIO_BEHAVIOR_NAME] = {
  screen: AudioBehaviorAction,
};
navigationOptions[ActionClass.AUDIO_SUB_BEHAVIOR_NAME] = {
  screen: AudioSubBehaviorAction,
};
navigationOptions[ActionClass.AUDIO_AIRFIELD_NAME] = {
  screen: AudioAirfieldAction,
};
navigationOptions[ActionClass.AUDIO_LOCATION_NAME] = {
  screen: AudioLocationAction,
};
navigationOptions[ActionClass.AUDIO_RELOCATION_NAME] = {
  screen: AudioRelocationAction,
};
navigationOptions[ActionClass.AUDIO_PLAY_NAME] = {screen: AudioPlayAction};
navigationOptions[MapClass.NAME] = {screen: Map};
navigationOptions[MapClass.BIRD_MAP_NAME] = {screen: BirdMap};
navigationOptions[MapClass.OBSERVATION_MAP_NAME] = {screen: ObservationMap};
navigationOptions[MapClass.DISPERSAL_MAP_NAME] = {screen: DispersalMap};
navigationOptions[MapClass.AREA_MAP_NAME] = {screen: AreaMap};
navigationOptions[MapClass.AREA_CLEAR_NAME] = {screen: AreaClear};
navigationOptions[MapClass.DEPREDATION_CLEAR_NAME] = {screen: DepredationClear};
navigationOptions[MapClass.OBSERVATION_CLEAR_NAME] = {screen: ObservationClear};
navigationOptions[MapClass.DISPERSAL_CLEAR_NAME] = {screen: DispersalClear};
navigationOptions[MapClass.REMAINS_MAP_NAME] = {screen: RemainsMap};
navigationOptions[MapClass.REMAINS_CLEAR_NAME] = {screen: RemainsClear};
navigationOptions[MapClass.REMAINS_SPECIFIC_CLEAR_NAME] = {
  screen: RemainsSpecificClear,
};
navigationOptions[MapClass.AUDIO_MAP_NAME] = {screen: AudioMap};
navigationOptions[MapClass.AUDIO_CLEAR_NAME] = {screen: AudioClear};
navigationOptions[TimerClass.NAME] = {screen: Timer};
navigationOptions[TimerClass.DEPREDATION_NAME] = {screen: DepredationTimer};
navigationOptions[TimerClass.OBSERVATION_NAME] = {screen: ObservationTimer};
navigationOptions[TimerClass.DISPERSAL_NAME] = {screen: DispersalTimer};
navigationOptions[TimerClass.REMAINS_NAME] = {screen: RemainsTimer};
navigationOptions[TimerClass.REMAINS_SPECIFIC_NAME] = {
  screen: RemainsSpecificTimer,
};

export default Navigator.createMainContainer(
  Navigator.createMainNavigator(navigationOptions),
);
