import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {orderAdded, orderRemoved} from "../../redux/feature/orderSlice";
import {
    AddProductContainer,
    Container,
    ContainerWrapper,
    DiscountAmount,
    DiscountWrapper,
    FinalAmount,
    FinalAmountWrapper,
    ImageCartShopp,
    ItemWrapper,
    NextShopContainer,
    NextShopWrapper,
    NotOrderFound,
    PriceAddWrapper,
    PriceWrapper,
    ProductAddButton,
    ProductAddWrapper,
    PurchaseCount,
    ShoppingCartListContainer,
    TitleCartShop
} from "./ShoppingCartStyle"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

import Footer from "../footer/Footer";
import HeaderShoppingCart from "./HeaderShoppingCart";
import NextShopButton from "./NextShopButton";

const ShoppingCartPage = () => {
    const orders = useSelector(state => state.orders);


    const dispatch = useDispatch();
    const onIncreaseOrder = (item) => {
        let ItemCount = item.count + 1
        const {id, name, image, amount, discountPercent, mainAmount, finalAmount} = item
        dispatch(orderAdded({id, name, image, amount, discountPercent, mainAmount, finalAmount, count: ItemCount}))
    }

    const onDecrease = (item) => {
        let ItemCount = item.count
        const {id, name, image, amount, discountPercent, mainAmount, finalAmount} = item
        dispatch(orderRemoved({id, name, image, amount, discountPercent, mainAmount, finalAmount, count: ItemCount}))
    }


    const CartShoppingList = () => {
        return (
            <>
                {
                    orders.map((item) => (
                        <Container>
                            <ContainerWrapper>
                                <ImageCartShopp src={item.image}/>
                                <ItemWrapper>
                                    <TitleCartShop>{item.name}</TitleCartShop>
                                    <PriceAddWrapper>
                                        <PriceWrapper>
                                            <DiscountWrapper>
                                                <DiscountAmount>٪{item.discountPercent}</DiscountAmount>
                                                <s>{item.mainAmount}</s>
                                            </DiscountWrapper>
                                            <FinalAmountWrapper>
                                                <FinalAmount>{item.finalAmount}</FinalAmount> تومان
                                            </FinalAmountWrapper>
                                        </PriceWrapper>
                                        <AddProductContainer>
                                            <ProductAddWrapper>
                                                <ProductAddButton onClick={() => onIncreaseOrder(item)}
                                                                  variant="outline-success"
                                                                  className="btn-circle">
                                                    <FontAwesomeIcon icon={faPlus} size="sm"
                                                                     style={{fontSize: "10px"}}/>
                                                </ProductAddButton>
                                                <PurchaseCount>{item.count}</PurchaseCount>
                                                <ProductAddButton onClick={() => onDecrease(item)}
                                                                  variant="outline-success"
                                                                  className="btn-circle">
                                                    <FontAwesomeIcon icon={faMinus} size="sm"
                                                                     style={{fontSize: "10px"}}/>
                                                </ProductAddButton>
                                            </ProductAddWrapper>
                                        </AddProductContainer>
                                    </PriceAddWrapper>
                                </ItemWrapper>
                            </ContainerWrapper>
                        </Container>
                    ))
                }
            </>
        )
    }
    useEffect(() => {

    }, [orders, dispatch])
    return (
        <>
            <ShoppingCartListContainer>
                <HeaderShoppingCart/>
                {orders.length === 0 &&
                <>
                    <NotOrderFound>
                        سبد خرید شما خالی می باشد
                    </NotOrderFound>
                    <Footer/>
                </>
                }
                <CartShoppingList/>
            </ShoppingCartListContainer>
            {orders.length > 0 &&
            <NextShopButton/>
            }
        </>
    )
}


export default ShoppingCartPage