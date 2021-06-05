import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import Collapse from "react-bootstrap/Collapse";


const DrawerLeftPanel = (props) => {
    let {show, showEvent} = props
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [show])

    return (
        <Collapse in={show} dimension="width"
                  tabIndex={0} onBlur={() => {
            document.body.style.overflow = "scroll"
            console.log("onBlur")
        }}
        >
            <ContainerWrapper ref={inputRef} showPanel={show}>
                <Container>
                    {props.children}
                </Container>
            </ContainerWrapper>
        </Collapse>
    )
}

const ContainerWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 30%;
  height: 100vh;
  background: #fff;
  transition: .5s;
  overflow-y: scroll;
  z-index: 999999999999;
`
const Container = styled.div`
  position: relative;
`

export default DrawerLeftPanel

