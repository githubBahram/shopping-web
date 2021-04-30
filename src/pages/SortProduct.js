import React from 'react'
import styled from 'styled-components'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link, NavLink} from "react-router-dom";

const SortProduct = () => {
    return (
        <>
            <Navbar bg="white" variant="light">
                <Navbar.Brand className="navbar-brand" as={"span"}>مرتب سازی براساس:</Navbar.Brand>
                <Nav className="sort-product">
                    <Nav.Link as={NavLink} to="/productList/rank"> <span>پیش فرض</span></Nav.Link>
                    <Nav.Link as={NavLink} to="/productList/price"><span>گران ترین</span> </Nav.Link>
                    <Nav.Link as={NavLink} to="/productList/price2"><span>ارزان ترین</span></Nav.Link>
                    <Nav.Link as={NavLink} to="/productList/price3"><span>بیشترین مبلغ تخفیف</span></Nav.Link>
                    <Nav.Link as={NavLink}  to="/productList/price4"><span>بیشترین درصد تخفیف</span></Nav.Link>
                    <Nav.Link  as={NavLink} to="/productList/price5"><span>پرفروش ترین</span></Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
export default SortProduct


