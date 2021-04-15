import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import categories from "../data/categories";
import Card from "../component/Card";
import ScrollContainer from 'react-indiana-drag-scroll'
import ReactDOM from "react-dom";

const Discount = () => {
    const scrollContainer = useRef(null)
    const [arrowLeftClick, isArrowLeftClick] = useState(false)
    useEffect(() => {

    }, [])
    const scrollLeft = () => {
        isArrowLeftClick(true)
        ReactDOM.findDOMNode(scrollContainer.current).scrollLeft += -10000
    }
    const scrollRight = () => {
        isArrowLeftClick(false)
        ReactDOM.findDOMNode(scrollContainer.current).scrollLeft += +10000
        console.log(ReactDOM.findDOMNode(scrollContainer.current).scrollLeft)
    }
    const ScrollRightArrow = () => {
        useEffect(() => {

        }, [arrowLeftClick])
        return (
            <ArrowRight visible={arrowLeftClick} onClick={scrollRight}/>
        )
    }
    const onScroll = () => {
        let scrollLeftValue = ReactDOM.findDOMNode(scrollContainer.current).scrollLeft
        if (scrollLeftValue === 0) {
            isArrowLeftClick(false)
        }
        else {
            isArrowLeftClick(true)
        }
    }

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
            <div>
                <CardWrapper innerRef={scrollContainer} onEndScroll={onScroll}   hideScrollbars={true}
                             horizontal={true}

                             className="scroll-container">
                    <DiscountText>
                        تخفیف ویژه
                    </DiscountText>
                    <CardRender/>
                    <ArrowLeft
                        onClick={scrollLeft}/>

                    <ScrollRightArrow onClick={scrollRight}/>

                </CardWrapper>
            </div>
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

const ArrowRight = styled.button`
  position: absolute;
  right: 50px;
  background-color: blue;
  width: 25px;
  height: 25px;
  z-index: 2;
  display: ${(props) => props.visible ? 'block' : 'none'};;
`

export default Discount
