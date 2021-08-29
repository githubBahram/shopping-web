import {useCallback, useEffect, useState} from "react";
import {getProducts} from "../../api/productApi";

function useFetch(categoryId, brandParam, page, reset) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);

    const sendQuery = useCallback(async () => {
        try {

            console.log("use Fetch brand is :")
            console.log(brandParam)
            console.log("reset value:")
            console.log(reset)
            await setLoading(true);
            await setError(false);

            let productFilter = {
                brands: brandParam,
                categoryId: categoryId,
                companyId: 1,
                pageNumber: page,
                pageSize: 12,
                isRootCategory: false
            }

            let result = getProducts(productFilter)
            if (!reset) {
                result.then((respnse) => {
                    setList((prev) => [
                        ...new Set([...prev, ...respnse.data.content])
                    ]);
                })
            }else {
                result.then((respnse) => {
                    setList((prev) => [
                        ...new Set([...respnse.data.content])
                    ]);
                })
            }
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }, [categoryId, page,brandParam,reset]);

    useEffect(() => {
        sendQuery();
    }, [categoryId, sendQuery, page, brandParam,reset]);

    return {loading, error, list};
}

export default useFetch;
