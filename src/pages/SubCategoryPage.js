import React, {useEffect} from 'react'
import styled from 'styled-components'
import HeaderFixed from "../component/HeaderFixed";
import SubCategory from "./SubCategory";
import ScrollRendering from "./ScrollRendering";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
                    <Col md={9}>
                        <CategoryHeader>
                            لبنیات
                        </CategoryHeader>
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
const ContainerRoot = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  direction: rtl;
`
const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: 5.5rem;
  text-align: right;
  padding: 15px;

`
const Filter = styled.div`

  background-color: #fff;
  padding: 10px;
  text-align: right;

`
const CategoryWrapper = styled.div`


  margin-right: 15px;
`
const CategoryHeader = styled.div`
  background-color: #fff;
  text-align: right;
  border-radius: .4rem;
  padding: 10px;
  margin-bottom: 10px;
  font-family: IRANSansWeb;
`
const CategoryBody = styled.div`
`
const CategoryItem = styled(Col)`

`
export default SubCategoryPage