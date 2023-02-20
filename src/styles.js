import styled, {createGlobalStyle, css} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        color: #FBFBFB;
        height: 100vh;
        width: 100vw;
        padding: 0;
        margin: 0;
        overflow: hidden;
        text-rendering: antialiased;
        background-color: #2828e6;
        font-family: 'Work Sans', sans-serif;
        font-weight: 500;
        
    }
`;

export const Marginals = css`
  box-sizing: border-box;
  pointer-events: none;
  display: flex;
  position: fixed;
  width: 100vw;
  z-index: 1;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 600px;
  width: 400px;
`;
