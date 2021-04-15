import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import categories from "../data/categories";
import Card from "../component/Card";
import ScrollContainer from 'react-indiana-drag-scroll'

const Discount = () => {
    const scrollContainer = useRef(null)
    useEffect(() => {
    alert('component did mount')
    })
    const CardRender = (card, idx) => {
        return (
            < >
                {
                    categories.map((card) => (
                        <Card id={card.id}
                              title={card.title}
                              discountPercent={card.discountPercent}
                              mainAmount={card.mainAmount} finalAmount={card.finalAmount} image={card.image}
                        />
                    ))}
            </>
        )
    }

    return (
        <>
            <CardWrapper onEndScroll={()=>alert('end scrolling')} onStartScroll={()=>console.log('start')} hideScrollbars={true} horizontal={true} innerRef={scrollContainer}
                         className="scroll-container">
                <DiscountText>
                    تخفیف ویژه
                </DiscountText>
                <CardRender/>
                <ArrowLeft
                    onClick={() => scrollContainer.current.scrollLeft ? (scrollContainer.current.scrollLeft += -500) : console.log(scrollContainer.current.parentElement)}/>

            </CardWrapper>
        </>
    )
}

const DiscountText = styled.span`
  align-self: center;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-family: IRANSansWeb_Bold;
`
const CardWrapper = styled(ScrollContainer)`
  display: flex;
  flex: 1;
  cursor: all-scroll;
  width: 100%;
  height: 20rem;
  user-select: none;
  overflow: auto;
  background: url('https://snapp.market/v2/static/images/ff6cfe6688bee991b0de30bebfbe09fd.png') 0 0 / cover,
  linear-gradient(-45deg, rgb(251, 75, 84), rgb(251, 75, 84));
  padding: 10px 20px 10px 0;
  border-radius: 5px;
`
const ArrowLeft = styled.button`
  position: absolute;
  left: 50px;
  background-color: blue;
  width: 25px;
  height: 25px;
  z-index: 2;
`

export default Discount
