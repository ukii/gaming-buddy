import {FETCH_HEROES, NEW_POST, OPEN_DOTA_API} from './types';

export const fetchHeroes = () => dispatch => {
  fetch(OPEN_DOTA_API + '/heroStats')
    .then(res => res.json())
    .then(heroes =>
      dispatch({
        type: FETCH_HEROES,
        payload: heroes
      })
    );
};

export const createPost = postData => dispatch => {
  fetch(OPEN_DOTA_API, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

