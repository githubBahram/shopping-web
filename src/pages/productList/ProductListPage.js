import React from 'react'
import Breakpoint from "../../component/Breakpoint";
import ProductListPage_D from "./ProductionListPage_D";
import ProductionListMobile from "./ProductionListMobile";

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
                <ProductionListMobile/>
            </Breakpoint>
        </>
    )

}


export default ProductListPage