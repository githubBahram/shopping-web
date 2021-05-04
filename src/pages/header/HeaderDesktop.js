import styled from 'styled-components'
import React, {useEffect, useState} from 'react';
import {debounce} from "../../helper/helper";
import ShoppingCartButton from "../../component/ShoppingCartButton";
import HeaderFixed from "../../component/HeaderFixed";
import LoginLink from "../../component/LoginLink";
import {Header} from "./HeaderStyle"

const HeaderDesktop = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 212)
            || currentScrollPos < 100);
        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <>
            <HeaderFixed scrollVisible={visible}/>

            <Header height="15rem" visible={visible}>
                <Row borderStyle>
                    <AddressWrapper>
                        <CircleWave/>
                        <Address>ابتدا آدرس خود را انتخاب کنید</Address>
                    </AddressWrapper>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "18%"
                    }}>
                        <LoginLink/>
                        <ShoppingCartButton/>
                    </div>
                </Row>
                <Row>sdf</Row>
                <Row>fgd</Row>
            </Header>
        </>
    )
}

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  border-style: ${(props) => props.borderStyle !== undefined ? 'groove' : 'none'};
  border-color: gray;
  border-width: 0 0 1px 0;
  padding: 10px 20px 10px 20px;
`

const CircleWave = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  margin: 0 1.4rem;
  border-radius: 50%;
  background: rgb(7, 188, 32) none repeat scroll 0 0;
  animation: 1.4s ease 0s infinite normal none running fade-circle-wave;
  will-change: box-shadow;
  transform: translateZ(0px);
  align-self: center;
`
const AddressWrapper = styled.div`
  display: flex;
`
const Address = styled.span`
  color: #fff;
  align-self: center
`
const Login = styled.a`
  align-self: center;
  color: #fff;
`
export default HeaderDesktop
