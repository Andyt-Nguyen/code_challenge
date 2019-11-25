import {
  SEARCH_GIF,
  FETCH_GIF,
  LIKE_GIF,
  UNLIKE_GIF,
  ERROR_GIF,
  RESTART_GIF
} from '../actions/types';

const INITIAL_STATE = {
  searchTerm: '',
  currGif: {}, // GIF_OBJECT
  likedGifs: [], // { name: 'Name of gif', url: 'URL', weird: INT }
  errorMsg: ''
};

export default (state=INITIAL_STATE, action) => {

  switch(action.type) {
    case SEARCH_GIF:
      return { ...state, searchTerm: action.payload };

    case FETCH_GIF:
      return { ...state, currGif: action.payload };

    case LIKE_GIF:
      const likedGifs = [...state.likedGifs, action.payload];
      return { ...state, errorMsg: '', likedGifs };

    case UNLIKE_GIF:
      const filterGif = state.likedGifs.filter(a => a.name !== action.payload);
      return { ...state, likedGifs: filterGif };

    case ERROR_GIF:
      return { ...state, errorMsg: action.payload };

    case RESTART_GIF:
      return { ...INITIAL_STATE };
      
    default:
      return state;
  }

}