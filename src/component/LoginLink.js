import React from 'react'
import styled from 'styled-components'

const LoginLink = () => {
    return (
        <>
            <Container>
                ورود / عضویت
            </Container>
        </>
    )
}

const Container = styled.a`
  align-self: center;
  color: #fff;
  font-family: IRANSansWeb;
  text-align: left;
  width: 14rem;
`

export default LoginLink
