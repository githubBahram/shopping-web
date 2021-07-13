import instance from "../config/axiosConfig";

export const getProducts = async (productFilter) => {
    let params = ''
    let apiUrl = "/productManager/products/companies"
    if (productFilter.brands) {
        params = params.concat('brandId=', productFilter.barnds, "&")
    }

    console.log('product filter....')
    console.log(productFilter)

    params = params.concat("pageNumber=", productFilter.pageNumber, "&", "pageSize=", productFilter.pageSize)

    apiUrl = apiUrl.concat("/", productFilter.companyId, "/categories/", productFilter.categoryId, "?", params)
    console.log("api url is ...")
    console.log(apiUrl)
    apiUrl.concat(params)

    const res = await instance.get(apiUrl)
    console.log('res from product api')
    console.log(res)
    return res

}