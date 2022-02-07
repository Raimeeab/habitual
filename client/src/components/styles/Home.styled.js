import styled from "styled-components";
import Button from "@mui/material/Button";

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

// export const HeroBackground = styled.div`

// z-index: -3;
// background: rgb(82,177,120);
// background: radial-gradient(circle, rgba(82,177,120,1) 0%, rgba(184,244,175,1) 47%, rgba(177,219,114,1) 100%);
// `

export const ContentWrapper = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width:760px){
    flex-direction: column;
  }
`; 


// NEW STYLINGS :

export const HeroContainer = styled.div`
  display: flex;
  min-height: auto;
  justify-content: center;
  margin-top: 90px;
`;

export const BackgroundGif = styled.img`
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

export const Background = styled.img`
  position: fixed;
  background-image: url(${(props) => props.img});
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-position: center;
  object-fit: contain;

  @media (max-width: 760px) {
      width: 100%; /* actually wider than viewport */
      height: 100%;
  }
`;

export const VideoBackground = styled.video`
  position: fixed;
  background-clip: url(${(props) => props.video});
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-position: center;
  object-fit: cover;

  @media (max-width: 760px) {
      width: 100%; /* actually wider than viewport */
      height: 100%;
  }
`;

export const BackgroundImage = styled.img`
  justify-content: center;
  width: 50%;
  height: auto;
  z-index: 1;
  position: relative;
  opacity: 90%;
  background-size: cover;

  @media (max-width:760px){
    width: 100%;
  }
`;

export const GetStarted = styled(Button)`
  flex-direction: column;
  height: 60px;
  font-size: 50px;
  font-family: "Titillium Web", "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif monospace;
  padding: 10px 60px;
  justify-content: center;
  color: white;
  font-weight: 900;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  background: rgb(204, 223, 153);
  background: linear-gradient(
    0deg,
    rgba(204, 223, 153, 1) 0%,
    rgba(173, 197, 124, 1) 100%
  );
  z-index: 13px;

  &:hover {
    text-decoration: none;
    color: white;
  }
`;
