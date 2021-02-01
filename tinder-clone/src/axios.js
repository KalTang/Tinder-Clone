import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinderbackenddude.herokuapp.com",
});

export default instance;
