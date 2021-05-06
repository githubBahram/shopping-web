import React from 'react'
import styled from 'styled-components'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import SubCategoryFilterMobile from "./SubCategoryFilterMobile";
import ScrollRendering from "../ScrollRendering";
import SubCategory from "../SubCategory";


const SubCategoryMobile = () => {
    return (
        <>
            <Container>
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
                <SubCategoryFilterMobile/>
                <CategoryBody>
                    <ScrollRendering>
                        <SubCategory title="شیر"/>
                    </ScrollRendering>
                    <ScrollRendering>
                        <SubCategory title="ماست"/>
                    </ScrollRendering>
                    <ScrollRendering>
                        <SubCategory title="کره"/>
                    </ScrollRendering>
                    <ScrollRendering>
                        <SubCategory title="خامه"/>
                    </ScrollRendering>
                    <ScrollRendering>
                        <SubCategory title="پنیر"/>
                    </ScrollRendering>
                </CategoryBody>
            </Container>
        </>
    )
}
const Container = styled.div`

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
const CategoryBody = styled.div`
`
export default SubCategoryMobile