import React from 'react'
import styled from 'styled-components'
import mainCategory from "../../data/mainCategory";
import useBreakpoints from "../../component/useBreakpoints";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons"

const MainCategoriesDesktop = (props) => {
    const {data} = props
    console.log('props data...  ')
    console.log(data.categories)
    const breakPoint = useBreakpoints()
    let marginTop = breakPoint.isXs ? '5.2rem' : 0


    return (
        <div style={{marginTop: marginTop, display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
            <CategoryList data={data}/>
        </div>
    )
}

const CategoryList = (props) => {
    const {data} = props
    console.log("category list data")
    console.log(data)
    const
        brandRender = data.categories.map((item, index) =>
            <MainCategory key={index} index={index}>
                <ImageWrapper key={index} index={index}>
                    <MainCategoryImage key={index} index={index} className="main-category-image"
                                       src={`https://image-product-thumbnail.s3.ir-thr-at1.arvanstorage.com/${item.imageLocation}`}/>
                </ImageWrapper>
                <MainCategoryTitle index={index}>{item.name}</MainCategoryTitle>
                <CategoryArrow index={index} className="category-arrow">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </CategoryArrow>
            </MainCategory>)

    return (<> {brandRender}      </>)
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


export default MainCategoriesDesktop
