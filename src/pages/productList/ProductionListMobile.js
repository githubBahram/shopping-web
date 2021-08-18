import React, {useCallback, useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {Link, useRouteMatch, useLocation, useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faSort, faFilter, faTimes} from "@fortawesome/free-solid-svg-icons";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useDispatch, useSelector} from "react-redux";
import {addProducts} from "../../redux/feature/productSlice";
import CardMobile from "../card/CardMobile";
import CategoryFilter from "./CategoryFilter";
import {getProducts} from "../../api/productApi";

import {useQuery} from "../../helper/helper";

const ProductListMobile = ({categoryId}) => {


    const isEndPage = useSelector(state => state.products.isEndPage)
    let bottomBoundaryRef = useRef(null);
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch();

    const [openFilterPanel, setOpenFilterPanel] = useState(false);
    let query = useQuery();
    const [filterBrands, setFilterBrands] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [pageSize, setPageSize] = useState(12)
    const [products, setProducts] = useState([])
    let location = useLocation();
    const history = useHistory()
    let brandQuery = ''
    if (query.get("brands")) {
        brandQuery = query.get("brands").slice(-1).includes(",") ? query.get("brands").slice(0, -1) : query.get("brands")
    }

    let brandsParam = ''
    if (brandQuery && brandQuery !== "" && brandQuery.length > 0) {
        brandsParam = brandQuery.split(",")
    }

    let productFilter = {
        brands: brandsParam,
        categoryId: categoryId,
        companyId: 1,
        pageNumber: pageNumber,
        pageSize: pageSize,
        isRootCategory: false
    }

    const applyFilter = () => {
        let url = location.pathname
        let brands = ''

        if (filterBrands.length > 0) {
            filterBrands.map((item, index) => (
                brands = brands.concat(item, ",")
            ))

            if (location.pathname.indexOf("?") > -1) {
                url = url.concat("&brands=", brands.slice(0, -1))
            } else {
                url = url.concat("?", "brands=", brands.slice(0, -1))
            }
        }
        console.log("apply filter url")
        console.log(url)

        history.replace(url)

        productFilter.brands = filterBrands
        let result = getProducts(productFilter)
        result.then((respnse) => {
            setProducts(respnse.data.content)
        })
        setOpenFilterPanel(false)

    }

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const scrollObserver = useCallback(
        node => {
            const into = new IntersectionObserver(entries => {
                entries.forEach(en => {
                    if (en.intersectionRatio > 0) {
                        setVisible(true)
                        setPageNumber(pageNumber + 1)
                        setPageSize(pageSize + 12)

                        console.log('page number is:')
                        console.log(pageNumber)
                        let productFilter = {
                            brandId: '',
                            categoryId: categoryId,
                            companyId: 1,
                            pageNumber: pageNumber,
                            pageSize: pageSize,
                            isRootCategory: false
                        }

                        let result = getProducts(productFilter)
                        console.log("result paging ....")
                        console.log(result)
                        console.log('is end page in scrolling')
                        console.log(isEndPage)

                        result.then((respnse) => {
                            setProducts(respnse.data.content)
                        })

                        if (isEndPage) {
                            console.log("is end page")
                        }
                    }
                });
            }).observe(node);

        }, [dispatch])

    const CardRender = () => {
        return (
            <CardContainer>
                {
                    products.map((card) => (
                        <Col xs={4} className="border">
                            <CardMobile id={card.id}
                                        title={card.name}
                                        discountPercent={card.discountValue}
                                        mainAmount={card.price} finalAmount={card.price} image={card.imageLocation}
                            />
                            />

                        </Col>
                    ))
                }
            </CardContainer>
        )
    }
    useEffect(() => {

        if (bottomBoundaryRef.current) {
            console.log('visible:')
            console.log(visible)
            setPageNumber(pageNumber + 1)
            setPageSize(pageSize + 12)
            scrollObserver(bottomBoundaryRef.current);
        }
    }, [bottomBoundaryRef, scrollObserver, isEndPage, openFilterPanel])


    return (
        <>
            <CategoryFilterPanel show={openFilterPanel}>
                <CategoryFilterPanelHeaderWrapper>
                    <CategoryFilterPanelHeader>
                        <CategoryFilterPanelHeaderTitle>فیلترها</CategoryFilterPanelHeaderTitle>
                        <FontAwesomeIcon icon={faTimes} onClick={() => setOpenFilterPanel(false)}/>
                    </CategoryFilterPanelHeader>
                </CategoryFilterPanelHeaderWrapper>
                <CategoryFilter categoryId={categoryId} addFilterBrands={setFilterBrands}
                                setOpenFilterPanel={setOpenFilterPanel} applyFilter={applyFilter}/>
            </CategoryFilterPanel>
            <Container opacityApply={openFilterPanel}>

                <Header>
                    <HeaderWrapper>
                        <CategoryWrapper>
                            <Row>
                                <Col xs={5}>
                                    <Link to="/home">
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </Link>
                                </Col>
                                <Col>
                                    <CategoryTitle>لبنیات</CategoryTitle>
                                </Col>
                            </Row>
                        </CategoryWrapper>
                        <FilterWrapper>
                            <Row>
                                <Col>
                                    <FilterItem>
                                        <FontAwesomeIcon icon={faSort}/>
                                        <span>مرتب سازی</span>
                                    </FilterItem>
                                </Col>
                                <Col>
                                    <FilterItem onClick={() => setOpenFilterPanel(!openFilterPanel)}>
                                        <FontAwesomeIcon icon={faFilter}/>
                                        <span>فیلتر</span>
                                    </FilterItem>
                                </Col>
                            </Row>
                        </FilterWrapper>
                    </HeaderWrapper>
                </Header>
                <Body>
                    <CardRender/>
                    <div ref={bottomBoundaryRef}>

                    </div>
                </Body>
            </Container>
        </>
    )
}


const Container = styled.div`
  opacity: ${(props) => props.opacityApply ? '.1' : 'none'};
`
const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`
const HeaderWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #fff;
`
const CategoryTitle = styled.span`
  font-family: IRANSansWeb_FaNum_Medium;
  text-align: center;
  padding: 1rem;
`
const CategoryWrapper = styled.div`
  padding: 15px;
  border-bottom: rgb(238, 238, 238) solid 1px
`
const FilterWrapper = styled.div`
  background-color: #fff;
  border-bottom: rgb(238, 238, 238) solid 1px
`
const FilterItem = styled.div`
  font-family: IRANSansWeb_FaNum;
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-left: rgb(238, 238, 238) solid .05rem;
  padding: 1rem 1.5rem;
  color: black;
  align-items: center;
  font-size: .85rem;
`
const Body = styled.div`
  margin-top: 6.3rem;
  background-color: #fff;
  padding: .5rem;
  margin-bottom: 4rem;
`

const CategoryFilterPanel = styled.div`
  position: fixed;
  bottom: ${(props) => props.show ? '0px' : '-85%'};
  width: 100%;
  height: 85%;
  background: #fafafa;
  transition: .5s;
  z-index: 9999999;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`
const CategoryFilterPanelHeaderWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
`

const CategoryFilterPanelHeader = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding: 1rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`
const CategoryFilterPanelHeaderTitle = styled.span`
  font-family: IRANSansWeb_Bold;
`

const CategoryFilterWrapper = styled.div`
  padding: 1rem;
`
const CardContainer = styled(Row)`
`
export default ProductListMobile