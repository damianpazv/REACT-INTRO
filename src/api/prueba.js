import axios from "axios";

const pruebaApi= axios.create(
    {
        baseURL: "http://localhost:4020"
    }
);

pruebaApi.interceptors.request.use((config)=>{
    config.headers={ "x-token": localStorage.getItem("token"),   };
    return config;
})

export default pruebaApi;