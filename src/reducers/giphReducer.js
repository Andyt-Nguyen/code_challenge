import {
  SEARCH_CHANGE,
  FETCH_GIPH,
  LIKE_GIPH,
  UNLIKE_GIPH,
  ERROR_GIPH,
  RESTART_GIPH,
  SLIDER_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
  searchTerm: '',
  slideVal: 0,
  currGif: {}, // GIF_OBJECT
  likedGifs: [], // { name: 'Name of gif', url: 'URL', weird: INT }
  errorMsg: ''
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case SEARCH_CHANGE:
      return { ...state, searchTerm: action.payload };
    
    case SLIDER_CHANGE:
      return { ...state, slideVal: action.payload };

    case FETCH_GIPH:
      console.log(action.payload)
      return { ...state, currGif: action.payload };

    case LIKE_GIPH:
      const likedGifs = [...state.likedGifs, action.payload];
      return { ...state, errorMsg: '', likedGifs };

    case UNLIKE_GIPH:
      console.log('PAYLOAD', action.payload);
      console.log(state.likedGifs);
      const filterGif = state.likedGifs.filter(a => a.name !== action.payload);
      return { ...state, likedGifs: filterGif };

    case ERROR_GIPH:
      return { ...state, errorMsg: action.payload };

    case RESTART_GIPH:
      return { ...INITIAL_STATE };
      
    default:
      return state;
  }

}