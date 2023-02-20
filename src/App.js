import React from 'react';
import {GlobalStyle, ImageContainer} from './styles';
// import Header from './components/__Header';
// import HeaderComponent from './components/__Header';
import styled from 'styled-components';
import {ReactComponent as LogoSVG} from './components/_Header/logo.svg';
import FooterComponent from './components/Footer';
import ImgBox from './components/ImgBox';
import {Marginals} from './styles';

export const Logo = styled(LogoSVG)`
  height: auto;
  max-width: 760px;
  width: 100%;
`;

export const Header = styled.header`
  ${Marginals}
  justify-content: center;
  padding: 30px;
`;

function HeaderComponent() {
  return (
    <div>
      <Logo title='Milky Mood' />
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <HeaderComponent />
      <FooterComponent />
      <ImageContainer>
        <ImgBox />
      </ImageContainer>
    </div>
  );
}

export default App;
