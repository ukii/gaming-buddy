import { FETCH_MATCHES } from '../actions/types';

const initialState = {
    matches: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_MATCHES:
            return {
                ...state,
                matches: action.payload
            };
        default:
            return state;
    }
}
