import React from "react";
import logo from "../../assets/whiteLogo.png";
import bgVid from "../../assets/background.mp4";

import { BackgroundImage, HeroContainer, VideoBackground, GetStarted } from "../styles/Home.styled";

const Home = () => {
  return (
    <>
      <HeroContainer>
        <VideoBackground loop autoPlay>
          <source src={bgVid} type="video/mp4" />
        </VideoBackground>
        <BackgroundImage src={logo} alt="Habitual Logo" />
        <GetStarted variant="contained" size="large" href="/login">Get started </GetStarted>
      </HeroContainer>
    </>
  );
};

export default Home;
