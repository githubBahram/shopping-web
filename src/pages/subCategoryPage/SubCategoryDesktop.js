import React from 'react'
import styled from 'styled-components'
import HeaderFixed from "../../component/HeaderFixed";
import SubCategory from "../SubCategory";
import ScrollRendering from "../ScrollRendering";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navigator from "../../component/Navigator";
import {Link} from "react-router-dom";

const SubCategoryDesktop = (props) => {
    const {categories} = props
    const FilterItem = () => {
        return (
            <>
                {
                    categories.map((item) => (
                        <Row  className="p1"><Col className="p-2 ml-3 mr-3 font-face-is"><Link
                            to={`/categories/${item.id}`}>{item.name}</Link></Col></Row>
                    ))
                }
            </>
        )
    }

    const CategoryList = (props) => {
        const {data} = props
        return (
            <>
                {
                    data.map((item) => (
                        <div>
                            <ScrollRendering>
                                <SubCategory title={item.name} categoryId={item.id}/>
                            </ScrollRendering>
                        </div>
                    ))
                }
            </>
        )
    }

    return (
        <>
            <HeaderFixed/>
            <Container fluid style={{marginTop: '6rem'}}>
                <Row>
                    <Col>
                        <Filter className=" item-sticky pr-3">
                            <h4 className="font-face-md " style={{marginBottom: '1rem', fontSize: "16px"}}>دسته بندی
                                ها:</h4>
                            <FilterItem/>
                        </Filter>
                    </Col>
                    <Col md={10}>
                        <Navigator>
                            لبنیات
                        </Navigator>
                        <CategoryBody>
                            <CategoryList data={categories}/>
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

export default SubCategoryDesktop