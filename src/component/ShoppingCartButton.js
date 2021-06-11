import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import DrawerLeftPanel from "./DrawerLeftPanel";
import ShoppingCartPage from "../pages/shoppingCart/ShoppingCartPage";
import {openDrawPanel} from "../redux/feature/drawPanelSlice";


const ShoppingCartButton = () => {
    const order = useSelector(state => state.orders);
    let count = 0
    order.map(item => count = count + item.count)
    const dispatch = useDispatch();
    const [showShoppingCart, setShowShoppingCart] = useState(false)

    const showShoppingCartPanel = () => {
       dispatch(openDrawPanel())
    }

    useEffect(() => {
    }, [showShoppingCart])

    return (
        <>


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
