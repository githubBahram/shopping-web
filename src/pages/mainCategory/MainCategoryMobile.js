import React from 'react'
import mainCategory from "../../data/mainCategory";
import styled from 'styled-components'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useSelector} from "react-redux";
import {selectAllCategories} from "../../redux/feature/categorySlice";

const MainCategoryMobile = (props) => {
    const {data} = props
    const CategoryList = (props) => {
        const {data} = props
        const
            brandRender = data.categories.map((item, index) =>

                <Col xs={4} sm={4}>
                    <ContainerItem>
                        <ImageWrapper key={index} index={index}>
                            <MainCategoryImage key={index} index={index} className="main-category-image"
                                               src={`https://testshop.s3.ir-thr-at1.arvanstorage.com/${item.image.name}`}/>
                        </ImageWrapper>
                        <MainCategoryItem>{item.name}</MainCategoryItem>
                    </ContainerItem>
                </Col>
            )
        return (<> {brandRender}      </>)
    }

    return (
        <>
            <Container>
                <Row>
                    <CategoryList data={data}/>
                </Row>
            </Container>
        </>
    )
}
const Container = styled.div`
  margin-top: 5.2rem;
`
const ContainerItem = styled.div`
  text-align: center;
`
const backgroundColors = ['#fbf7df', '#e6f4f9', '#fceee0']

const ImageWrapper = styled.div`
  background-color: ${(props) => props.index < 3 ? backgroundColors[props.index] : '#ffffff'};
  width: 100%;
`
const MainCategoryImage = styled.img`
  width: 100%;
`
const MainCategoryItem = styled.span`
  width: 100%;
  text-align: center;
  font-family: IRANSansWeb_Medium;
`
export default MainCategoryMobile
