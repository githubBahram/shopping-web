import Breakpoint from "../../component/Breakpoint";
import React from "react";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";


const HeaderPage = () => {

    return (
        <>
            <Breakpoint at="lg">
                <HeaderDesktop/>
            </Breakpoint>
            <Breakpoint at="md">
                <HeaderDesktop/>
            </Breakpoint>
            <Breakpoint at="xs">
                <HeaderMobile/>
            </Breakpoint>
        </>
)
}


export default HeaderPage
