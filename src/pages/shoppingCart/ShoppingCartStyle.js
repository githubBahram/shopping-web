import React, {useState} from 'react'
import styled from 'styled-components'
import Button from "react-bootstrap/Button";


export const ShoppingCartListContainer = styled.div`
  margin-bottom: 3.5rem;
  margin-top: 2.8rem;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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
export const Header = styled.div`
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 9999;
  width: 100%;
  padding: .7rem;
  border-bottom: rgb(238, 238, 238) solid 1px
`
export const HeaderWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`
export const HeaderTitle = styled.span`
  font-family: IRANSansWeb_Bold;
  text-align: center;
  width: 100%;
`
export const NotOrderFound = styled.span`
  font-family: IRANSansWeb_Medium;
  color: red;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: center;
`
export const AlertRemoveAll = styled.div`
  font-family: IRANSansWeb;
  margin-top: 2.8rem;
  font-size: 14px;
`
export const NextShopContainer = styled.div`
  background-color: green;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 3.5rem;
  border-color: gray;
  border-width: 0 0 1px 0;
  border-top: rgb(238, 238, 238) solid 1px;
  color: #fff;
`
export const NextShopWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  font-family: IRANSansWeb_FaNum_Medium;
  align-items: center;
  width: 100%;
  height: 100%;
`
