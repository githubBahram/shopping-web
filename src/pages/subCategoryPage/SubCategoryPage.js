import React from 'react'
import Breakpoint from "../../component/Breakpoint";
import SubCategoryDesktop from "./SubCategoryDesktop";
import SubCategoryMobile from "./SubCategoryMobile";

const SubCategoryPage = () => {

    return (
        <>
            <Breakpoint at="lg">
                <SubCategoryDesktop/>
            </Breakpoint>
            <Breakpoint at="md">
                <SubCategoryDesktop/>
            </Breakpoint>
            <Breakpoint at="xs">
                <SubCategoryMobile/>
            </Breakpoint>
        </>

    )
}

export default SubCategoryPage