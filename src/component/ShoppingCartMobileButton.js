import React from 'react'
import styled from 'styled-components'
import Button from "react-bootstrap/Button";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";


const ShoppingCartMobileButton = () => {
    const order = useSelector(state => state.orders);
    console.log('orders')
    console.log(order)
    let count = 0
    order.map(item => count = count + item.count)
    if (count === 0) {
        return (
            <>
                <FontAwesomeIcon icon={faShoppingCart}/>
                <TabTitle>سبد خرید</TabTitle>
            </>
        )
    }
    return (
        <>
            <CountOrder>
                {count}
            </CountOrder>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <TabTitle>سبد خرید</TabTitle>
        </>
    )
}

const TabTitle = styled.span`
  font-family: IRANSansWeb_Medium;
  font-size: 11px;
`
const CountOrder = styled.span`
  font-family: IRANSansWeb_FaNum_Bold;
  font-size: .77rem;
  height: 1.2rem;
  width: 1.2rem;
  padding: 1px;
  background-color: red;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  top: -.4rem;
  left: 3rem;
  border: #fff solid .05rem;





`
export default ShoppingCartMobileButton
