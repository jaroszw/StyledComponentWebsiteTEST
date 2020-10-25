import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 3px;
  background-color: ${({ primary }) => (primary ? '#cc0e74' : '#0f4c75')};
  font-size: ${({ fontbig }) => (fontbig ? '20px' : '16px')};
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#0f4c75' : '#cc0e74')};
    transition: all 0.3s ease-in;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyles;
