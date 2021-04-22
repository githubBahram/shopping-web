import React, {useEffect} from 'react'
import styled from 'styled-components'
import categories from "../data/categories";
import Card from "../component/Card";
import ScrollContainer from "react-indiana-drag-scroll";
import {Link} from "react-router-dom";


const SubCategory = (props) => {
    const {title} = props

    const CardRender = (card, idx) => {
        return (
            < >
                {
                    categories.map((card) => (
                        <CardWrapper>
                            <Card id={card.id}
                                  title={card.title}
                                  discountPercent={card.discountPercent}
                                  mainAmount={card.mainAmount} finalAmount={card.finalAmount} image={card.image}
                            />
                        </CardWrapper>
                    ))}
            </>
        )
    }

    return (
        <>
            <Container>
                <Header>
                    <HeaderTitleLink to="/category">{title}</HeaderTitleLink>
                    <ShowMore> مشاهده بیشتر </ShowMore>
                </Header>
                <CardContainer>
                    <CardRender/>
                </CardContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  cursor: all-scroll;
  width: 100%;

  user-select: none;
  overflow: auto;
  background-color: #fff;
  border-radius: 5px;
  border: 0.1rem solid rgb(238, 238, 238);
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  height: 3rem;
  border-bottom: 0.1rem solid rgb(238, 238, 238);
  padding: 10px 15px 10px 15px;
`
const HeaderTitleLink = styled(Link)`
  font-family: IRANSansWeb_Medium;
  font-size: 1rem;
  color: rgb(163, 163, 163);
  text-decoration: none;
`
const ShowMore = styled.a`
  font-family: IRANSansWeb_Medium;
  font-size: 1rem;
`

const CardContainer = styled(ScrollContainer)`
  display: flex;
  flex: 1;
  cursor: all-scroll;
  width: 100%;
  height: 20rem;
  user-select: none;
  overflow: auto;
  padding: 0px 20px 0px 0;
`
const CardWrapper = styled.div`
  border-left: 0.1rem solid rgb(238, 238, 238);
  padding-bottom: 10px;
`

const LeftArrowChar = styled.span`

`


export default SubCategory
