import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-d959b.firebaseio.com/"
});

export default instance;
