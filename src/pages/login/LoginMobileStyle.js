import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`
export const ContainerWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: IRANSansWeb;
`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: .8rem;
  background-color: #fff;
`
export const HeaderTitle = styled.span`
  font-family: IRANSansWeb_Bold;
  flex-grow: .5;
  align-self: flex-start;
`
export const BodyWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  height: 100%;
`
export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: ${(props => props.flex)};
  font-family: IRANSansWeb;
`
export const BodyText = styled.span`
  font-family: IRANSansWeb;
`