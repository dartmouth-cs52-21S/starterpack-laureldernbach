import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const HellosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_HELLOS:
      return { ...state, all: action.payload };
    case ActionTypes.SAY_HELLO:
      return { ...state, current: action.payload };
    default:
      return state;
  }
};

export default HellosReducer;
