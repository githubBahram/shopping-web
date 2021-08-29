import React, {useCallback, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectCurrentCompany} from "../../redux/feature/companySlice";
import {getBrandsByCategoryAndCompany} from "../../api/brandApi";
import Form from "react-bootstrap/Form";

const BrandItemList = ({categoryId, brandChecked, setBrand}) => {

    const [brands, setBrands] = useState([])
    const data = useSelector(selectCurrentCompany)

    const setBrandDate = useCallback((categoryId) => {
        const brandsData = getBrandsByCategoryAndCompany(categoryId, data.currentCompany.id)
        brandsData.then((res) => {
            setBrands(res)
        })
    }, [categoryId])

    useEffect(() => {
        setBrandDate(categoryId)
    }, [setBrandDate])

    return brands.map((item, idx) => (
        <Form.Check defaultChecked={brandChecked.indexOf(String(item.id)) > -1} id={idx} onClick={() => {
            setBrand(String(item.id))
        }} type="checkbox"
                    label={item.name}/>
    ))
}

export default BrandItemList