import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  max-width: 1500px;
  align-items: center;
  grid-gap: 16px;
  padding: 0 30px;

  @media screen and (max-width: 1200px) {
    max-width: 1000px;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 1000px) {
    max-width: 750px;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    max-width: 500px;
  }
`;

export const ServicesCard = styled.div`
  background: ${({ lightBg }) => (lightBg ? '#282828' : '#fff')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 500px;
  width: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
  margin-bottom: 64px;
  align-text: center

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ lightText }) => (lightText ? '#010606' : '#f7f8fa')};
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  color: ${({ lightText }) => (lightText ? '#010606' : '#f7f8fa')};
  text-align: center;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
