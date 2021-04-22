import React from 'react'
import styled from 'styled-components'
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";


const ShoppingCartButton = () => {
    const order = useSelector(state => state.orders);
    console.log('orders')
    console.log(order)
    let count = 0
    order.map(item => count = count + item.count)
    return (
        <>
            <CartButton variant="light">سبد خرید
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
  width: 50px;
  height: 50px;
  font-size: 10px;
  padding: 10px;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 70px;
  font-family: IRANSansWeb_FaNum_Black;
`
export default ShoppingCartButton
