import React, {useEffect} from 'react'
import Breakpoint from "../../component/Breakpoint";
import MainCategoriesDesktop from "./MainCategoryDesktop";
import MainCategoryMobile from "./MainCategoryMobile";
import Spinner from "react-bootstrap/Spinner";
import styled from 'styled-components'

const MainCategories = (props) => {
    const {categoryStatus, categories} = props

    useEffect(() => {

    }, [categoryStatus])

    if (categoryStatus === 'idle') {
        return (<>
            <SpinnerContainer>
                <SpinnerCostume delay={1.1} animation="grow" size="lg"/>
                <SpinnerCostume delay={1.2} animation="grow" size="lg"/>
                <SpinnerCostume delay={1.3} animation="grow" size="lg"/>
                <SpinnerCostume delay={1.4} animation="grow" size="lg"/>
            </SpinnerContainer>
        </>)
    }

    return (
        <>
            <Breakpoint at="lg">
                <MainCategoriesDesktop data={categories}/>
            </Breakpoint>
            <Breakpoint at="md">
                <MainCategoriesDesktop data={categories}/>
            </Breakpoint>
            <Breakpoint at="xs">
                <MainCategoryMobile data={categories}/>
            </Breakpoint>
        </>
    )
}

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 22rem;
  width: 100%;
  border: rgb(194, 193, 193) solid 1px;
`
const SpinnerCostume = styled(Spinner)`
  animation: ${(props) => props.delay}s linear infinite spinner-grow;

`
export default MainCategories
