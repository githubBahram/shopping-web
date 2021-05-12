import React, {useRef} from 'react'
import styled from 'styled-components'
import categories from "../../data/categories";
import ScrollContainer from 'react-indiana-drag-scroll'
import CardMobile from "../card/CardMobile";

const DiscountMobile = () => {

    const CardRender = (card, idx) => {
        return (
            < >
                {
                    categories.map((card) => (
                        <div style={{
                            width: "calc(40%)",
                            flex: "0 0 auto",
                            marginLeft: "8px",
                        }}>
                            <CardMobile id={card.id}
                                        title={card.title}
                                        discountPercent={card.discountPercent}
                                        mainAmount={card.mainAmount} finalAmount={card.finalAmount} image={card.image}
                            />
                        </div>
                    ))}
            </>
        )
    }

    return (
        <>
            <div>
                <CardWrapper horizontal={true}
                             className="scroll-container">
                    <DiscountText>
                        تخفیف ویژه
                    </DiscountText>
                    <ScrollContainer vertical={false} style={{display:"flex",flexDirection:"row"}}>
                    <CardRender/>
                    </ScrollContainer>
                </CardWrapper>
            </div>
        </>
    )
}

const DiscountText = styled.span`
    
  color: #fff;
  font-weight: bold;
  font-family: IRANSansWeb_Bold;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  cursor: all-scroll;
  width: 100%;
  height: 16rem;
  user-select: none;
  overflow-y: hidden;

  background: url('https://snapp.market/v2/static/images/ff6cfe6688bee991b0de30bebfbe09fd.png') 0 0 / cover,
  linear-gradient(-45deg, rgb(251, 75, 84), rgb(251, 75, 84));
  padding: 10px 20px 10px 0;
  border-radius: 5px;
  overflow-y: hidden;
`

export default DiscountMobile
