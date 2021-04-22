import React, {useState} from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux';
import {orderAdded, orderRemoved} from "../redux/feature/orderSlice";
import Button from "react-bootstrap/Button";
import {faHome, faPlus, faMinus, faMoneyBill} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const AddProduct = (props) => {
    const {id, name, image, amount} = props;

    const order = useSelector(state => state.orders.find(order => order.id === id));
    let orderCount = 0;
    if (order) {
        orderCount = order.count;
    }
    const [count, setCount] = useState(orderCount);

    const onIncreaseOrder = () => {
        let orderCount=count+1
        setCount(orderCount)
        dispatch(orderAdded({id, name, image, amount, count: orderCount}))
    }
    const onDecrease = () => {
        setCount(count - 1)
        dispatch(orderRemoved({id, name, image, amount, count: count}))
    }
    const dispatch = useDispatch();
    if (count === 0) {
        return (
            <>
                <ProductAddButton onClick={onIncreaseOrder} variant="outline-success">افزودن به
                    سبد </ProductAddButton>
            </>
        )
    }
    return (
        <>
            <ProductAddButton onClick={onDecrease} variant="outline-success" className="btn-circle">
                <FontAwesomeIcon icon={faMinus} size="sm" style={{fontSize: "10px"}}/>
            </ProductAddButton>
            <PurchaseCount>{count}</PurchaseCount>
            <ProductAddButton onClick={onIncreaseOrder} variant="outline-success" className="btn-circle">
                <FontAwesomeIcon icon={faPlus} size="sm" style={{fontSize: "10px"}}/>
            </ProductAddButton>

        </>
    )

}
const ProductAddButton = styled(Button)`
  font-size: 12px;
  font-family: IRANSansWeb_Bold;
`
const Increase = styled(Button)`
  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  background-color: #fff;
  color: green;
  text-align: center;
  align-self: center;
`
const PurchaseCount = styled.span`
  font-family: IRANSansWeb_FaNum_Medium;
`
export default AddProduct