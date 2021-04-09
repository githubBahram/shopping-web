import React from 'react';
import HeaderPage from "./HeaderPage";
import MainCategories from "./MainCategories";
import Discount from "./Discount";

const Home = () => {
    return (
        <>
            <HeaderPage/>
            <div className="body-container">
                <div className="category-container">
                    <MainCategories/>
                </div>
                <Discount/>
            </div>

        </>
    )
}
export default Home
