import React from 'react'
import styled from 'styled-components'
import ScrollContainer from "react-indiana-drag-scroll";
import {Link} from "react-router-dom";

const SubCategoryFilterMobile = ({categories}) => {

    const CategoriesFilterItems = ({categories}) => {
        return (
            <>
                {
                    categories.map((category) => (
                        <FilterItemWrapper>
                            <FilterItem to={`/categories/${category.id}`}><span> {category.name}</span>
                            </FilterItem>
                        </FilterItemWrapper>
                    ))
                }
            </>
        )
    }

    return (
        <>
            <Container>
                <ScrollContainer>
                    <FilterWrapper>
                        <CategoriesFilterItems categories={categories}/>
                    </FilterWrapper>
                </ScrollContainer>
            </Container>
        </>
    )
}
const Container = styled.div`
  background-color: #fff;
  padding: 10px;
  border-bottom: #a3a3a3 solid;
  border-width: 1px;

`
const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;


`
const FilterItemWrapper = styled.div`
  flex: 0 0 auto;
  width: auto;
`
const FilterItem = styled(Link)`
  border: calc(0.1rem) solid rgb(223, 221, 225);
  border-radius: calc(1.5rem);
  font-family: IRANSansWeb_Medium;
  font-size: 14px;
  padding: 8px;
  margin-left: 5px;
`

export default SubCategoryFilterMobile