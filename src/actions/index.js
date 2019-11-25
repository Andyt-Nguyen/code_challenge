import giphyApi from '../utils/giphyApi';
import {
  FETCH_GIF,
  SEARCH_GIF,
  LIKE_GIF,
  UNLIKE_GIF,
  ERROR_GIF,
  RESTART_GIF
} from './types'

export const searchGif = (searchTerm) => {
  return {
    type: SEARCH_GIF,
    payload: searchTerm
  }
};

export const fetchGif = (num, searchTerm) => async (dispatch) => {
  try {
    const { data } = await giphyApi.getWeirdGif(num, searchTerm);
    return dispatch({ type: FETCH_GIF, payload: data });
  } catch(e) {
    return dispatch({ type: ERROR_GIF, payload: 'There was a problem fetching a giph :('});
  }
};

export const likeGif = (gifUrl) => {
  return {
    type: LIKE_GIF,
    payload: gifUrl
  }
};

export const unLikeGif = (gifUrl) => {
  return {
    type: UNLIKE_GIF,
    payload: gifUrl
  }
};

export const resetGif = () => {
  return { type: RESTART_GIF };
}