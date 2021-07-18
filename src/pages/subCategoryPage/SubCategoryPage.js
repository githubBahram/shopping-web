import React, {useEffect, useState} from 'react'
import Breakpoint from "../../component/Breakpoint";
import SubCategoryDesktop from "./SubCategoryDesktop";
import SubCategoryMobile from "./SubCategoryMobile";
import Footer from "../footer/Footer";
import {getCategoryById} from "../../api/categoryApi";
import {useHistory, useParams} from "react-router-dom";
import ProductListPage from "../productList/ProductListPage";

const SubCategoryPage = () => {
    const params = useParams()
    const [categories, setCategories] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [isFailed, setIsFailed] = useState(false)

    useEffect(() => {
        let result = getCategoryById(params.categoryId)
        result.then((response) => {
            setIsPending(false)
            setCategories(response.categoryDtoList)
        }).catch((error) => {
            setIsFailed(true)
        })
    }, [params.categoryId])

    if (isPending) {
        return (<>
            <span>is pending ....</span>
        </>)
    }
    if (categories.length > 0) {
        return (
            <>
                <Breakpoint at="lg">
                    <SubCategoryDesktop categories={categories}/>
                </Breakpoint>
                <Breakpoint at="md">
                    <SubCategoryDesktop categories={categories}/>
                </Breakpoint>
                <Breakpoint at="xs">
                    <SubCategoryMobile categories={categories}/>
                </Breakpoint>
                <Footer/>
            </>

        )
    }
    return (
        <>
            <ProductListPage categoryId={params.categoryId}/>
        </>
    )


}

export default SubCategoryPage