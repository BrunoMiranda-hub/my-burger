import axios from "axios";

const instance = axios.create({
    baseURL : "https://react-my-burger-286a5.firebaseio.com/"
})

export default instance;