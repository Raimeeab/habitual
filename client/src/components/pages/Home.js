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
        <BackgroundImage src={logo} />
        <GetStarted variant="contained" size="large" href="/login">Get started </GetStarted>
      </HeroContainer>
      {/* <HeroContainer>
        <video loop autoPlay alt="Habitual logo" className="backgroundVideo">
          <source src={bgVid} type="video/mp4" />
        </video>
        <BackgroundImage img={logo} alt="Habitual logo">
        <TextContainer>
          <Welcome> Welcome to Habitual </Welcome>
          <Text>Habit tracking, made easy</Text>
          <StyledButton variant="contained" size="small" href="/login">
            Get Started
          </StyledButton>
        </TextContainer>
        </BackgroundImage>
      </HeroContainer> */}
    </>
  );
};

export default Home;
