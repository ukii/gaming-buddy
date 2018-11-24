import {FETCH_WORDS} from '../actions/types';

const initialState = {
    user: {
        ...this,
        words : [],
    },
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_WORDS:
            return {
                ...state,
                user : {
                    ...this,
                    words: action.payload,
                }
            };
        default:
            return state;
    }
}
