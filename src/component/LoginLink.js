import React, {useState} from 'react'
import styled from 'styled-components'
import Button from "react-bootstrap/Button";
import RegisterModal from "../pages/RegisterModal";

const LoginLink = () => {
    const [show, setShow] = useState(false);
    const onHide=()=>{
        setShow(false)
        document.body.style.overflow='scroll'
    }

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
