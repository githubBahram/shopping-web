import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";
import DrawerLeftPanel from "./DrawerLeftPanel";
import ShoppingCartPage from "../pages/shoppingCart/ShoppingCartPage";


const ShoppingCartButton = () => {
    const order = useSelector(state => state.orders);
    let count = 0
    order.map(item => count = count + item.count)

    const [showShoppingCart, setShowShoppingCart] = useState(false)

    const showShoppingCartPanel = () => {
        setShowShoppingCart(!showShoppingCart)
        document.body.style.overflow = "hidden"
    }

    useEffect(() => {
    }, [showShoppingCart])

    return (
        <>
            <DrawerLeftPanel   showEvent={setShowShoppingCart} show={showShoppingCart}>
                <ShoppingCartPage/>
            </DrawerLeftPanel>

            <CartButton onClick={showShoppingCartPanel} variant="light">سبد خرید
                <PurchasesCount>{count}</PurchasesCount>
            </CartButton>
        </>
    )
}

const CartButton = styled(Button)`
  color: rgb(36, 70, 245);
  background-color: #fff;
  font-family: IRANSansWeb_Medium;
`
const PurchasesCount = styled.span`
  background-color: #f2f7ff;
  font-size: 10px;
  padding: 10px;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  font-family: IRANSansWeb_FaNum_Black;
`
export default ShoppingCartButton
