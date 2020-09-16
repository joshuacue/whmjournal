export default class ListView {
  constructor() {
    this.letter = null;
  }
  static get NAME() {
    return 'ListView';
  }
  static get LETTER_NAME() {
    return 'LetterView';
  }
  static get LETTER_VIEW_NAME() {
    return 'ListLetterView';
  }
  static get FAVORITE_VIEW_NAME() {
    return 'ListFavoriteView';
  }
  static get DEPREDATION_VIEW_NAME() {
    return 'DepredationListView';
  }
  static get DEPREDATION_LETTER_NAME() {
    return 'DepredationLetterView';
  }
  static get DEPREDATION_LETTER_VIEW_NAME() {
    return 'DepredationLetterListView';
  }
  static get DEPREDATION_FAVORITE_VIEW_NAME() {
    return 'DepredationListFavoriteView';
  }
  static get OBSERVATION_VIEW_NAME() {
    return 'ObservationListView';
  }
  static get OBSERVATION_LETTER_NAME() {
    return 'ObservationLetterView';
  }
  static get OBSERVATION_LETTER_VIEW_NAME() {
    return 'ObservationLetterListView';
  }
  static get OBSERVATION_FAVORITE_VIEW_NAME() {
    return 'ObservationListFavoriteView';
  }
  static get DISPERSAL_VIEW_NAME() {
    return 'DispersalListView';
  }
  static get DISPERSAL_LETTER_NAME() {
    return 'DispersalLetterView';
  }
  static get DISPERSAL_LETTER_VIEW_NAME() {
    return 'DispersalLetterListView';
  }
  static get DISPERSAL_FAVORITE_VIEW_NAME() {
    return 'DispersalListFavoriteView';
  }
  static get REMAINS_VIEW_NAME() {
    return 'RemainsListView';
  }
  static get REMAINS_LETTER_NAME() {
    return 'RemainsLetterView';
  }
  static get REMAINS_LETTER_VIEW_NAME() {
    return 'RemainsLetterListView';
  }
  static get REMAINS_FAVORITE_VIEW_NAME() {
    return 'RemainsListFavoriteView';
  }
  static get REMAINS_SPECIFIC_VIEW_NAME() {
    return 'RemainsSpecificListView';
  }
  static get REMAINS_SPECIFIC_LETTER_NAME() {
    return 'RemainsSpecificLetterView';
  }
  static get REMAINS_SPECIFIC_LETTER_VIEW_NAME() {
    return 'RemainsSpecificLetterListView';
  }
  static get REMAINS_SPECIFIC_FAVORITE_VIEW_NAME() {
    return 'RemainsSpecificListFavoriteView';
  }
  static get AUDIO_VIEW_NAME() {
    return 'AudioListView';
  }
  static get AUDIO_LETTER_NAME() {
    return 'AudioLetterView';
  }
  static get AUDIO_LETTER_VIEW_NAME() {
    return 'AudioLetterListView';
  }
  static get AUDIO_FAVORITE_VIEW_NAME() {
    return 'AudioListFavoriteView';
  }
  static get AUDIO_BIRD_VIEW_NAME() {
    return 'AudioBirdListView';
  }
  static get AUDIO_BIRD_LETTER_NAME() {
    return 'AudioBirdLetterView';
  }
  static get AUDIO_BIRD_LETTER_VIEW_NAME() {
    return 'AudioBirdLetterListView';
  }
  static get AUDIO_BIRD_FAVORITE_VIEW_NAME() {
    return 'AudioBirdListFavoriteView';
  }
  static setLetter(letter, cb) {
    this.letter = letter;
    cb();
  }
  static get LETTER() {
    return this.letter;
  }
}
