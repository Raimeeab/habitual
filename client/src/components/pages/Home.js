import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/whiteLogo.png";
import bgImage from "../../assets/background-image.png";

import {
  HeroLogo,
  BackgroundImg,
  HeroContainer,
} from "../styles/Home.styled";

const Home = () => {
  let navigate = useNavigate();
  function getStarted() {
    navigate('/login')
  }
 
  return (
    <>
      <HeroContainer>
        <BackgroundImg src={bgImage} />
        <HeroLogo src={logo} alt="Habitual Logo" onClick={getStarted} />
      </HeroContainer>
    </>
  );
};

export default Home;
