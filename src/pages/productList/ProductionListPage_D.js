import React, {useCallback, useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useParams} from 'react-router-dom';
import HeaderFixed from "../../component/HeaderFixed";
import Navigator from "../../component/Navigator";
import SortProduct from "../SortProduct";
import Card from "../card/Card";
import ScrollContainer from "react-indiana-drag-scroll";
import {useDispatch, useSelector} from "react-redux";
import {addProducts} from "../../redux/feature/productSlice";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import CategoryFilter from "./CategoryFilter";
import {getProducts} from "../../api/productApi";

const ProductListPage_D = (props) => {

    const {categoryId} = props


    let productFilter = {
        brandId: '',
        categoryId: categoryId,
        companyId: 1,
        pageNumber: 1,
        pageSize: 12,
        isRootCategory: false
    }

    const [products, setProducts] = useState([])
    const isEndPage = false

    let bottomBoundaryRef = useRef(null);
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch();

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    const PaginationBasic = () => {
        return (
            <div>
                <Pagination>{items}</Pagination>
                <br/>
            </div>
        )
    }

    const scrollObserver = useCallback(
        node => {
            const into = new IntersectionObserver(entries => {
                entries.forEach(en => {
                    if (en.intersectionRatio > 0) {
                        setVisible(true)
                        dispatch(addProducts())
                        console.log('is end page in scrolling')
                        console.log(isEndPage)

                        if (isEndPage) {
                            console.log("is end page")
                        }
                    }
                });
            }).observe(node);

        }, [dispatch])

    const CardRender = () => {
        return (
            <>
                {
                    products.map((card) => (
                        <CardWrapper id={card.id}>
                            <Card id={card.id}
                                  title={card.name}
                                  discountPercent={card.discountValue}
                                  mainAmount={card.price} finalAmount={card.price} image={card.imageLocation}
                            />
                        </CardWrapper>
                    ))}
            </>
        )
    }

    useEffect(() => {

        let result = getProducts(productFilter)
        result.then((respnse) => {
            setProducts(respnse.data.content)
        })

        if (bottomBoundaryRef.current) {
            scrollObserver(bottomBoundaryRef.current);
        }

    }, [sort, bottomBoundaryRef, scrollObserver, isEndPage])

    return (
        <>
            <HeaderFixed/>
            <Container fluid style={{marginTop: '6rem',}}>
                <Row>
                    <Col>
                        <Filtering>
                            <CategoryFilter/>
                        </Filtering>
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col><Navigator></Navigator></Col>
                        </Row>
                        <Row>
                            <Col>
                                <SortWrapper>
                                    <SortProduct/>
                                </SortWrapper>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                {visible &&
                                <CardContainer>
                                    <CardRender/>
                                </CardContainer>
                                }
                                <div ref={bottomBoundaryRef}>

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <PaginationWrapper>
                                    <PaginationBasic/>
                                </PaginationWrapper>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

const Filtering = styled(Col)`
`

const SortWrapper = styled(Col)`
  background-color: #fff;
  border: 0.1rem solid rgb(238, 238, 238);
`

const CardWrapper = styled.div`
  display: flex;
  flex: 1;
  border-left: 0.1rem solid rgb(238, 238, 238);
  border-bottom: 0.1rem solid rgb(238, 238, 238);
  padding-bottom: 10px;
`

const CardContainer = styled(ScrollContainer)`
  display: flex;
  flex: 1;
  cursor: all-scroll;
  width: 100%;
  border-width: 0.1rem;
  user-select: none;
  flex-wrap: wrap;
  background-color: #fff;
`
const PaginationWrapper = styled.div`
  display: flex;
  flex: 1;
  padding-top: 2.5rem;
  justify-content: center;
  align-items: center;
  height: 4rem;
  background-color: #fff;
  border: 0.1rem solid rgb(238, 238, 238);
`

export default ProductListPage_D