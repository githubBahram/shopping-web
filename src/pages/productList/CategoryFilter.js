import React, {useEffect, useState} from 'react'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import {Link, useParams, useHistory, useLocation} from "react-router-dom";
import Breakpoint from "../../component/Breakpoint";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import 'react-sliding-side-panel/lib/index.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretUp, faFilter, faCaretDown} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import {getBrandsByCategoryAndCompany} from "../../api/brandApi";
import {selectCurrentCompany} from "../../redux/feature/companySlice";
import {text} from "@fortawesome/fontawesome-svg-core";
import {useQuery} from "../../helper/helper";

const CategoryFilter = ({setOpenFilterPanel, categoryId, addFilterBrands,applyFilter}) => {

    const history = useHistory();
    let query = useQuery();
    console.log("query brands")
    console.log(query.get("brands"))
    let brandQuery = ''
    if (query.get("brands")) {
        brandQuery = query.get("brands").slice(-1).includes(",") ? query.get("brands").slice(0, -1) : query.get("brands")
    }
    const removeFiltering = () => {
        setOpenFilterPanel(false)
        let url = '/categories/'
        url = url.concat( categoryId)
        console.log("url after remove is :")
        console.log(url)
        setBrandChecked([])
        history.replace(url)
    }
    const [collapse, isCollapse] = useState(true)

    const [brandChecked, setBrandChecked] = useState(brandQuery.includes(",") || brandQuery !== "" ? brandQuery.split(",") : [])

    console.log("brand check initial...")
    console.log(brandChecked)

    const setBrand = (id) => {

        let index = brandChecked.indexOf(id);
        if (index > -1) {
            setBrandChecked(brandChecked.filter(item => item !== id))
        } else {
            setBrandChecked([...brandChecked, id])
        }
    }


    const BrandItemList = (props) => {

        const [brands, setBrands] = useState([])
        const data = useSelector(selectCurrentCompany)

        useEffect(() => {
            const brandsData = getBrandsByCategoryAndCompany(categoryId, data.currentCompany.id)
            brandsData.then((res) => {
                setBrands(res)
            })
        }, [])

        return brands.map((item, idx) => (
            <Form.Check defaultChecked={brandChecked.indexOf(String(item.id)) > -1} id={idx} onClick={() => {
                setBrand(String(item.id))
            }} type="checkbox"
                        label={item.name}/>
        ))
    }

    useEffect(() => {
        addFilterBrands(brandChecked)
        console.log('default brandChecked')
        console.log(brandChecked)
    }, [brandChecked])
    return (
        <div>
            <Accordion className="p-3" defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle style={{backgroundColor: "#fff"}} onClick={() => {
                        isCollapse(!collapse)
                    }} as={Card.Header} eventKey="0">

                        <HeaderCategoryWrapper>
                            <HeaderCategoryTitle>برند</HeaderCategoryTitle>
                            <span>
                                {collapse ?
                                    <FontAwesomeIcon icon={faCaretUp} color="#f2f2f2"/>
                                    :
                                    <FontAwesomeIcon icon={faCaretDown} color="#f2f2f2"/>
                                }
                            </span>
                        </HeaderCategoryWrapper>

                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form>
                                <div style={{marginRight: "10px", fontFamily: "IRANSansWeb", color: "#8a8a8a"}}>
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
                <ConfirmContainer>
                    <Confirm>

                        <Button onClick={removeFiltering} style={{width: '45%'}} variant="outline-dark">حذف
                            فیلتر</Button>

                        <Button onClick={applyFilter} style={{width: '45%'}} variant="primary">اعمال</Button>
                    </Confirm>
                </ConfirmContainer>
            </Breakpoint>
        </div>
    )
}

const ConfirmContainer = styled.div`

  width: 100%;
  position: absolute;
  bottom: 0;
  height: 4rem;
  padding: .2rem;
  border-color: gray;
  border-width: 0 0 1px 0;
  border-top: rgb(238, 238, 238) solid 1px;
  color: #fff;
`

const Confirm = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  font-family: IRANSansWeb_FaNum_Medium;
  width: 100%;
  height: 100%;
  padding: .4rem;
  background-color: #fff;
`
const HeaderCategoryWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`
const HeaderCategoryTitle = styled.span`
  font-family: IRANSansWeb_Bold;
`
export default CategoryFilter