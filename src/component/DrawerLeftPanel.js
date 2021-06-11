import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import Collapse from "react-bootstrap/Collapse";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";
import {closeDrawPanel, selectShowState} from "../redux/feature/drawPanelSlice";

const DrawerLeftPanel = () => {

    const dispatch = useDispatch();
    const drawPanel=useSelector(selectShowState)
    const order = useSelector(state => state.orders);
    let count = 0
    order.map(item => count = count + item.count)

    const globalClickListener = (e) => {
      dispatch(closeDrawPanel())
    }

    useEffect(() => {
        return () => {
            document.removeEventListener('click', globalClickListener)
        }
    }, [drawPanel])

    const handleBodyClick = (syntheticEvent) => {
        syntheticEvent.stopPropagation()
    }
    const onExit = () => {
        document.removeEventListener('click', globalClickListener)
        document.body.style.overflow='scroll'
    }
    const onEnter = () => {
        document.addEventListener('click', globalClickListener)
        document.body.style.overflow='hidden'
    }

    return (
        <>
            <ContainerHighlight show={drawPanel.drawPanel.show}/>
        <Collapse  timeout={1000} in={drawPanel.drawPanel.show} dimension="width"
                  onExit={onExit}
                  onEntered={onEnter}>

                <ContainerWrapper showPanel={show} onClick={handleBodyClick}>
                    <Container>

                        <HeaderWrapper>
                            <Header>
                                <HeaderTitle>
                                    <span> سبد خرید من</span>
                                    <span>{count}کالا</span>
                                    <Button style={{fontSize: ".68rem", padding: ".1rem"}} variant="light">
                                        <FontAwesomeIcon
                                            icon={faTrash} color="red"/></Button>
                                </HeaderTitle>
                                <FontAwesomeIcon icon={faTimes} size="sm"
                                                 style={{fontSize: "1rem"}} onClick={() => showEvent(false)}/>
                            </Header>
                        </HeaderWrapper>
                        {props.children}
                    </Container>
                </ContainerWrapper>
        </Collapse>
</>
)
}

const ContainerHighlight = styled.div`
  position: fixed;
  height: 100vh;
  inset: 0;
  text-align: right;
  overflow-y: auto;
  padding: 4rem 0;
  display: ${(props => props.show?'block':'none')};
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 99999999;
`
const ContainerWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 30%;
  height: 100vh;
  background: #fff;
  transition: .2s;
  overflow-y: scroll;
  z-index: 999999999999;

`
const HeaderWrapper = styled.div`
  position: fixed;
  width: 30%;
  top: 0;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: rgb(238, 238, 238) solid 1px;
  top: 0;
  z-index: 99999999999999;
  background-color: #fff;
  font-family: IRANSansWeb_FaNum_Bold;
  font-size: .8rem;
`

const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: .1;
`
const Container = styled.div`
  position: relative;

`

export default DrawerLeftPanel

