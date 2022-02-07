import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  min-height: auto;
  justify-content: center;
  margin-top: 90px;
`;

export const BackgroundImg = styled.img`
  position: fixed;
  background-image: url(${(props) => props.img});
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-position: center;
  object-fit: cover;
`;

export const HeroLogo = styled.img`
  justify-content: center;
  width: 45%;
  height: auto;
  z-index: 1;
  position: relative;
  opacity: 85%;
  background-size: cover;

  &:hover {
    cursor: pointer;
    filter: brightness(1.03);
    opacity: 100%;
  }

  @media (min-width: 1000px) {
    width: 60%;
  }

  @media (max-width: 760px) {
    width: 100%;
    margin-top: 50px;
  }
`;
