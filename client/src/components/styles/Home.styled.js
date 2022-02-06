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


// NEW STYLINGS :

export const HeroContainer = styled.div`
  display: flex;
  min-height: auto;
  justify-content: center;
  margin-top: 90px;
`;

export const VideoBackground = styled.video`
  position: fixed;
  background-clip: url(${(props) => props.video});
  top: 0px;
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
  height: 50%;
  z-index: 1;
  position: relative;
  opacity: 90%;
  background-size: cover;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const GetStarted = styled(Button)`
  flex-direction: column;
  height: 60px;
  font-size: 50px;
  font-family: "Titillium Web", "Roboto Mono", "Segoe UI", "Roboto", "Oxygen",
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
  /* background: rgb(173, 193, 120);
  background: linear-gradient(
    50deg,
    rgba(173, 193, 120, 1) 35%,
    rgba(149, 196, 132, 1) 58%
  );   */
  z-index: 13px;

  &:hover {
    text-decoration: none;
  }
`;
