import React from 'react'
import styled from 'styled-components'
import { MoonLoader } from 'react-spinners'

const StyledSpinner = styled.div`
   position: fixed;
   height: 100vh;
   width: 100vw;
   margin: 0;
   top: 0;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   ::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #999;
      opacity: .75;
   }
`

export default () => {
   return (
      <StyledSpinner>
         <MoonLoader size={30} color='red' />
      </StyledSpinner>
   )
}