import {FETCH_MATCHES, OPEN_DOTA_API} from "./types";

export const fetchMatches = () => dispatch => {
    fetch(OPEN_DOTA_API + '/players/86894711/recentMatches')
        .then(res => res.json())
        .then(matches =>{
            console.log(matches);
            dispatch({
                type: FETCH_MATCHES,
                payload: matches.slice(0.10)
            });}
        );
};