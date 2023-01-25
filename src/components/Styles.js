import styled from 'styled-components';
// This code creates a new styled component named "Button"
// using styled-components library and css to be used as a scroll to top button
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 50%;
   bottom: 40px;
   height: 20px;
   font-size: 1.5rem;
   z-index: 1;
   cursor: pointer;
   color: lightslategray;
`

// This code creates a new styled component named "FooterStyled" to be used in footer component
export const FooterStyled = styled.div`
    clear: both;
    background: lightgrey;
    padding: 0;
    text-align: center;
    vertical-align: middle;
    line-height: normal;
    margin: 0;
    position: fixed;
    bottom: 0;
    width: 70%;
`


