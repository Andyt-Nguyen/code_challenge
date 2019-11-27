import giphyApi from '../utils/giphyApi';
import {
  FETCH_GIPH,
  SEARCH_CHANGE,
  LIKE_GIPH,
  UNLIKE_GIPH,
  ERROR_GIPH,
  RESTART_GIPH,
  CLEAR_GIPH,
  LOADING_GIPH
} from './types'

export const giphLoading = () => {
  return { type: LOADING_GIPH }
}
export const onSearchChange = (searchTerm) => {
  return {
    type: SEARCH_CHANGE,
    payload: searchTerm
  }
};

export const clearGiph = () => {
  return { type: CLEAR_GIPH }
}

export const fetchGiph = (num, searchTerm) => async (dispatch) => {
  dispatch(giphLoading());
  try {
    const res = await giphyApi.getWeirdGiph(num, searchTerm);
    res.data.data.length <= 0 
    ? dispatch({ 
        type: ERROR_GIPH, 
        payload: `Could not find any results for ${searchTerm}`
      })
    : dispatch({ type: FETCH_GIPH, payload: res.data });
    
  } catch(e) {
    return dispatch({ type: ERROR_GIPH, payload: 'There was a problem fetching a giph :('});
  }
};

export const likeGiph = (gifObj) => {
  return {
    type: LIKE_GIPH,
    payload: gifObj
  }
};

export const unLikeGiph = (gifUrl) => {
  return {
    type: UNLIKE_GIPH,
    payload: gifUrl
  }
};

export const resetGiph = () => {
  return { type: RESTART_GIPH };
}