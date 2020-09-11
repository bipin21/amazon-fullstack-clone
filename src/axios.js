import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:5001/fullstack-clone-5f0cd/us-central1/api'
    baseURL: 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api'
});

export default instance;