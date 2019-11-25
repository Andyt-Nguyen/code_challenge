import axios from 'axios';
const API_KEY = "HSnoA2enpaw3XUy7E5FJKqg78GrM3TDS";

export default {
  getWeirdGif: (num, searchTerm) => {
    return axios.get(`http://api.giphy.com/v1/gifs/translate&s=${searchTerm}&weirdness=${num}&api_key=${API_KEY}`)
  }
}