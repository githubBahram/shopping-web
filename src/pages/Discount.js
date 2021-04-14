import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import Button from "react-bootstrap/Button";
import FlatList from 'flatlist-react';
import categories from "../data/categories";
import ScrollContainer from 'react-indiana-drag-scroll'

const Discount = () => {
    const scrollContainer = useRef(null)

    const CardRender = (card, idx) => {
        console.log('card')
        console.log(card)
        return (
            <div key={idx}>
                <img style={{
                    marginLeft: "5px"
                }} src={card.image}/>
            </div>

        )
    }

    return (
        <>
            <Container>
                <DiscountText>
                    تخفیف ویژه
                </DiscountText>
                <CardWrapper   hideScrollbars={true} horizontal={true}  innerRef={scrollContainer} className="scroll-container">

                    <Card>
                        <ImageCardWrapper>
                            <ImageCard
                                src="https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/5c18ba7615505.jpg"/>
                        </ImageCardWrapper>
                        <TitleCard>سیب زمینی ۱.۵ کیلوگرمی ± ۱۰۰ گرم (تعداد تقریبی ۶ عدد)</TitleCard>
                        <footer>
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
                        </footer>
                    </Card>
                    <Card>
                        <ImageCardWrapper>
                            <ImageCard
                                src="https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/5c18ba7615505.jpg"/>
                        </ImageCardWrapper>
                        <TitleCard>سیب زمینی ۱.۵ کیلوگرمی ± ۱۰۰ گرم (تعداد تقریبی ۶ عدد)</TitleCard>
                        <footer>
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
                        </footer>
                    </Card>
                    <Card>
                        <ImageCardWrapper>
                            <ImageCard
                                src="https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/5c18ba7615505.jpg"/>
                        </ImageCardWrapper>
                        <TitleCard>سیب زمینی ۱.۵ کیلوگرمی ± ۱۰۰ گرم (تعداد تقریبی ۶ عدد)</TitleCard>
                        <footer>
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
                        </footer>
                    </Card>
                    <Card>
                        <ImageCardWrapper>
                            <ImageCard
                                src="https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/5c18ba7615505.jpg"/>
                        </ImageCardWrapper>
                        <TitleCard>سیب زمینی ۱.۵ کیلوگرمی ± ۱۰۰ گرم (تعداد تقریبی ۶ عدد)</TitleCard>
                        <footer>
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
                        </footer>
                    </Card>
                    <Card>
                        <ImageCardWrapper>
                            <ImageCard
                                src="https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/5c18ba7615505.jpg"/>
                        </ImageCardWrapper>
                        <TitleCard>سیب زمینی ۱.۵ کیلوگرمی ± ۱۰۰ گرم (تعداد تقریبی ۶ عدد)</TitleCard>
                        <footer>
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
                        </footer>
                    </Card>
                    <Card>
                        <ImageCardWrapper>
                            <ImageCard
                                src="https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/5c18ba7615505.jpg"/>
                        </ImageCardWrapper>
                        <TitleCard>سیب زمینی ۱.۵ کیلوگرمی ± ۱۰۰ گرم (تعداد تقریبی ۶ عدد)</TitleCard>
                        <footer>
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
                        </footer>
                    </Card>
                    <Card>
                        <ImageCardWrapper>
                            <ImageCard
                                src="https://api.snapp.market/media/cache/product-variation_image_thumbnail/uploads/images/vendors/users/app/5c18ba7615505.jpg"/>
                        </ImageCardWrapper>
                        <TitleCard>سیب زمینی ۱.۵ کیلوگرمی ± ۱۰۰ گرم (تعداد تقریبی ۶ عدد)</TitleCard>
                        <footer>
                            <DiscountAmountWrapper>
                                <DiscountPercent>
                                    %10
                                </DiscountPercent>
                                <MainAmount>1331</MainAmount>
                            </DiscountAmountWrapper>
                            <AddProductWrapper>
                                <FinalAmount> 1950 تومان</FinalAmount>
                                <ProductAddButton variant="outline-success">افزودن  </ProductAddButton>
                            </AddProductWrapper>
                        </footer>
                    </Card>

                    <ArrowLeft
                        onClick={() => scrollContainer.current.scrollLeft ? (scrollContainer.current.scrollLeft += -500 ) : console.log(scrollContainer.current.parentElement)}/>

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
  overflow: hidden;
`
const DiscountText = styled.span`
  align-self: center;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-family: IRANSansWeb_Bold;
`
const CardWrapper = styled(ScrollContainer)`
  display: flex;
  flex: 1;
  cursor: all-scroll;
  width: 100%;
  height: 20rem;
  user-select: none;
  overflow: auto;
  -webkit-transition-property:-webkit-scrolling;
  -webkit-transition-duration:0.5s;
  -webkit-transition-delay:0.1s;
   

`
const Card = styled.div`
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
  padding: 0px 1.6rem;
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
const ArrowLeft = styled.button`
  position: absolute;
  left: 50px;

  background-color: blue;
  width: 25px;
  height: 25px;
  z-index: 2;

`


export default Discount
