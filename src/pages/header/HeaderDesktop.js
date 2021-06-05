import styled from 'styled-components'
import React, {useEffect, useState} from 'react';
import {debounce} from "../../helper/helper";
import ShoppingCartButton from "../../component/ShoppingCartButton";
import HeaderFixed from "../../component/HeaderFixed";
import LoginLink from "../../component/LoginLink";
import {Header, Logo} from "./HeaderStyle"
import Col from "react-bootstrap/Col";

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
                <ItemWrapper>
                    <Item>
                        <Logo className="align-self-center">شهروند</Logo>
                        <AddressWrapper>
                            <CircleWave className="mr-1"/>
                            <Address>ابتدا آدرس خود را انتخاب کنید</Address>
                        </AddressWrapper>

                    </Item>
                    <Item>
                        <LoginWrapper>
                            <LoginLink/>
                        </LoginWrapper>
                        <ShoppingCartButton className="ml-2"/>
                    </Item>
                </ItemWrapper>
            </Header>
        </>
    )
}

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const LoginWrapper = styled.div`
  margin-left: 2rem;
  align-self: center;
`

const CircleWave = styled.div`
  width: 0.6rem;
  height: 0.6rem;

  border-radius: 50%;
  background: rgb(7, 188, 32) none repeat scroll 0 0;
  animation: 1.4s ease 0s infinite normal none running fade-circle-wave;
  will-change: box-shadow;
  transform: translateZ(0px);
  align-self: center;
`
const AddressWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
`
const Address = styled.span`
  color: #fff;
  align-self: center;
  font-family: IRANSansWeb;
`
const Login = styled.a`
  align-self: center;
  color: #fff;
`
export default HeaderDesktop
