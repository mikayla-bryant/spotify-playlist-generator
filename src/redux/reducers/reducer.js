import {
  GET_URI,
  GET_USER_INFO,
  CREATE_PLAYLIST,
  SEARCH_SONGS,
  GET_TRACK_URIS,
  HANDLE_FORM_VALUES,
  HANDLE_SLIDER_VALUE,
  SUCCESS_ALERT,
  GET_PLAYLIST_URL,
  LOADING_START,
  ALERT_MESSAGE,
  LOADING_FINISH,
  SUCCESS_FINISH,
  ACCESS_CODE_SUCCESS,
  START_AUTHORIZATION,
  LOADING_DONE,
} from '../constants/actiontypes';

const initialState = {
  authUri: '',
  userId: '',
  playlistId: '',
  searchResults: [],
  trackUris: [],
  playlistName: '',
  description: '',
  privacy: false,
  genre: '',
  numSongs: '',
  finalSliderValue: [],
  snapShotId: '',
  playlistUrl: '',
  alertMessage: '',
  variant: '',
  success: false,
  active: false,
  code: '',
  authMessage: '',
  promiseError: false,
  isLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_URI:
      return { ...state, authUri: action.payload, authMessage: action.payload };
    case GET_USER_INFO:
      return { ...state, userId: action.payload };
    case HANDLE_FORM_VALUES:
      return {
        ...state,
        playlistName: action.payload.playlistName,
        description: action.payload.description,
        privacy: action.payload.privacy,
        genre: action.payload.genre,
        numSongs: action.payload.numSongs,
      };
    case HANDLE_SLIDER_VALUE:
      return { ...state, finalSliderValue: action.payload };
    case CREATE_PLAYLIST:
      return { ...state, playlistId: action.payload };
    case SEARCH_SONGS:
      return { ...state, searchResults: action.payload };
    case GET_TRACK_URIS:
      return { ...state, trackUris: action.payload };
    case GET_PLAYLIST_URL:
      return { ...state, playlistUrl: action.payload };
    case SUCCESS_ALERT:
      return { ...state, success: true };
    case LOADING_START:
      return { ...state, active: true };
    case ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: action.payload.alertMessage,
        variant: action.payload.variant,
      };
    case LOADING_FINISH:
      return { ...state, active: false };
    case SUCCESS_FINISH:
      return { ...state, success: false };
    case ACCESS_CODE_SUCCESS:
      return { ...state, code: action.payload };
    case START_AUTHORIZATION:
      return { ...state, isLoading: true };
    case LOADING_DONE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export default reducer;
