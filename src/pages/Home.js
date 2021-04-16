import React from 'react';
import HeaderPage from "./HeaderPage";
import MainCategories from "./MainCategories";
import Discount from "./Discount";
import ScrollRendering from "./ScrollRendering";
import SubCategory from "./SubCategory";

const Home = () => {

    return (
        <>
            <HeaderPage/>
            <div className="body-container">
                <div className="category-container">
                    <MainCategories/>
                </div>
                <ScrollRendering>
                    <Discount/>
                </ScrollRendering>
                <ScrollRendering>
                    <SubCategory title="لبنیات"/>
                </ScrollRendering>
            </div>

        </>
    )
}
export default Home
