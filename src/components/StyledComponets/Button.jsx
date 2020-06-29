import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   body{
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
      font-family: 'Oswald', sans-serif;
   }
`

const Styled = styled.div`
   perspective: 100px;
   border: 1px solid #666;
   color: ${ ({ color }) => color ? color : '#999'};
   font-size: 1em;
   border-radius: .25em;
   padding: .1em .25em;
   position: relative;
   display: inline-block;
   margin-left: 1.6em;
   padding-left: 1.5em;
   box-sizing: border-box;
   user-select: none;
   text-transform: uppercase;
   cursor: pointer;

   :hover{
      ::before{
         transform: rotateY(-120deg);
      }
   }

   :active{
      ::before{
         transform: rotateY(-25deg);
      }
   }
   ::before{
      content: '${ ({ icon }) => icon ? icon : ''}';
      text-transform: lowercase;
      font-family: "Material Icons"; 
      position: absolute;
      color: ${ ({ color }) => color ? color : '#999'};
      top: -.1em;
      left: -1.1em;
      font-size: 1.8rem;
      transform: rotateY(-25deg);
      transition: transform .2s ease;
      transform-origin: right;
   }

`

const Boton = (props) => (
   <>
      <GlobalStyle />
      <Styled icon='cloud_download'>Upload</Styled>
      <Styled icon='cloud_upload'>Download</Styled>
      <Styled icon='update'>Update</Styled>
   </>
)

export default Boton