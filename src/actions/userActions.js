import {FETCH_WORDS, OPEN_DOTA_API} from "./types";

export const fetchMatches = () => dispatch => {
    fetch(OPEN_DOTA_API + 'players/378574717/wordcloud')
        .then(res => res.json())
        .then(words =>{
            console.log(words);
            dispatch({
                type: FETCH_WORDS,
                payload: words
            });}
        );
};