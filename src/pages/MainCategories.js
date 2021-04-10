import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchCategories, selectAllCategories} from "../redux/feature/categorySlice";
import styled from 'styled-components'

const axios = require("axios");

const MainCategories = () => {
    const dispatch = useDispatch()
    const categories = useSelector(selectAllCategories)
    const categoryStatus = useSelector(state => state.categories.status)


    useEffect(() => {
        console.log('rerender')
        if (categoryStatus === 'idle') {
            dispatch(fetchCategories())
        }
    }, [categoryStatus, dispatch])

    return (
        <>
            <CategoryList/>
        </>
    )
}

const CategoryList = () => {
    const categories = useSelector(selectAllCategories)
    const items = categories.categories

    const
        brandRender = items.map((item, index) =>
            <MainCategory key={index} index={index}>
                <ImageWrapper key={index} index={index}>
                    <MainCategoryImage key={index} index={index} className="main-category-image"
                                       src={`http://localhost:8080/image-management/image/${item.imageId}`}/>
                </ImageWrapper>
                <MainCategoryTitle index={index}>{item.name}</MainCategoryTitle>
                <CategoryArrow index={index} className="category-arrow">.</CategoryArrow>
            </MainCategory>)

    return (<> {brandRender} </>)
}


const backgroundColors = ['#fbf7df', '#e6f4f9', '#fceee0']
const MainCategory = styled.div`
  @media only screen and (min-width: 769px) {
    display: flex;
    position: relative;
    justify-content: space-around;
    background-color: ${(props) => props.index < 3 ? backgroundColors[props.index] : '#ffffff'};
    align-items: center;
    border-radius: 5px;
    border-color: ${(props) => props.index < 3 ? backgroundColors[props.index] : '#ffffff'};
    border-style: solid;
    border-width: 1px;
    width: ${(props) => props.index < 3 ? '30vw' : '24%  '} ;
    padding: ${(props) => props.index < 3 ? '20px 20px 20px 20px;' : '12px 10px 12px 10px;'} ;
    margin-top: 20px;
  }

  @media only screen and (max-width: 769px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    margin: 1px;
    width: 28vw;
    padding: 0;
  }
`
const MainCategoryImage = styled.img`
  width: ${(props) => props.index < 3 ? '8rem' : '6rem'};
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`
const ImageWrapper = styled.div`
  @media only screen and (max-width: 769px) {
    background-color: ${(props) => props.index < 3 ? backgroundColors[props.index] : '#ffffff'};
    width: 100%;
  }
`
const CategoryArrow = styled.span`
  display: ${(props) => props.index > 2 ? 'none' : 'block'};
  @media only screen and (max-width: 769px) {
    display: none;
  }
`
const MainCategoryTitle = styled.span`
  flex-grow: 2;
  text-align: right;
  font-family: IRANSansWeb_Medium;
  @media only screen and (max-width: 769px) {
    text-align: center;
    font-size: 15px;
  }
`


export default MainCategories
