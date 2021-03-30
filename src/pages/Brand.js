import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchBrands, selectAllBrands} from "../redux/feature/brandSlice";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

const axios = require("axios");

const Brand = () => {
    const dispatch = useDispatch()
    const brands = useSelector(selectAllBrands)
    const brandStatus = useSelector(state => state.brands.status)

    const [file, setFile] = useState(null)
    const [name, setName] = useState('')

    const submitForm = (e) => {
        const formData = new FormData();
        formData.append('image', file)
        formData.append('name', name)

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:8080/category-management/category", formData, config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
            alert(error)
        });
    }

    useEffect(() => {
        if (brandStatus === 'idle') {
            dispatch(fetchBrands())
        }
    }, [brandStatus, dispatch])
    return (
        <Form>
            <Form.Row>
                <Form.Group controlId="formBasicEmail" className="m-r-2">
                    <Form.Label>نام دسته بندی محصول</Form.Label>
                    <Form.Control type="input" onChange={(e) => setName(e.target.value)}
                                  placeholder="نام دسته بندی را وارد کنید"/>
                </Form.Group>

                <Form.Group>
                    <Form.File id="exampleFormControlFile1" onChange={(e) => setFile(e.target.files[0])}
                               label="تصویر دسته بندی"/>
                </Form.Group>
            </Form.Row>
            <Button variant="primary" type="button" onClick={submitForm}>
                ثبت
            </Button>
        </Form>

    )
}

const BrandList = (props) => {

    const items = props.items
    const brandRender = items.map(item => <span key={item.id} className="m-3">{item.name}</span>)
    return (<div>{brandRender}</div>)
}
export default Brand
