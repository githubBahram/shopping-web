import React, {useState} from 'react'
import styled from 'styled-components'
import Button from "react-bootstrap/Button";


export const ShoppingCartListContainer = styled.div`
margin-bottom: 3.5rem;
`

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 14px;

`

export const ContainerWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: .5rem;
  background-color: #fff;
  border-bottom: rgb(238, 238, 238) solid 1px
`
export const ItemWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`
export const TitleCartShop = styled.span`
  font-family: IRANSansWeb_FaNum_Medium;
  flex-grow: 1.2;

`
export const DiscountWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  font-family: IRANSansWeb_FaNum;
  justify-content: space-around;
  align-items: center;
`
export const PriceWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const DiscountAmount = styled.span`
  color: #fff;
  font-family: IRANSansWeb_FaNum_Bold;
  background-color: red;
  padding: .2rem;
  border-radius: .1rem;
`
export const FinalAmount = styled.span`
  font-family: IRANSansWeb_FaNum_Medium;
`
export const ImageCartShopp = styled.img`
  width: 5.5rem;
  height: 5.5rem;
`

export const FinalAmountWrapper = styled.div`
  text-align: center;
  font-family: IRANSansWeb_Light;
`
export const AddProductContainer = styled.div`
  align-self: center;
  flex-grow: 1.8;
  display: flex;
  flex: 1.8;
  justify-content: center;
`
export const PriceAddWrapper = styled.div`
  display: flex;
  flex: .5;
  flex-direction: row;
`
export const ProductAddWrapper = styled.div`
  display: flex;
  flex: .7;
  justify-content: space-around;
`
export const ProductAddButton = styled(Button)`
  font-size: 12px;
  font-family: IRANSansWeb_Bold;
  color: #007bff;
  border-color: #007bff;
`
export const PurchaseCount = styled.span`
  font-family: IRANSansWeb_FaNum_Medium;
  align-self: center;
`