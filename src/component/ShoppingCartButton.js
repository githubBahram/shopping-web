import React, {useEffect} from 'react'
import styled from 'styled-components'
import Button from "react-bootstrap/Button";


const ShoppingCartButton = () => {
    return(
        <>
            <CartButton variant="light">سبد خرید
                <PurchasesCount>0</PurchasesCount>
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
  border-radius: 40px;
  font-family: IRANSansWeb_FaNum;
`
export default ShoppingCartButton
