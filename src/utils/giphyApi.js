import axios from 'axios';
const API_KEY = "HSnoA2enpaw3XUy7E5FJKqg78GrM3TDS";

export default {
  getTranslate: (num, searchTerm) => {
    return axios.get(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchTerm}&weirdness=${num}`)
  }
}