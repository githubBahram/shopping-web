import React, {useEffect} from 'react'
import styled from 'styled-components'
import ShoppingCartButton from "./ShoppingCartButton";
import LoginLink from "./LoginLink";
import SearchComponent from "./SearchComponent";
import 'react-bootstrap-typeahead/css/Typeahead.css';

const HeaderFixed = (props) => {
    const {scrollVisible} = props
    return (
        <>
            <Container scrollVisible={scrollVisible}>
                <HeaderFixedWrapper>
                    <Col>
                        <ShoppingName>خرید از شهروند</ShoppingName>
                        <HeaderSearchInput/>
                    </Col>

                    <Col>
                        <LoginLink/>
                        <ShoppingCartButton/>
                    </Col>
                </HeaderFixedWrapper>
            </Container>
        </>
    )
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  top: ${(props => props.scrollVisible ? '-100px' : 0)};
  z-index: 2;
  transition: top 0.4s;
  background-color: rgb(0, 0, 0);
  background-image: url(https://snapp.market/v2/static/images/14e6e31c9a6afc2ca301f6bcd2f9cf74.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 66%;
  padding: 20px;
`
const Col = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
`
const HeaderFixedWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`
const HeaderSearchInput = styled(SearchComponent)`
  display: flex;
  flex: 1;
`
const ShoppingName = styled.span`
  color: #fff;
  font-family: IRANSansWeb_Medium;
  text-align: left;
  align-items: center;
`
export default HeaderFixed
