import React from 'react'
import styled from 'styled-components'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import SubCategoryFilterMobile from "./SubCategoryFilterMobile";
import CardMobile from "../../component/CardMobile";
import ScrollContainer from "react-indiana-drag-scroll";
import categories from "../../data/categories";


const SubCategoryMobile = () => {

    const CardRender = (card, idx) => {
        return (
            < >
                {
                    categories.map((card) => (
                        <div style={{
                            flex: "0 0 auto",
                            width: " calc(40%)",
                            borderLeft:" rgb(238, 238, 238) solid 1px",
                          padding:"5px"
                        }}>
                            <CardMobile id={card.id}
                                        title={card.title}
                                        discountPercent={card.discountPercent}
                                        mainAmount={card.mainAmount} finalAmount={card.finalAmount} image={card.image}
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
                    <SubCategoryFilterMobile/>
                </div>
                <ScrollContainer>
                    <CategoryBody>

                        <CardRender/>


                    </CategoryBody>
                </ScrollContainer>
            </Container>
        </>
    )
}
const Container = styled.div`
background-color: #fff;
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
  padding: 10px;
  margin-top: 7rem;
  margin-bottom: 3.5rem;
  display: flex;
`
export default SubCategoryMobile