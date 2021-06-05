import React, {useState} from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux';
import {orderAdded, orderRemoved} from "../redux/feature/orderSlice";
import Button from "react-bootstrap/Button";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Breakpoint from "./Breakpoint";
import useBreakpoints from "./useBreakpoints";


const AddProduct = (props) => {
    const xsScreen = useBreakpoints().isXs;

    const {id, name, discountPercent, mainAmount, finalAmount, image, amount} = props;
    const [showComp, setShowComp] = useState(false)
    const order = useSelector(state => state.orders.find(order => order.id === id));
    let orderCount = 0;
    if (order) {
        orderCount = order.count;
    }
    const [count, setCount] = useState(orderCount);

    const showComponent = () => {
        if (count === 0 && !order) {
            onIncreaseOrder()
        }
        setShowComp(true)
        setTimeout(() => {
            setShowComp(false)
        }, 5000)
    }

    const onIncreaseOrder = () => {
        let orderCount
        if (!order)
            orderCount = 1
        else
            orderCount = order.count + 1

        dispatch(orderAdded({id, name, image, amount, discountPercent, mainAmount, finalAmount, count: orderCount}))
    }
    const onDecrease = () => {
        let orderCount
        if (!order)
            orderCount = 1
        else
            orderCount = order.count
        dispatch(orderRemoved({id, name, image, amount, discountPercent, mainAmount, finalAmount, count: orderCount}))
    }
    const dispatch = useDispatch();

    if (xsScreen) {
        return (
            <>
                <Breakpoint at="xs">
                    {
                        !order &&
                        <ProductAddButton onClick={showComponent} variant="outline-success" className="btn-circle">
                            <FontAwesomeIcon icon={faPlus} size="sm" style={{fontSize: "10px"}}/>
                        </ProductAddButton>
                    }
                    {
                        order && !showComp &&
                        <ButtonCount onClick={showComponent}>
                            <PurchaseCount>{order.count}</PurchaseCount>
                        </ButtonCount>
                    }

                    {
                        order && showComp &&
                        <ProductAddWrapperMobile>
                            <ProductAddButton onClick={onIncreaseOrder} variant="outline-success"
                                              className="btn-circle">
                                <FontAwesomeIcon icon={faPlus} size="sm" style={{fontSize: "10px"}}/>
                            </ProductAddButton>
                            <PurchaseCount>{order.count}</PurchaseCount>
                            <ProductAddButton onClick={onDecrease} variant="outline-success" className="btn-circle">
                                <FontAwesomeIcon icon={faMinus} size="sm" style={{fontSize: "10px"}}/>
                            </ProductAddButton>
                        </ProductAddWrapperMobile>
                    }
                </Breakpoint>
            </>
        )
    }

    return (
        <>
            {order &&
            <ProductAddWrapper>
                <ProductAddButton
                    onClick={onIncreaseOrder}
                    variant="outline-success"
                    className="btn-circle">
                    <FontAwesomeIcon
                        icon={faPlus}
                        size="sm"
                        style={
                            {
                                fontSize: "10px"
                            }
                        }
                    />
                </ProductAddButton>
                <PurchaseCount>{order.count}</PurchaseCount>
                <ProductAddButton onClick={onDecrease} variant="outline-success" className="btn-circle">
                    <FontAwesomeIcon icon={faMinus} size="sm" style={{fontSize: "10px"}}/>
                </ProductAddButton>
            </ProductAddWrapper>
            }
            {
                !order &&
                <Button  onClick={onIncreaseOrder} size="sm" variant="outline-primary">
                    <span style={{fontFamily: "IRANSansWeb_Medium"}}>  افزودن به سبد</span>
                </Button>
            }

        </>
    )

}

const ProductAddWrapperMobile = styled.div`
display: flex;
justify-content: space-between;
border: #007bff solid 1px;
border-radius: 15px;
margin-top: 5px;
background-color: #fff;
`

const ProductAddWrapper=styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductAddButton = styled(Button)`
font-size: 12px;
font-family: IRANSansWeb_Bold;
color: #007bff;
border-color: #007bff;
`
const ButtonCount = styled(Button)`
background-color: #007bff;
border-radius: 50%;
height: 2rem;
width: 2rem;
padding: 0 !important;
font-family: IRANSansWeb_FaNum_Bold;
`
const PurchaseCount = styled.span`
font-family: IRANSansWeb_FaNum_Medium;
align-self: center;
`
export default AddProduct