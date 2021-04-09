import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import React, {useState, useEffect} from 'react';
import {debounce} from "../helper/helper";

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
            <div style={{
                position: "fixed",
                width: '100%',
                height: '5rem',
                top: visible ? '-60px' : '0',
                zIndex:2,
                transition: 'top 0.4s',
                backgroundColor: 'rgb(0, 0, 0)',
                backgroundImage: 'url(https://snapp.market/v2/static/images/14e6e31c9a6afc2ca301f6bcd2f9cf74.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize:' cover',
                backgroundPosition:' 0% 66%',
                padding:'20px'
            }}>
                <ShoppingCartButton variant="light">سبد خرید
                    <PurchasesCount>0</PurchasesCount>
                </ShoppingCartButton>
            </div>

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
                        <Login>ورود / عضویت</Login>
                        <ShoppingCartButton variant="light">سبد خرید
                            <PurchasesCount>0</PurchasesCount>
                        </ShoppingCartButton>
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

const ShoppingCartButton = styled(Button)`
  color: rgb(36, 70, 245);
  background-color: #fff
`
const PurchasesCount = styled.span`
  background-color: #f2f7ff;
  font-size: 10px;
  padding: 10px;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 40px;
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
