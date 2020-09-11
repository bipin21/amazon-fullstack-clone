import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/fullstack-clone-5f0cd/us-central1/api'
});

export default instance;
