import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "http://localhost:8000/api/v1/";

export default {
    setUserLogged(userLogged) {
        Cookies.set("userLogged", userLogged);
    },
    getUserLogged() {
        return Cookies.get
    },
    register(name, email, password) {
        const user = { name, email, password };
        return axios.post(ENDPOINT_PATH + "register", user);
    },
    login(email, password) {
        const user = { email, password };
        return axios.post(ENDPOINT_PATH + "login", user);
    }
};