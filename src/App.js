import React from 'react';
import styled from 'styled-components';
import {GlobalStyle, ImageContainer, Wrapper} from './styles';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import ImgBox from './components/ImgBox';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <HeaderComponent />
      <FooterComponent />
      <Wrapper>
        <ImageContainer>
          <ImgBox />
        </ImageContainer>
      </Wrapper>
    </div>
  );
}

export default App;
