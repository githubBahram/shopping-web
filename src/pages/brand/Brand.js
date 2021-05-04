import React, {useState} from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from 'styled-components'
import { saveBrand  } from "../../redux/feature/brandSlice";
import {useDispatch} from "react-redux";

const Brand = () => {
    const [file, setFile] = useState(null)
    const [thumbnail, setThumbnail] = useState(null)
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const submitForm = (e) => {

        console.log(name)
        const formData = new FormData();
        formData.append('image', file)
        formData.append('thumbnail', thumbnail)
        formData.append('name', name)
        console.log('form data before dispath')
        console.log(formData)
        dispatch(saveBrand(formData))

    }


    return (
        <Container>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        <BrandName> ثبت برند </BrandName>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col controlId="formBasicEmail" className="m-r-2 text-align-right">
                                        <Form.Label className="text-align-right">نام برند</Form.Label>
                                        <Form.Control type="input" onChange={(e) => setName(e.target.value)}
                                                      placeholder="نام برند را وارد کنید"/>
                                    </Col>
                                    <Col>
                                        <Form.Label className="text-align-right">تصویر برند</Form.Label>
                                        <Form.File style={{direction:"rtl"}} id="exampleFormControlFile1"
                                                   onChange={(e) => setFile(e.target.files[0])}
                                                   label="تصویر بزرگ برند"
                                                   data-browse="انتخاب فایل"
                                                   lang="ar"
                                                   custom
                                        />
                                    </Col>
                                    <Col>
                                        <Form.File id="exampleFormControlFile1"
                                                   onChange={(e) => setThumbnail(e.target.files[0])}
                                                   label="تصویر کوچک برند"/>
                                    </Col>
                                    <Col style={{
                                        display:"flex",
                                        alignItems:"flex-end"
                                    }}>
                                        <SaveButton variant="primary" type="button" onClick={submitForm}>
                                            ثبت
                                        </SaveButton>
                                    </Col>
                                </Row>

                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    )
}

const BrandName = styled.span`
  font-family: IRANSansWeb_FaNum_Medium;
`
const Container = styled.div`
  font-family: IRANSansWeb;
  margin-top: 15px;
`
const SaveButton = styled(Button)`
  display: flex;
  align-self: flex-end;
`
export default Brand