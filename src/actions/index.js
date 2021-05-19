import axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api';

const API_KEY = '?key=isaac_spokes';

// keys for actiontypes
export const ActionTypes = {
  FETCH_SONGS: 'FETCH_SONGS',
  FETCH_SONG: 'FETCH_SONG',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

export function fetchSongs() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/songs${API_KEY}`)
      .then((response) => {
        dispatch({
          type: ActionTypes.FETCH_SONGS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function fetchSong(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/songs/${id}${API_KEY}`)
      .then((response) => {
        dispatch({
          type: ActionTypes.FETCH_SONG,
          payload: response.data[0],
        });
        console.log('LOGGING SONG AT FETCH SONG');
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}
