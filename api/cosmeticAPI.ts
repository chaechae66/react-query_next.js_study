import axios from "axios";

const instance = axios.create({
    baseURL: "http://makeup-api.herokuapp.com/api/v1/products.json",
    timeout: 4000,
});

instance.interceptors.request.use(
    (config) => {
        return config
    },
    (error)=>{
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error)=>{
        return Promise.reject(error);
    }
)

export const getList = async () : Promise<List[]> =>{
    return await instance.get('?brand=maybelline');
}

export const getItem = async (id : string) : Promise<List> =>{
    const { data } = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
    return data
}