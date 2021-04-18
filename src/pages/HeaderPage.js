import styled from 'styled-components'
import React, {useEffect, useState} from 'react';
import {debounce} from "../helper/helper";
import ShoppingCartButton from "../component/ShoppingCartButton";
import HeaderFixed from "../component/HeaderFixed";
import LoginLink from "../component/LoginLink";

const HeaderPage = () => {
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

            <Header visible={visible}>
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

const Header = styled.div`

  background-color: rgb(0, 0, 0);
  background-image: url(https://snapp.market/v2/static/images/14e6e31c9a6afc2ca301f6bcd2f9cf74.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 66%;
  width: 100%;
  position: relative;
  padding: 0.8rem;
  transform: translateY(0px);
  z-index: 995;
  opacity: 1;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.16);
  top: ${(props) => props.visible ? '0' : '-100px'};
  left: 0;
  right: 0;
  height: 15rem;
  align-items: center;
  display: block;
  direction: rtl;

`
export default HeaderPage
