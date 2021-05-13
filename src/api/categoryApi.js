import instance from "../config/axiosConfig";

export const addCategory = async (category) => {
    const {data} = await instance.post("/categoryManager/category", category, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return data
}

export const getAllMainCategory = async () => {
    const {data} = await instance.get("/categoryManager/categories")
    console.log("mainCategory data ")
    console.log(data.content)
    return data
}