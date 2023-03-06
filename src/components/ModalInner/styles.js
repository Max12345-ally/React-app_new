import styled from 'styled-components';

export const Container = styled.div`
  color: black;
  max-width: 440px;
`;

export const H3 = styled.h3`
  font-size: 64px;
  font-weight: 600;
  line-height: 0.7;
  margin: 0;
  color: #0519ce;
`;

export const P = styled.p`
  font-size: 16px;
  margin: 20px 0;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

export const H4 = styled.h4`
  color: #0519ce;
  font-size: 34px;
  font-weight: 600;
  line-height: 1;
  margin: 20px 0 0;
  text-align: left;

  @media (max-width: 700px) {
    font-size: 24px;
  }
`;

export const SuccessContainer = styled(Container)`
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
  text-align: center;
`;

export const Socials = styled.div`
  display: flex;
  text-align: left;

  svg {
    margin: 0 16px;
  }
`;

export const P2 = styled.h4`
  font-size: 16px;
  font-weight: 100;
  line-height: 1;
  margin: 20px 0 0;
  text-align: left;

  @media (max-width: 700px) {
    font-size: 13px;
  }
`;
