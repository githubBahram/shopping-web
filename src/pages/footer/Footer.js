import React from 'react';
import styled from 'styled-components'
import Breakpoint from "../../component/Breakpoint";

const Footer = () => {
    return (
        <>
        <Breakpoint at="xs">
            <Container>

            </Container>
        </Breakpoint>


        </>
    )
}
const Container = styled.div`
  background-color: red;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 2rem;
  padding: 20px;
`
export default Footer