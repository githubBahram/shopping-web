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
    const {data} = await instance.get("/categoryManager/categories/isRoot/companies/1")
    console.log('root categories...')
    console.log(data)
    return data
}


export const getCategoryById = async (categoryId) => {
    let url = "/categoryManager/categories/"
    url = url.concat(categoryId)

    const {data} = await instance.get(url)
    return data
}