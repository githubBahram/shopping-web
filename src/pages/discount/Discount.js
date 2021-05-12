import Breakpoint from "../../component/Breakpoint";
import React from "react";
import DiscountDesktop from "./DiscountDesktop";
import DiscountMobile from "./DiscountMobile";

const Discount = () => {

    return (
        <>
            <Breakpoint at="lg">
                <DiscountDesktop/>
            </Breakpoint>
            <Breakpoint at="md">
                <DiscountDesktop/>
            </Breakpoint>
            <Breakpoint at="xs">
                <DiscountMobile/>
            </Breakpoint>
        </>
    )
}


export default Discount
