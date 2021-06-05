import React, {useState} from "react";

import {
    BodyContainer,
    BodyText,
    BodyWrapper,
    Container,
    ContainerWrapper,
    Header,
    HeaderTitle
} from "./LoginMobileStyle";
import {faArrowRight, faMobile} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addPhoneNumber} from "../../redux/feature/userSlice";

const LoginMobile = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const [phoneNumber, setPhoneNumber] = useState('')
    const goBack = () => {
        history.goBack()
    }
    const sendCode = () => {
        if (phoneNumber.trim().length === 0)
            alert('phone number is incorrect')
        if (phoneNumber.trim().length !== 11) {
            alert('phone number is incorrect')
        }
        //todo check numeric and call send api code
        dispatch(addPhoneNumber({phoneNumber: phoneNumber}))
        history.push("/authentication/verification")

    }
    return (
        <>
            <ContainerWrapper>
                <Header>
                    <FontAwesomeIcon onClick={() => goBack()} style={{alignSelf: "center"}} width="100%"
                                     icon={faArrowRight}/>
                    <HeaderTitle>ورود</HeaderTitle>
                </Header>
                <BodyWrapper>
                    <BodyContainer flex=".3">
                        <FontAwesomeIcon style={{fontSize: "3rem"}} color="blue" icon={faMobile}/>
                        <BodyText>لطفا شماره تلفن همراه خود را وارد نمایید</BodyText>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control onChange={(e) => setPhoneNumber(e.target.value)} type="tel"
                                          placeholder="شماره موبایل شما"/>
                        </Form.Group>
                    </BodyContainer>
                </BodyWrapper>
                <Button onClick={sendCode} variant="primary">ارسال کد</Button>
            </ContainerWrapper>

        </>
    )
}
export default LoginMobile