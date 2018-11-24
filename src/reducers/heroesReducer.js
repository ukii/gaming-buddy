import { FETCH_HEROES, NEW_POST } from '../actions/types';

const initialState = {
  heroes: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_HEROES:
      return {
        ...state,
          heroes: action.payload
      };
    case NEW_POST:
      return {
        ...state,
          heroes: action.payload
      };
    default:
      return state;
  }
}
