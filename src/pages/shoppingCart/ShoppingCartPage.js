import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {orderAdded, orderRemoved, orderRemovedAll} from "../../redux/feature/orderSlice";
import {
    AddProductContainer,
    AlertRemoveAll,
    Container,
    ContainerWrapper,
    DiscountAmount,
    DiscountWrapper,
    FinalAmount,
    FinalAmountWrapper,
    Header,
    HeaderTitle,
    HeaderWrapper,
    ImageCartShopp,
    ItemWrapper, NextShopContainer, NextShopWrapper,
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
import {faHome, faMinus, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Footer from "../footer/Footer";

const ShoppingCartPage = () => {
    const orders = useSelector(state => state.orders);
    let finalAmountTotalVar = 0
    const [finalAmountTotal, setFinalAmountTotal] = useState(finalAmountTotalVar)
    if (orders) {
        orders.forEach((item) => (
            finalAmountTotalVar = item.finalAmount * item.count + finalAmountTotalVar
        ))
    }


    const dispatch = useDispatch();
    const [showRemoveAlert, setShowRemoveAlert] = useState(false)


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

    const AlertRemoveAllOrders = () => {
        const [show, setShow] = useState(showRemoveAlert);
        const handleClose = () => {
            console.log("handle close called")
            setShowRemoveAlert(false);
            orderRemovedAll({id: 1})

        }
        const handleShow = () => setShow(true);
        return (

            <AlertRemoveAll>

                <Modal centered show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>حذف اقلام</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>آیا از حذف تمامی اقلام سبد اطمینان دارید!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            خیر
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            بله
                        </Button>
                    </Modal.Footer>
                </Modal>
            </AlertRemoveAll>
        );
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
        setFinalAmountTotal(finalAmountTotalVar)
    }, [orders, dispatch])
    return (
        <>
            <AlertRemoveAllOrders/>
            <Header>
                <HeaderWrapper>
                    <Link to="/home">
                        <FontAwesomeIcon icon={faHome}/>
                    </Link>
                    <HeaderTitle>سبد خرید</HeaderTitle>
                    {orders.length > 0 &&
                    <FontAwesomeIcon icon={faTrash} color="red" onClick={() => setShowRemoveAlert(true)}/>
                    }
                </HeaderWrapper>
            </Header>
            <ShoppingCartListContainer>
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
            <NextShopContainer>
                <NextShopWrapper>
                    <span>
                        ثبت و ادامه خرید
                    </span>
                    <span>
                        {
                            finalAmountTotal

                        } تومان
                    </span>
                </NextShopWrapper>
            </NextShopContainer>
            }
        </>
    )
}


export default ShoppingCartPage