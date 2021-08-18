import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import SubCategoryFilterMobile from "./SubCategoryFilterMobile";
import CardMobile from "../card/CardMobile";
import ScrollContainer from "react-indiana-drag-scroll";
import {getProducts} from "../../api/productApi";

const SubCategoryMobile = (props) => {
    const {categories} = props
    const CardRender = () => {
        return (
            < >
                {
                    categories.map((category) => (
                        <ScrollContainer>
                            <CardContainer>
                                <CategoryTitleWrapper>
                                    <span>{category.name}</span>
                                    <Link>بیشتر</Link>
                                </CategoryTitleWrapper>
                                <CategoryBody vertical={false}>
                                    <ProductComponent categoryId={category.id}/>
                                </CategoryBody>
                            </CardContainer>
                            <div style={{borderBottom: " rgb(238, 238, 238) solid 1px",}}/>
                        </ScrollContainer>
                    ))}
            </>
        )
    }

    const ProductComponent = ({categoryId}) => {
        let productFilter = {
            brandId: '',
            categoryId: categoryId,
            companyId: 1,
            pageNumber: 1,
            pageSize: 6,
            isRootCategory: false
        }

        const [products, setProducts] = useState([])

        useEffect(() => {
            let result = getProducts(productFilter)
            result.then((respnse) => {
                setProducts(respnse.data.content)
            })
        }, [])

        return (
            < >
                {
                    products.map((card) => (
                        <div style={{
                            flex: "0 0 auto",
                            width: "calc(40%)",
                            marginLeft: "8px",
                            padding: "5px",
                            height: "14rem"

                        }}>
                            <CardMobile id={card.id}
                                        title={card.name}
                                        discountPercent={card.discountValue}
                                        mainAmount={card.price} finalAmount={card.price} image={card.imageLocation}
                            />
                        </div>
                    ))}
            </>
        )
    }

    return (
        <>
            <Container>
                <div style={{position: "fixed", top: 0, zIndex: "999"}}>
                    <Header>
                        <Row>
                            <Col xs={5}>
                                <Link to="/home">
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </Link>
                            </Col>
                            <Col>
                                <HeaderTitle>لبنیات</HeaderTitle>
                            </Col>
                        </Row>
                    </Header>
                    <SubCategoryFilterMobile categories={categories}/>
                </div>
                <div style={{marginTop: "7rem"}}></div>
                <CardRender/>
            </Container>
        </>
    )
}
const Container = styled.div`
  background-color: #fff;
  margin-bottom: 3.5rem;
`
const Header = styled.div`
  padding: 10px;
  background-color: #fff;
  border-bottom: #a3a3a3 solid;
  border-width: 1px;
`
const HeaderTitle = styled.span`
  font-family: IRANSansWeb_Medium;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  cursor: all-scroll;
  width: 100%;
  padding: 0 20px 0 0;
  overflow-y: hidden;

`
const CategoryTitleWrapper = styled.div`
  font-family: IRANSansWeb_FaNum_Medium;
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 5px;
`

const CategoryBody = styled(ScrollContainer)`
  display: flex;
  flex: 1;
  cursor: all-scroll;
  width: 100%;
  overflow: auto;
  overflow-y: hidden;
`
export default SubCategoryMobile