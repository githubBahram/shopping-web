import React from 'react'
import styled from 'styled-components'
import HeaderFixed from "../component/HeaderFixed";
import SubCategory from "./SubCategory";
import ScrollRendering from "./ScrollRendering";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navigator from "../component/Navigator";

const SubCategoryPage = () => {

    return (
        <>
            <HeaderFixed/>
            <Container fluid className="pl-4 pr-4" style={{marginTop: '6rem'}}>
                <Row>
                    <Col>
                        <Filter className=" item-sticky pr-3">
                            <h4 className="font-face-md " style={{marginBottom: '1rem', fontSize: "16px"}}>دسته بندی
                                ها:</h4>
                            <Row className="p1" ><Col className="p-2 ml-3 mr-3 font-face-is">شیر</Col></Row>
                            <Row className="p1" ><Col className="p-2 ml-3 mr-3 font-face-is">پنیر</Col></Row>
                            <Row className="p1" ><Col className="p-2 ml-3 mr-3 font-face-is">ماست</Col></Row>
                            <Row className="p1" ><Col className="p-2 ml-3 mr-3 font-face-is">دوغ</Col></Row>
                            <Row className="p1" ><Col className="p-2 ml-3 mr-3 font-face-is">کره</Col></Row>
                            <Row className="p1" ><Col className="p-2 ml-3 mr-3 font-face-is">خامه</Col></Row>
                            <Row className="p1" ><Col className="p-2 ml-3 mr-3 font-face-is">کشک</Col></Row>
                        </Filter>
                    </Col>
                    <Col md={10}>
                        <Navigator>
                            لبنیات
                        </Navigator>
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
                    </Col>
                </Row>

            </Container>
        </>

    )
}

const Filter = styled.div`
  background-color: #fff;
  padding: 10px;
  text-align: right;
`

const CategoryBody = styled.div`
`

export default SubCategoryPage