export default class Action {
  constructor() {
    this.dispersal = false;
  }
  static get NAME() {
    return 'Depredation';
  }
  static get BEHAVIOR_NAME() {
    return 'DepredationBehavior';
  }
  static get OBSERVATION_NAME() {
    return 'Observation';
  }
  static get OBSERVATION_BEHAVIOR_NAME() {
    return 'ObservationBehavior';
  }
  static get DISPERSAL_NAME() {
    return 'Dispersal';
  }
  static get DISPERSAL_BEHAVIOR_NAME() {
    return 'DispersalBehavior';
  }
  static get DISPERSAL_SUB_BEHAVIOR_NAME() {
    return 'DispersalSubBehavior';
  }
  static get SUB_BEHAVIOR_NAME() {
    return 'DepredationSubBehavior';
  }
  static get LOAFING_NAME() {
    return 'DepredationLoafing';
  }
  static get DISPERSAL_MENU_NAME() {
    return 'DispersalMenu';
  }
  static get AIRFIELD_NAME() {
    return 'AirfieldBehavior';
  }
  static get DISPERSAL_AIRFIELD_NAME() {
    return 'DispersalAirfieldBehavior';
  }
  static get LOCATION_NAME() {
    return 'LocationAction';
  }
  static get DISPERSAL_LOCATION_NAME() {
    return 'DispersalLocationAction';
  }
  static get OBSERVATION_LOCATION_NAME() {
    return 'ObservationLocationAction';
  }
  static get DISPERSAL_LOCATION_NAME() {
    return 'DispersalLocationAction';
  }
  static get RELOCATION_NAME() {
    return 'RelocationAction';
  }
  static get DISPERSAL_RELOCATION_NAME() {
    return 'DispersalRelocationAction';
  }
  static get REMAINS_NAME() {
    return 'Remains';
  }
  static get REMAINS_BEHAVIOR_NAME() {
    return 'RemainsBehavior';
  }
  static get REMAINS_SUB_BEHAVIOR_NAME() {
    return 'RemainsSubBehavior';
  }
  static get REMAINS_SPECIFIC_NAME() {
    return 'RemainsSpecific';
  }
  static get REMAINS_SPECIFIC_BEHAVIOR_NAME() {
    return 'RemainsSpecificBehavior';
  }
  static get AUDIO_NAME() {
    return 'Audio';
  }
  static get AUDIO_BEHAVIOR_NAME() {
    return 'AudioBehavior';
  }
  static get AUDIO_AIRFIELD_NAME() {
    return 'AudioAirfield';
  }
  static get AUDIO_RELOCATION_NAME() {
    return 'AudioRelocationAction';
  }
  static get AUDIO_LOCATION_NAME() {
    return 'AudioLocationAction';
  }
  static get AUDIO_SUB_BEHAVIOR_NAME() {
    return 'AudioSubBehavior';
  }
  static get AUDIO_PLAY_NAME() {
    return 'AudioPlayAction';
  }
  static isDispersal() {
    return this.dispersal;
  }
  static setDispersal(value) {
    this.dispersal = value;
  }
}
