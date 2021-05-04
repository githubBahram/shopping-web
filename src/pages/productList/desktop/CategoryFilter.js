import React, {useCallback, useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Breakpoint from "../../../component/Breakpoint";

const CategoryFilter = (props) => {
    const categories = ['نبات', 'شکر', 'قند']
    const [collapse, isCollapse] = useState(true)

    return (
        <div>

            <Breakpoint at="lg">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle style={{backgroundColor: "#fff"}} onClick={() => {
                            isCollapse(!collapse)
                        }} as={Card.Header} eventKey="0">
                            <Row>
                                <Col md={10}>دسته بندی</Col>
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
                                            <Form.Check type="checkbox" label="قند"/>
                                            <Form.Check type="checkbox" label="شکر"/>
                                            <Form.Check type="checkbox" label="نبات"/>

                                        </Form.Group>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            </Breakpoint>
            <Breakpoint at="md">
                <span>md layout</span>
            </Breakpoint>
            <Breakpoint at="sm">
                <span>sm layout</span>
            </Breakpoint>

            <Breakpoint at="xs">
                <span>xs layout</span>
            </Breakpoint>
        </div>
    )
}
export default CategoryFilter