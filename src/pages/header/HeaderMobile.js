import styled from 'styled-components'
import React, {useEffect, useState} from 'react';
import {Header} from "./HeaderStyle"
import {debounce} from "../../helper/helper";
import HeaderFixed from "../../component/HeaderFixed";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSortDown} from "@fortawesome/free-solid-svg-icons"
import {faMapPin} from "@fortawesome/free-solid-svg-icons"
import {faUser} from "@fortawesome/free-solid-svg-icons"
import SearchComponent from "../../component/SearchComponent";


const HeaderMobile = () => {
    return (
        <>
            <Header position="fixed"  height="7rem" visible={true}>
                <Row>
                    <Col xs={4}>
                        <Logo>شهروند</Logo>
                    </Col>
                    <Col xs={6}>
                        <FontAwesomeIcon icon={faMapPin} color="#fff" style={{marginLeft: "5px"}}/>
                        <Address>انتخاب آدرس</Address>
                        <FontAwesomeIcon icon={faSortDown} color="#fff" style={{marginRight: "5px"}}/>

                    </Col>

                    <Col>
                        <FontAwesomeIcon icon={faUser} color="#fff" style={{textAlign: "center"}}/>
                    </Col>
                </Row>
                <Line/>
                <Row>
                    <Col>
                        <SearchComponent placeholder="جستجو محصول یا برند"/>
                    </Col>
                </Row>
            </Header>
        </>
    )
}
const Logo = styled.span`
  font-family: IRANSansWeb_FaNum_Black;
  color: #fff;
`

const Address = styled.span`
  color: #fff;
  font-family: IRANSansWeb;
  font-size: 13px;
`
const ReceiveDate = styled.span`
  color: #fff;
  font-family: IRANSansWeb;
  font-size: 13px;
`
const Line = styled.div`
  width: 100%;
  height: .05rem;
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
`
export default HeaderMobile