import axios from "axios";
export default axios.create({
  baseURL: "http://localhost/snagem2/api/",
  headers: {
    "Content-type": "application/json"
  }
});