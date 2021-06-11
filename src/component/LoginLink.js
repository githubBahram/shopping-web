import React, {useState} from 'react'
import styled from 'styled-components'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import RegisterModal from "../pages/RegisterModal";

const LoginLink = () => {
    const [show, setShow] = useState(false);
    const onHide=()=>setShow(false)

    return (
        <>
            <Container dir="rtl">
                <RegisterModal setShow={setShow} show={show} onHide={onHide}/>
                <Button style={{color: "#fff"}} onClick={() => setShow(true)} variant="link"> ورود / عضویت </Button>
            </Container>
        </>
    )
}

const Container = styled.div`
  align-self: center;
  color: #fff;
  font-family: IRANSansWeb;
  cursor: pointer;
`

export default LoginLink
