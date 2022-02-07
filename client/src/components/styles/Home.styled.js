import styled from "styled-components";
import Button from "@mui/material/Button";

import colouredLogo from "../../assets/logo.png"

export const TextContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* box-shadow: 0 0 1px rgba(15, 15, 15, 0.28); */
  /* Full screen - navbar */
  /* background: rgb(173, 193, 120);
  background: linear-gradient(
    50deg,
    rgba(173, 193, 120, 0.3) 0%,
    rgba(255, 255, 255, 0.3) 58%
  ); */
  margin: 0;
  z-index: 10px;
  border-radius: 19px;
  background-size: contain;
  margin: 0 10px;
  z-index: 10px;
`;

export const ContentWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width:760px){
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

`

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

  @media (max-width:760px){
    width: 100%;
    margin-top: 100px;
  }
`;

