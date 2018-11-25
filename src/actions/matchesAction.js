import {FETCH_MATCHES, OPEN_DOTA_API} from "./types";

export const fetchMatches = (userId) => dispatch => {
    console.log(userId);
    fetch(OPEN_DOTA_API + '/players/'+ userId + '/recentMatches')
        .then(res => res.json())
        .then(matches =>{
            dispatch({
                type: FETCH_MATCHES,
                payload: matches.slice(0.10)
            });}
        );
};