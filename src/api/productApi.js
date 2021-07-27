import instance from "../config/axiosConfig";

export const getProducts = async (productFilter) => {
    let params = ''
    let apiUrl = "/productManager/products/companies"

    console.log("productFilter.brands...")
    console.log(productFilter.brands)

    let brandQuery = ''
    if (productFilter.brands) {
        productFilter.brands.map((item, index) => (
            brandQuery = brandQuery.concat(item, ",")
        ))
    }

    if (productFilter.brands) {
        params = params.concat('brands=', brandQuery.slice(0, -1), "&")
    }

    if (productFilter.isRootCategory) {
        params = params.concat('rootCategory=', productFilter.isRootCategory, "&")
    }

    console.log('product filter....')
    console.log(productFilter)

    params = params.concat("pageNumber=", productFilter.pageNumber, "&", "pageSize=", productFilter.pageSize)

    apiUrl = apiUrl.concat("/", productFilter.companyId, "/categories/", productFilter.categoryId, "?", params)
    console.log("api url is ...")
    console.log(apiUrl)
    apiUrl.concat(params)

    const res = await instance.get(apiUrl)

    return res

}