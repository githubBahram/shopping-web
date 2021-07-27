import React from 'react'
import styled from 'styled-components'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link, NavLink} from "react-router-dom";

const SortProduct = ({setSortFiltering}) => {

    return (
        <>
            <Navbar bg="white" variant="light">
                <Navbar.Brand className="navbar-brand" as={"span"}>مرتب سازی براساس:</Navbar.Brand>
                <Nav className="sort-product">
                    <Nav.Link onClick={() => setSortFiltering("assumption")}> <span>پیش فرض</span></Nav.Link>
                    <Nav.Link><span>گران ترین</span> </Nav.Link>
                    <Nav.Link><span>ارزان ترین</span></Nav.Link>
                    <Nav.Link><span>بیشترین مبلغ تخفیف</span></Nav.Link>
                    <Nav.Link><span>بیشترین درصد تخفیف</span></Nav.Link>
                    <Nav.Link><span>پرفروش ترین</span></Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
export default SortProduct


