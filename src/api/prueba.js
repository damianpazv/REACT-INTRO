import axios from "axios";

const pruebaApi= axios.create(
    {
        baseURL: "https://localhost:4020"
    }
);

export default pruebaApi;