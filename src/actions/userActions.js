import {FETCH_WORDS, OPEN_DOTA_API} from "./types";

export const fetchWords = () => dispatch => {
    fetch(OPEN_DOTA_API + '/players/378574717/wordcloud')
        .then(res => res.json())
        .then(words =>{
            dispatch({
                type: FETCH_WORDS,
                payload: words.all_word_counts
            });}
        );
};