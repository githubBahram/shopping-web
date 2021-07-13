import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import categories from "../data/categories";
import Card from "./card/Card";
import ScrollContainer from "react-indiana-drag-scroll";
import {Link} from "react-router-dom";
import {getProducts} from "../api/productApi";


const SubCategory = (props) => {
    const {title, categoryId} = props

    let productFilter = {
        brandId: '',
        categoryId: categoryId,
        companyId: 1,
        pageNumber: 1,
        pageSize: 6
    }


    const [products, setProducts] = useState([])


    useEffect(() => {
        let result = getProducts(productFilter)
        result.then((respnse) => {
            setProducts(respnse.data.content)
        })

    }, [title])

    const CardRender = (card, idx) => {
        return (
            < >
                {
                    products.map((card) => (
                        <div style={{
                            width: "calc(40%)",
                            flex: "0 0 8rem",
                            marginLeft: "8px",
                        }}>
                            <CardWrapper>
                                <Card id={card.id}
                                      title={card.name}
                                      discountPercent={card.discountValue}
                                      mainAmount={card.price} finalAmount={card.price} image={card.imageLocation}
                                />
                            </CardWrapper>
                        </div>
                    ))}
            </>
        )
    }

    return (
        <>
            {products &&
            <Container>
                <Header>
                    <HeaderTitleLink to="/category/465465">{title}</HeaderTitleLink>
                    <ShowMore> مشاهده بیشتر </ShowMore>
                </Header>
                <CardContainer vertical={false}>
                    <CardRender/>
                </CardContainer>
            </Container>
            }
        </>
    )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  cursor: all-scroll;
  width: 100%;

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

  overflow: auto;
  padding: 0 20px 0 0;
  overflow-y: hidden;
`
const CardWrapper = styled.div`
  border-left: 0.1rem solid rgb(238, 238, 238);
  padding-bottom: 10px;
`

export default SubCategory
