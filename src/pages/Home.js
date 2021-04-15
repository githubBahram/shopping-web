import React from 'react';
import HeaderPage from "./HeaderPage";
import MainCategories from "./MainCategories";
import Discount from "./Discount";
import ScrollRendering from "./ScrollRendering";

const Home = () => {
    const ScrollRenderingComponent = () => {

        return (
            <>
                <div style={{
                    display: "flex",
                    flex: 1,
                    backgroundColor: "red",
                    marginTop: "25px"
                }}> scroll rendering
                </div>
            </>
        )
    }
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
                    <ScrollRenderingComponent/>
                </ScrollRendering>
            </div>

        </>
    )
}
export default Home
