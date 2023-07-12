import axios from "axios";

const pruebaApi= axios.create(
    {
        baseURL: "http://localhost:4020"
    }
);

export default pruebaApi;