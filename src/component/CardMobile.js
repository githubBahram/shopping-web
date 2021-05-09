import React from 'react'
import styled from 'styled-components'
import AddProduct from "./AddProduct";

const CardMobile = (props) => {
    const {id, title, discountPercent, mainAmount, finalAmount, image} = props
    return (
        <Container>
            <ImageWrapper>
                <CardIcon>
                    <AddProduct id={id} name={title} image={image} amount={finalAmount}/>
                </CardIcon>
                <ImageCard
                    src={image}/>
                <DiscountPercent>{discountPercent} ٪ تخفیف</DiscountPercent>
            </ImageWrapper>
            <Price>
                <span> {finalAmount} تومان</span>
                <span> <s>{mainAmount}</s></span>
            </Price>
            <Title>
                {title}
            </Title>
        </Container>
    )
}

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`
const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
`
const DiscountPercent = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: #007bff;
  color: #fff;
  font-family: IRANSansWeb_FaNum_Medium;
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;
 
`
const CardIcon = styled.div`
  position: absolute;
  left: 2px;
  width: 100%;
  text-align: left;
 

`

const ImageCard = styled.img`
  width: 100%;
  color: rgba(0, 0, 0, 0);
  align-self: center;
`
const Title = styled.span`
  font-family: IRANSansWeb_FaNum;
  padding: 5px;
  max-height: 32px;
  font-size: .8rem;
 
`
const Price = styled.span`
  margin-top: 8px;
  display: flex;
  justify-content: space-around;
  font-family: IRANSansWeb_FaNum_Bold;
  font-size: calc(.9rem);
`
export default CardMobile