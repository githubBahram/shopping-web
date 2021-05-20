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

    const {id, name,discountPercent,mainAmount,finalAmount, image, amount} = props;
    const [showComp, setShowComp] = useState(false)
    const order = useSelector(state => state.orders.find(order => order.id === id));
    let orderCount = 0;
    if (order) {
        orderCount = order.count;
    }
    const [count, setCount] = useState(orderCount);

    const showComponent = () => {
        if (count === 0) {
            onIncreaseOrder()
        }
        setShowComp(true)
        setTimeout(() => {
            setShowComp(false)
        }, 5000)


    }

    const onIncreaseOrder = () => {
        let orderCount = count + 1
        setCount(orderCount)
        dispatch(orderAdded({id, name, image, amount,discountPercent,mainAmount,finalAmount, count: orderCount}))
    }
    const onDecrease = () => {
        setCount(count - 1)
        dispatch(orderRemoved({id, name, image, amount,discountPercent,mainAmount,finalAmount, count: count}))
    }
    const dispatch = useDispatch();

    if (xsScreen) {
        return (
            <>
                <Breakpoint at="xs">
                    {
                        count === 0 && !showComp &&
                        <ProductAddButton onClick={showComponent} variant="outline-success" className="btn-circle">
                            <FontAwesomeIcon icon={faPlus} size="sm" style={{fontSize: "10px"}}/>
                        </ProductAddButton>
                    }
                    {
                        count !== 0 && !showComp &&
                        <ButtonCount onClick={showComponent}>
                            <PurchaseCount>{count}</PurchaseCount>
                        </ButtonCount>
                    }

                    {
                        showComp &&
                        <ProductAddWrapper>
                            <ProductAddButton onClick={onIncreaseOrder} variant="outline-success"
                                              className="btn-circle">
                                <FontAwesomeIcon icon={faPlus} size="sm" style={{fontSize: "10px"}}/>
                            </ProductAddButton>
                            <PurchaseCount>{count}</PurchaseCount>
                            <ProductAddButton onClick={onDecrease} variant="outline-success" className="btn-circle">
                                <FontAwesomeIcon icon={faMinus} size="sm" style={{fontSize: "10px"}}/>
                            </ProductAddButton>
                        </ProductAddWrapper>
                    }
                </Breakpoint>
            </>
        )
    }

    return (
        <>
            < ProductAddButton
                onClick={onDecrease}
                variant="outline-success"
                className="btn-circle">
                <FontAwesomeIcon
                    icon={faMinus}
                    size="sm"
                    style={
                        {
                            fontSize: "10px"
                        }
                    }
                />
            </ProductAddButton>
            <PurchaseCount>{count}</PurchaseCount>
            <ProductAddButton onClick={onIncreaseOrder} variant="outline-success" className="btn-circle">
                <FontAwesomeIcon icon={faPlus} size="sm" style={{fontSize: "10px"}}/>
            </ProductAddButton>

        </>
    )

}

const ProductAddWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: #007bff solid 1px;
  border-radius: 15px;
  margin-top: 5px;
  background-color: #fff;
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

const Increase = styled(Button)`
  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  background-color: #fff;
  color: #007bff;
  text-align: center;
  align-self: center;
`
const PurchaseCount = styled.span`
  font-family: IRANSansWeb_FaNum_Medium;
  align-self: center;
`
export default AddProduct