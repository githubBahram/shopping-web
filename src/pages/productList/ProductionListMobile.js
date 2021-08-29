import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
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


import {useQuery} from "../../helper/helper";
import useFetch from "./useFetch";

const ProductListMobile = ({categoryId}) => {

    let bottomBoundaryRef = useRef(null);

    const [openFilterPanel, setOpenFilterPanel] = useState(false);

    const [filterBrands, setFilterBrands] = useState([])
    const [brandParam, setBrandParam] = useState([])

    const [page, setPage] = useState(1);
    const [reset,setReset]=useState(false)
    const {loading, error, list} = useFetch(categoryId, brandParam, page,reset);



    let location = useLocation();
    const history = useHistory()

    const applyFilter = () => {

        console.log("called method: apply filter")
        let url = location.pathname
        let brands = ''

        console.log("apply filter brand:")
        console.log(filterBrands)

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

        setBrandParam(filterBrands)
        setOpenFilterPanel(false)
        setReset(true)
        setPage(1)
        window.scrollTo(0, 0);
        history.replace(url)
    }
    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
            setReset(false)
        }
    }, []);


    const CardRender = () => {
        return (
            <CardContainer>
                {
                    list.map((card) => (
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
            const option = {
                root: null,
                rootMargin: "20px",
                threshold: 0
            };
            const observer = new IntersectionObserver(handleObserver, option);

            if (bottomBoundaryRef.current) {
                observer.observe(bottomBoundaryRef.current);
            }
        }
        , [handleObserver])


    return (
        <>
            {openFilterPanel &&
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

            }

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
                    {loading && <p>Loading...</p>}
                    {error && <p>Error!</p>}

                    <div ref={bottomBoundaryRef}/>

                </Body>

            </Container>
        </>
    )
}


const Container = styled.div`
  opacity: $ {(props)= > props . opacityApply ? '.1': 'none'
  };
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
  bottom: $ {(props)= > props . show ? '0px': '-85%'
  };
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