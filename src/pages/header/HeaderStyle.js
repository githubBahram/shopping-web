import styled from 'styled-components'
import React, {useEffect, useState} from 'react';
import {debounce} from "../../helper/helper";


export const Header = styled.div`
  background-color: rgb(0, 0, 0);
  background-image: url(https://snapp.market/v2/static/images/14e6e31c9a6afc2ca301f6bcd2f9cf74.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 66%;
  width: 100%;
  position:${(props) => props.position};
  padding: 0.8rem;
  transform: translateY(0px);
  z-index: 995;
  opacity: 1;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.16);
  top: ${(props) => props.visible ? '0' : '-100px'};
  left: 0;
  right: 0;
  height: ${(props) => props.height};
  align-items: center;
  display: block;
  direction: rtl;
`

