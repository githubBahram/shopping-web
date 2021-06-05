import React, {useEffect, useState} from "react";
import {BodyContainer, BodyText, BodyWrapper, ContainerWrapper, Header, HeaderTitle} from "./LoginMobileStyle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faMobile} from "@fortawesome/free-solid-svg-icons";
import {Link, useHistory} from "react-router-dom";
import Form from "react-bootstrap/Form";
import {selectUser} from "../../redux/feature/userSlice";
import {useSelector} from "react-redux";
import Button from "react-bootstrap/Button";

const ConfirmSendCode = () => {
    const history = useHistory();
    const goBack = () => {
        history.goBack()
    }
    const verifyCode = () => {

    }

    const [code, setCode] = useState('')
    const [timer, setTimer] = useState(60)
    const user = useSelector(selectUser)

    useEffect(() => {
        if (user.user.phoneNumber.trim().length === 0) {
            history.push("/authentication/login")
        }

        let time = setTimeout(() => {
            setTimer(timer - 1)
        }, 1000)
        if (timer === 0) {
            clearTimeout(time)
        }
    }, [timer])

    return (
        <>
            <ContainerWrapper>
                <Header>
                    <FontAwesomeIcon onClick={() => goBack()} style={{alignSelf: "center"}} width="100%"
                                     icon={faArrowRight}/>
                    <HeaderTitle>ورود</HeaderTitle>
                </Header>
                <BodyWrapper>
                    <BodyContainer flex=".36">
                        <FontAwesomeIcon style={{fontSize: "3rem"}} color="blue" icon={faMobile}/>
                        <BodyText>کد ارسالی به شماره {user.user.phoneNumber} را وارد نمایید</BodyText>
                        <Link to="/authentication/login">(تغییر شماره)</Link>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control onChange={(e) => setCode(e.target.value)} type="tel"
                                          placeholder="کد ارسالی"/>

                        </Form.Group>
                        <Button disabled={timer > 0} variant="outline-secondary">ارسال مجدد کد {timer>0?timer:''}</Button>
                    </BodyContainer>
                </BodyWrapper>

                <Button onClick={verifyCode} variant="primary">تایید کد ارسالی</Button>
            </ContainerWrapper>
        </>
    )
}

export default ConfirmSendCode