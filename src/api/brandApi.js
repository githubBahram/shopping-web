import instance from "../config/axiosConfig";

export const addBrand = async (brand) => {
    const {data} = await instance.post("/brandManager/brand", brand, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return data
}

export const getBrandsByCategoryAndCompany = async (categoryId,companyId) => {
    let url = "/brandManager/brands/categories/"
    url = url.concat(categoryId, "/companies/", companyId)
    const {data} = await instance.get(url)
    return data
}
