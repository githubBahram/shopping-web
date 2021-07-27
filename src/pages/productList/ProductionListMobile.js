import React, {useCallback, useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {Link, useRouteMatch, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faSort, faFilter, faTimes} from "@fortawesome/free-solid-svg-icons";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useDispatch, useSelector} from "react-redux";
import {addProducts} from "../../redux/feature/productSlice";
import CardMobile from "../card/CardMobile";
import CategoryFilter from "./CategoryFilter";

const ProductListMobile = (props) => {

    const products = useSelector(state => state.products.productList);
    const isEndPage = useSelector(state => state.products.isEndPage)
    let bottomBoundaryRef = useRef(null);
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch();
    let {path, url} = useRouteMatch();
    const [openFilterPanel, setOpenFilterPanel] = useState(false);
    let query = useQuery();
    const [filterBrands, setFilterBrands] = useState([])
    function useQuery() {
        return new URLSearchParams(useLocation().search);
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
            <CardContainer>
                {
                    products.map((item) => (
                        <Col xs={4} className="border">
                            <CardMobile id={item.id}
                                        title={item.title}
                                        discountPercent={item.discountPercent}
                                        mainAmount={item.mainAmount} finalAmount={item.finalAmount} image={item.image}
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
                <CategoryFilter addFilterBrands={setFilterBrands} setOpenFilterPanel={setOpenFilterPanel}/>
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