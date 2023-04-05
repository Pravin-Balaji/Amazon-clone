import axios from "axios";

const instance = axios.create({
  baseURL: "https://atozshopping.onrender.com/",
});

export default instance;