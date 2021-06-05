import React, {useEffect, useState} from "react";
import Breakpoint from "../../component/Breakpoint";
import {NextShopContainer, NextShopWrapper} from "./ShoppingCartStyle";
import {useSelector} from "react-redux";


const NextShopButton = () => {
    const orders = useSelector(state => state.orders);
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

    return (
        <>
            <Breakpoint at="xs">
                <NextShopContainer>
                    <NextShopWrapper to="/authentication/login">
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
        </>
    )
}
export default NextShopButton