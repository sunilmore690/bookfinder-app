
import axios from 'axios';
const URL =
  "https://nameless-hollows-24059.herokuapp.com/?url=https://api.itbook.store";
const instance = axios.create({
  baseURL: URL,
  timeout: 3000
});

export default instance
