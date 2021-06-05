import React, {useState} from "react";
import styled from "styled-components";
import Breakpoint from "../../component/Breakpoint";
import HeaderShoppingCartMobile from "./HeaderShoppingCartMobile";
import {ShoppingCartListContainer} from "./ShoppingCartStyle";

const HeaderShoppingCart = () => {

    return (
        <>
            <Breakpoint at="xs">
                <HeaderShoppingCartMobile/>
            </Breakpoint>
            <Breakpoint at="md">
            </Breakpoint>
        </>
    )
}
export default HeaderShoppingCart