import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchCategories, selectAllCategories} from "../redux/feature/categorySlice";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import FlatList from 'flatlist-react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import styled from 'styled-components'

const axios = require("axios");

const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector(selectAllCategories)
    const categoryStatus = useSelector(state => state.categories.status)

    const [file, setFile] = useState(null)
    const [name, setName] = useState('')
    const [result, setResult] = useState('')

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
                setResult('success')
            }).catch((error) => {
            alert(error)
        });
    }

    useEffect(() => {
        console.log('rerender')
        if (categoryStatus === 'idle') {
            dispatch(fetchCategories())
        }
    }, [categoryStatus, dispatch, result])
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

            <CategorieItmes/>
        </Form>

    )
}


const CategoryList = () => {
    const categories = useSelector(selectAllCategories)
    const items = categories.categories

    const brandRender = items.map(item => <Col xs={12} md={2}><Card className="p-3 category-card">
        <Card.Img className="category-image" variant="center"
                  src={`http://localhost:8080/image-management/image/${item.id}`}/>
        <Card.Body className="text-center">
            <Card.Title className="category-card-body-title">{item.name}</Card.Title>
        </Card.Body>
    </Card></Col>)
    return (<> {brandRender} </>)
}

const CategorieItmes = () => {
    const width = window.innerWidth;

    return (
        <div className="category-container">

            <FirstCategory backgroundColor="#fbf7df">
                <ImageWrapper backgroundColor="#e6f4f9">
                    <FirstCategoryImage className="first-category-image"
                                        src="https://api.snapp.market/uploads/images/mobile-sliders/5f9970022e5c7.png"/>
                </ImageWrapper>
                <FirstCategoryTitle>دستمال و شوینده</FirstCategoryTitle>
                <CategoryArrow className="category-arrow">.</CategoryArrow>
            </FirstCategory>

            <FirstCategory backgroundColor="#e6f4f9">
                <ImageWrapper backgroundColor="#fbf7df">
                    <FirstCategoryImage className="first-category-image"
                                        src="https://api.snapp.market/uploads/images/mobile-sliders/5f9970351dc73.png"/>
                </ImageWrapper>
                <FirstCategoryTitle>لبنیات</FirstCategoryTitle>
                <CategoryArrow className="category-arrow">.</CategoryArrow>
            </FirstCategory>

            <FirstCategory backgroundColor="#fceee0">
                <ImageWrapper backgroundColor="#fceee0">
                    <FirstCategoryImage className="first-category-image"
                                        src="https://api.snapp.market/uploads/images/mobile-sliders/5f9970022e5c7.png"/>
                </ImageWrapper>
                <FirstCategoryTitle>خواربار</FirstCategoryTitle>
                <CategoryArrow className="category-arrow">.</CategoryArrow>
            </FirstCategory>


        </div>
    )
}
const FirstCategory = styled.div`
  @media only screen and (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    background-color: ${(props)=>props.backgroundColor};
    align-items: center;
     border-radius: 5px;
    border-color: ${(props)=>props.backgroundColor};
    border-style:  solid;
    border-width: 1px;
    margin: 1px;
    width: 30vw;
    padding: 20px 20px 20px 20px;
  }

  @media only screen and (max-width: 769px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    margin: 1px;
    width: 28vw;
    padding: 0;
  }
`
const FirstCategoryImage = styled.img`
  width: 8rem;
  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`
const ImageWrapper = styled.div`
  @media only screen and (max-width: 769px) {
    background-color: ${(props)=>props.backgroundColor};
    width: 100%;
  }
`
const CategoryArrow = styled.span`
  @media only screen and (max-width: 769px) {
    display: none;
  }
`
const FirstCategoryTitle = styled.span`
  @media only screen and (max-width: 769px) {
    text-align: center;
    font-size: 15px;
  }
`


export default Categories
