import React from 'react';
import HeaderPage from "./header/HeaderPage";
import MainCategories from "./mainCategory/MainCategories";
import Discount from "./Discount";
import ScrollRendering from "./ScrollRendering";
import SubCategory from "./SubCategory";
import styled from 'styled-components'
import useBreakpoints from "../component/useBreakpoints";


const Home = () => {
    const padding = useBreakpoints().isXs ? "10px" : "25px"
    const marginBottom = useBreakpoints().isXs ? "2rem" : 0

    return (
        <>
            <HeaderPage/>
            <Container padding={padding} marginBottom={marginBottom}>
                <div className="category-container">
                    <MainCategories/>
                </div>
                <ScrollRendering>
                    <Discount/>
                </ScrollRendering>
                <ScrollRendering>
                    <SubCategory title="لبنیات"/>
                </ScrollRendering>
            </Container>

        </>
    )
}

const Container = styled.div`
  padding: ${(props) => props.padding};
  margin-bottom: ${(props) => props.marginBottom};;
`
export default Home
