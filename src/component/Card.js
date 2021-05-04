import React from 'react'
import styled from 'styled-components'
import Button from "react-bootstrap/Button";
import AddProduct from "./AddProduct";

const Card = (props) => {
    const {id, title, discountPercent, mainAmount, finalAmount, image} = props
    return (
        <>
            <CardContainer>
                <ImageCardWrapper>
                    <ImageCard
                        src={image}/>
                </ImageCardWrapper>
                <TitleCard> {title}</TitleCard>
                <footer>
                    <DiscountAmountWrapper>
                        <DiscountPercent>
                            %{discountPercent}
                        </DiscountPercent>
                        <MainAmount>{mainAmount}</MainAmount>
                    </DiscountAmountWrapper>
                    <AddProductWrapper>
                        <FinalAmount> {finalAmount} تومان</FinalAmount>
                        <AddProduct id={id} name={title} amount={finalAmount} >افزودن به سبد</AddProduct>
                    </AddProductWrapper>
                </footer>
            </CardContainer>
        </>
    )
}
const CardContainer = styled.div`
  display: flex;

  background-color: #fff;
  padding: 10px 10px 5px 10px;

  width: 20%;
  min-width: 12rem;
  margin-right: 10px;
  border-radius: 0.5rem;
  flex-direction: column;
  justify-content: space-between;
`
const ImageCard = styled.img`
  width: 100%;
  align-self: center;
`
const ImageCardWrapper = styled.div`
  padding: 0 1.6rem;
`
const TitleCard = styled.span`
  font-family: IRANSansWeb;
  font-size: 14px;
  text-align: right;
  margin-bottom: 15px;
  min-height: 3rem;
`
const DiscountAmountWrapper = styled.div`
  display: flex;
  flex: 1;
`

const DiscountPercent = styled.div`
  background-color: red;
  padding: 5px;
  text-align: right;
  color: #fff;
  border-radius: 0.5rem;
  font-size: 14px;
  align-self: center;
  font-weight: bold;
  margin-left: 5px;
  font-family: IRANSansWeb_FaNum_Bold;
`
const MainAmount = styled.s`
  align-self: center;
  font-size: 13px;
  color: #aca4a4;
  font-family: IRANSansWeb_FaNum_Medium;
`

const AddProductWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  justify-content: space-between;
`
const FinalAmount = styled.span`
  text-align: right;
  font-size: 14px;
  font-family: IRANSansWeb_FaNum_Bold;
`
const ProductAddButton = styled(Button)`
  font-size: 12px;
  font-family: IRANSansWeb_Bold;
`
export default Card
