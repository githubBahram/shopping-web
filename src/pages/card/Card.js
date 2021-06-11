import React from 'react'
import Breakpoint from "../../component/Breakpoint";
import SubCategoryDesktop from "../subCategoryPage/SubCategoryDesktop";
import SubCategoryMobile from "../subCategoryPage/SubCategoryMobile";
import CardDesktop from "./CardDesktop";
import CardMobile from "./CardMobile";


const Card = (props) => {
    const {id, title, discountPercent, mainAmount, finalAmount, image} = props

    return (
        <>
            <Breakpoint at="lg">
                <CardDesktop id={id}
                             title={title}
                             discountPercent={discountPercent}
                             mainAmount={mainAmount} finalAmount={finalAmount} image={image}/>
            </Breakpoint>
            <Breakpoint at="md">
                <CardDesktop id={id}
                             title={title}
                             discountPercent={discountPercent}
                             mainAmount={mainAmount} finalAmount={finalAmount} image={image}/>
            </Breakpoint>
            <Breakpoint at="xs">
                <CardMobile id={id}
                             title={title}
                             discountPercent={discountPercent}
                             mainAmount={mainAmount} finalAmount={finalAmount} image={image}/>
            </Breakpoint>
        </>
    )
}


export default Card
