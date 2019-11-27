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


// Tracks the user search as they type
export const onSearchChange = (searchTerm) => ({
  type: SEARCH_CHANGE,
  payload: searchTerm
});

// Emits a loading event
export const giphLoading = () => ({ type: LOADING_GIPH });

// Clears the currGiph object to its initial state
export const clearGiph = () => ({ type: CLEAR_GIPH });

// Reinitializes the initial state
export const resetGiph = () => ({ type: RESTART_GIPH })


/**
 * @param { int } num 
 * @param { string } searchTerm
 * Fetches a .gif URL
 */
export const fetchGiph = (num, searchTerm) => async (dispatch) => {
  dispatch(giphLoading());
  try {
    const res = await giphyApi.getTranslate(num, searchTerm);
    // This checkes if there are any gif results in the api
    // if none exist it will dispatch an error that there 
    // are no results
    res.data.data.length <= 0
      ? dispatch({
        type: ERROR_GIPH,
        payload: `Could not find any results for ${searchTerm}`
      })
      : dispatch({ type: FETCH_GIPH, payload: res.data });

  } catch (e) {
    return dispatch({
      type: ERROR_GIPH,
      payload: 'There was a problem fetching a giph :('
    });
  }
};

/**
 * @param { name: String, url: URI, weirdVal: int } gifObj 
 * Add gif to store
 */
export const likeGiph = (gifObj) => {
  return {
    type: LIKE_GIPH,
    payload: gifObj
  }
};

/**
 * @param { searchTerm: string } searchTerm
 * Removes gif from store
 */
export const unLikeGiph = (searchTerm) => {
  return {
    type: UNLIKE_GIPH,
    payload: searchTerm
  }
};
