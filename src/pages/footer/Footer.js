import React from 'react';
import styled from 'styled-components'
import Breakpoint from "../../component/Breakpoint";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faList, faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import ShoppingCartMobileButton from "../../component/ShoppingCartMobileButton";

const Footer = () => {
    return (
        <>
            <Breakpoint at="xs">
                <Container>
                    <Tabs>
                        <Tab>
                            <Nav.Link as={NavLink} to="/home">
                                <TabItem>
                                    <FontAwesomeIcon icon={faHome}/>
                                    <TabTitle>خانه</TabTitle>
                                </TabItem>
                            </Nav.Link>
                        </Tab>
                        <Tab>
                            <Nav.Link as={NavLink} to="/category">
                                <TabItem>
                                    <FontAwesomeIcon icon={faList}/>
                                    <TabTitle>دسته بندی</TabTitle>
                                </TabItem>
                            </Nav.Link>
                        </Tab>
                        <Tab>
                            <Nav.Link as={NavLink} to="/shoppingCart">
                                <TabItem>
                                    <ShoppingCartMobileButton/>
                                </TabItem>
                            </Nav.Link>
                        </Tab>
                    </Tabs>
                </Container>
            </Breakpoint>
        </>
    )
}
const Container = styled.div`
  background-color: #fff;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 3.5rem;
  border-color: gray;
  border-width: 0 0 1px 0;
  border-top: rgb(238, 238, 238) solid 1px;
  padding-top: .4rem;
`
const Tabs = styled(Row)`
 
`
const Tab = styled(Col)`

`
const TabTitle = styled.span`
  font-family: IRANSansWeb_Medium;
  font-size: 11px;
`
const TabItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default Footer