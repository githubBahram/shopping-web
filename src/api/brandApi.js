import instance from "../config/axiosConfig";

export const addBrand = async (brand) => {
    const {data} = await instance.post("/brandManager/brand", brand, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return data
}