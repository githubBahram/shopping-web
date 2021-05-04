import React from 'react'
import Breakpoint from "../../component/Breakpoint";
import ProductListPage_D from "./desktop/ProductionListPage_D";

const ProductListPage = () => {
    return (
        <>
            <Breakpoint at="lg">
                <ProductListPage_D/>
            </Breakpoint>
            <Breakpoint at="md">
                <ProductListPage_D/>
            </Breakpoint>

            <Breakpoint at="xs">
                <span>mobile them</span>
            </Breakpoint>
        </>
    )

}


export default ProductListPage