import React, {useEffect} from 'react';
import HeaderPage from "./header/HeaderPage";
import MainCategories from "./mainCategory/MainCategories";
import Discount from "./discount/Discount";
import ScrollRendering from "./ScrollRendering";
import SubCategory from "./SubCategory";
import styled from 'styled-components'
import useBreakpoints from "../component/useBreakpoints";
import Footer from "./footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {fetchMainCategories, selectAllCategories} from "../redux/feature/categorySlice";

const Home = () => {
    const padding = useBreakpoints().isXs ? "10px" : "25px"
    const marginBottom = useBreakpoints().isXs ? "3rem" : 0
    const categoryStatus = useSelector(state => state.categories.status)
    const dispatch = useDispatch();
    const categories = useSelector(selectAllCategories)

    useEffect(() => {
        console.log('rerender')
        if (categoryStatus === 'idle') {
            dispatch(fetchMainCategories())
        }
    }, [categoryStatus, dispatch])

    const SubCategoryList = (props) => {
        const {data} = props
        return (
            <>
                {
                    data.categories.map((item, index) =>
                        <div>
                            <ScrollRendering>
                                <SubCategory isRootCategory={true} categoryId={item.id} title={item.name}/>
                            </ScrollRendering>
                            <div style={{marginBottom: "8px"}}/>
                        </div>
                    )
                }
            </>
        )

    }

    return (
        <div id="home">
            <HeaderPage/>
            <Container padding={padding} marginBottom={marginBottom}>
                <div className="category-container">
                    <MainCategories categories={categories} categoryStatus={categoryStatus}/>
                </div>

                <ScrollRendering>
                    <Discount/>
                </ScrollRendering>
                <div style={{marginBottom: "8px"}}/>

                <SubCategoryList data={categories}/>

            </Container>
            <Footer/>
        </div>
    )
}

const Container = styled.div`
  padding: ${(props) => props.padding};
  margin-bottom: ${(props) => props.marginBottom};;
`
export default Home
