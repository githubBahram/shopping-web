import React, {useEffect} from 'react'
import styled from 'styled-components'
import Button from "react-bootstrap/Button";

const Discount = () => {
    return (
        <>
            <Container>
                <DiscountText>
                    تخفیف ویژه
                </DiscountText>

                <CardWrapper>
                    <Card>
                        <ImageCardWrapper>
                            <ImageCard
                                src="https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/5c18ba7615505.jpg"/>
                        </ImageCardWrapper>
                        <TitleCard>سیب زمینی ۱.۵ کیلوگرمی ± ۱۰۰ گرم (تعداد تقریبی ۶ عدد)</TitleCard>
                        <DiscountAmountWrapper>
                            <DiscountPercent>
                                %10
                            </DiscountPercent>
                            <MainAmount>1331</MainAmount>
                        </DiscountAmountWrapper>
                        <AddProductWrapper>
                            <FinalAmount> 1950 تومان</FinalAmount>
                            <ProductAddButton variant="outline-success">افزودن به سبد</ProductAddButton>
                        </AddProductWrapper>
                    </Card>
                    <Card>
                        <ImageCardWrapper>
                            <ImageCard
                                src="https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/601e7fff7d9a2.jpg"/>
                        </ImageCardWrapper>
                        <TitleCard>سیب زمینی ۱.۵ کیلوگرمی ± ۱۰۰ گرم (تعداد تقریبی ۶ عدد)</TitleCard>
                        <DiscountAmountWrapper>
                            <DiscountPercent>
                                %10
                            </DiscountPercent>
                            <MainAmount>15561</MainAmount>
                        </DiscountAmountWrapper>
                        <AddProductWrapper>
                            <FinalAmount> 1950 تومان</FinalAmount>
                            <ProductAddButton variant="outline-success">افزودن به سبد</ProductAddButton>
                        </AddProductWrapper>
                    </Card>
                </CardWrapper>

            </Container>
        </>
    )
}
const Container = styled.div`
  display: flex;
  flex: 1;
  background: url('https://snapp.market/v2/static/images/ff6cfe6688bee991b0de30bebfbe09fd.png') 0 0 / cover,
  linear-gradient(-45deg, rgb(251, 75, 84), rgb(251, 75, 84));
  border-radius: 0.5rem;
  height: 22rem;
  padding: 10px 20px 10px 0;
  justify-content: space-around;
`
const DiscountText = styled.span`
  align-self: center;
  text-align: center;
  color: #fff;
  font-weight: bold;
`
const CardWrapper = styled.div`
  display: flex;
  flex: 1;
`
const Card = styled.div`
  display: flex;

  background-color: #fff;
  padding: 10px 10px 5px 10px;
  height: 100%;
  width: 20%;
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
  padding: 0px 1.6rem;
`
const TitleCard = styled.span`
  font-size: 14px;
  text-align: right;
  margin-bottom: 15px;
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
`
const MainAmount = styled.s`
  align-self: center;
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
`
const ProductAddButton = styled(Button)`
  font-size: 12px;
  font-weight: bold;
`


export default Discount
