import React, {useEffect} from 'react'
import styled from 'styled-components'
import ShoppingCartButton from "./ShoppingCartButton";
import LoginLink from "./LoginLink";
import SearchComponent from "./SearchComponent";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Row from "react-bootstrap/Row";
import {Logo} from "../pages/header/HeaderStyle";

const HeaderFixed = (props) => {
    const {scrollVisible} = props
    return (
        <>
            <Container scrollVisible={scrollVisible}>

                <ItemWrapper>
                    <SearchWrapper>
                        <Logo className="mr-4"> شهروند</Logo>
                        <HeaderSearchInput/>
                    </SearchWrapper>
                    <Item>
                        <LoginWrapper>
                            <LoginLink/>
                        </LoginWrapper>
                        <ShoppingCartButton className="ml-4"/>
                    </Item>

                </ItemWrapper>
            </Container>
        </>
    )
}
const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-grow: .4;
`
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
  margin-left: 1rem;
  align-self: center;
  font-family: IRANSansWeb;
  cursor: pointer;
`

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  top: ${(props => props.scrollVisible ? '-100px' : 0)};
  z-index: 999999;
  transition: top 0.4s;
  background-color: rgb(0, 0, 0);
  background-image: url(https://snapp.market/v2/static/images/14e6e31c9a6afc2ca301f6bcd2f9cf74.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 66%;
  padding: 20px;

`

const HeaderSearchInput = styled(SearchComponent)`
  border-radius: 1rem;
`
const ShoppingName = styled.span`
  color: #fff;
  font-family: IRANSansWeb_Medium;
  text-align: left;
  align-items: center;
`
export default HeaderFixed
