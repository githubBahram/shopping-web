import instance from "../config/axiosConfig";

const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
};

export const addBrand = async (brand) => {
    const {data} = await instance.post("/brand", {brand}, config);
    return data
}