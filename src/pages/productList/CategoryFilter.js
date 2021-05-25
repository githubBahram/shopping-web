import React, {useEffect, useState} from 'react'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Breakpoint from "../../component/Breakpoint";
import {useDispatch, useSelector} from "react-redux";

const CategoryFilter = (props) => {
    const categories = ['نبات', 'شکر', 'قند']
    const [collapse, isCollapse] = useState(true)
    const brands = useSelector(state => state.brands.brands);
    const brandsFiltering = useSelector(state => state.products.filter.brands);
    const dispatch = useDispatch();
    const [brandChecked, setBrandChecked] = useState([])

    const setBrand = (id) => {
        let index = brandChecked.indexOf(id);
        if (index > -1) {
            brandChecked.splice(index, 1);
        } else {
            setBrandChecked([...brandChecked, id])
        }
    }

    const BrandItemList = (props) => {
        const {brandsFilter} = props

        return brands.map((item, idx) => (
            <Form.Check id={idx} onClick={() => {
                setBrand(item.id)
            }} defaultChecked={brandsFilter.indexOf(item.id) > -1} type="checkbox"
                        label={item.name}/>
        ))
    }

    useEffect(() => {
        brandsFiltering.forEach((item) => {
            brandChecked.push(item)
        })
    }, [])
    return (
        <div>

            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle style={{backgroundColor: "#fff"}} onClick={() => {
                        isCollapse(!collapse)
                    }} as={Card.Header} eventKey="0">
                        <Row>
                            <Col md={10}>برند</Col>
                            <Col>{
                                collapse ? 1 : 2
                            }</Col>
                        </Row>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form>
                                <div style={{marginRight: "10px", fontFamily: "IRANSansWeb"}}>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <BrandItemList brandsFilter={brandChecked}/>
                                    </Form.Group>
                                </div>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>

            <Breakpoint at="xs">
                <span>xs layout</span>
            </Breakpoint>
        </div>
    )
}
export default CategoryFilter