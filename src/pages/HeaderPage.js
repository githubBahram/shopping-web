import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

const HeaderPage = () => {
    return (

        <Header>
            <div style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                borderStyle: "groove",
                borderColor: "gray",
                borderWidth: " 0 0 1px 0",
                padding: "10px 20px 10px 20px"

            }}>
                <AddressWrapper>
                    <CircleWave/>
                    <Address>ابتدا آدرس خود را انتخاب کنید</Address>
                </AddressWrapper>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "18%"
                        }}>
                    <a style={{
                        alignSelf: "center",
                        color: '#fff'
                        }}>ورود / عضویت
                    </a>
                    <Button style={{
                        color: "rgb(36, 70, 245)",
                        backgroundColor:"#fff"
                    }} variant="light">سبد خرید <span
                    style={{
                        backgroundColor:"#f2f7ff",
                        fontSize:"10px",
                        padding:"10px",
                        width: "2.3rem",
                        height: "2.3rem",
                        borderRadius:"40px",
                    }}
                    >0</span></Button>
                </div>
            </div>

        </Header>

    )
}
const CircleWave = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  margin: 0 1.4rem;
  border-radius: 50%;
  background: rgb(7, 188, 32) none repeat scroll 0% 0%;
  animation: 1.4s ease 0s infinite normal none running fade-circle-wave;
  will-change: box-shadow;
  transform: translateZ(0px);
  align-self: center;
`
const AddressWrapper = styled.div`
  display: flex;
`
const Address=styled.span`
  color: #fff;
  align-self: center
`

const Header = styled.div`
  background-color: rgb(0, 0, 0);
  background-image: url(https://snapp.market/v2/static/images/14e6e31c9a6afc2ca301f6bcd2f9cf74.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 66%;
  width: 100%;
  position: relative;
  padding: 0.8rem;
  transform: translateY(0px);
  z-index: 995;
  opacity: 1;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.16);
  top: 0;
  left: 0;
  right: 0;
  height: 15rem;
  align-items: center;
  display: block;
  direction: rtl;
`
export default HeaderPage
