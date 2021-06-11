import React, {useEffect, useState} from "react";
import Breakpoint from "../../component/Breakpoint";
import {NextShopContainer, NextShopWrapper} from "./ShoppingCartStyle";
import {useDispatch, useSelector} from "react-redux";
import LoginLink from "../../component/LoginLink";
import RegisterModal from "../RegisterModal";
import {closeDrawPanel} from "../../redux/feature/drawPanelSlice";


const NextShopButton = () => {
    const orders = useSelector(state => state.orders);
    const dispatch=useDispatch()
    let finalAmountTotalVar = 0
    const [finalAmountTotal, setFinalAmountTotal] = useState(finalAmountTotalVar)
    if (orders) {
        orders.forEach((item) => (
            finalAmountTotalVar = item.finalAmount * item.count + finalAmountTotalVar
        ))
    }
    useEffect(() => {
        setFinalAmountTotal(finalAmountTotalVar)
    }, [finalAmountTotal])


    const nextShop = () => {
        setShow(true)

    }
    const [show, setShow] = useState(false);
    const onHide = () => setShow(false)

    return (
        <>
            <Breakpoint at="xs">
                <NextShopContainer>
                    <NextShopWrapper width="100%" to="/authentication/login">
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
            </Breakpoint>

            <Breakpoint at="lg">
                <RegisterModal show={show} setShow={setShow} onHide={onHide}/>
                <NextShopContainer>
                    <NextShopWrapper onClick={nextShop} width="30%">

                        <span>
                        {
                            finalAmountTotal

                        } تومان
                    </span>
                    </NextShopWrapper>
                </NextShopContainer>
            </Breakpoint>
        </>
    )
}
export default NextShopButton