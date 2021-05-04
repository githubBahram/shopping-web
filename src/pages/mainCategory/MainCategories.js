import React from 'react'
import Breakpoint from "../../component/Breakpoint";
import MainCategoriesDesktop from "./MainCategoryDesktop";
import MainCategoryMobile from "./MainCategoryMobile";

const MainCategories = () => {

    return (
        <>
            <Breakpoint at="lg">
                <MainCategoriesDesktop/>
            </Breakpoint>
            <Breakpoint at="md">
                <MainCategoriesDesktop/>
            </Breakpoint>
            <Breakpoint at="xs">
                <MainCategoryMobile/>
            </Breakpoint>
        </>
    )
}








export default MainCategories
