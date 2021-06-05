import {Link, useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faTrash} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import styled from "styled-components";
import AlertRemoveAllOrders from "./AlertRemoveAllOrders";
import {useSelector} from "react-redux";

const HeaderShoppingCartMobile = () => {

    const history = useHistory();
    const orders = useSelector(state => state.orders);
    const goBack = () => {
        history.goBack()
    }
    const [showRemoveAlert, setShowRemoveAlert] = useState(false)

    return (
        <>
            <AlertRemoveAllOrders show={showRemoveAlert}/>
            <Header>
                <HeaderWrapper>
                    <Link to="/home">
                        <FontAwesomeIcon onClick={() => goBack()} style={{alignSelf: "center"}} width="100%"
                                         icon={faArrowRight}/>
                    </Link>
                    <HeaderTitle>سبد خرید</HeaderTitle>
                    {orders.length > 0 &&
                    <FontAwesomeIcon icon={faTrash} color="red" onClick={() => setShowRemoveAlert(true)}/>
                    }
                </HeaderWrapper>
            </Header>
        </>
    )
}

const Header = styled.div`
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 9999;
  width: 100%;
  padding: .7rem;
  border-bottom: rgb(238, 238, 238) solid 1px
`
const HeaderWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`
const HeaderTitle = styled.span`
  font-family: IRANSansWeb_Bold;
  text-align: center;
  width: 100%;
`
export default HeaderShoppingCartMobile