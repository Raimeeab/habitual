import React from "react";
import logo from "../../assets/whiteLogo.png";
import bgGif from "../../assets/background.gif"

import { ContentWrapper, BackgroundImage,BackgroundGif, HeroContainer, GetStarted } from "../styles/Home.styled";

const Home = () => {
  return (
    <>
      <HeroContainer>
        {/* <Background src={background} alt="Background image"/ > */}
        <BackgroundGif src={bgGif}>
          {/* <source src={bgGif} type="video/mp4" /> */}
        </BackgroundGif>
        <ContentWrapper>
        <BackgroundImage src={logo} alt="Habitual Logo" />
        <GetStarted variant="contained" size="large" href="/login">Get started </GetStarted>
        </ContentWrapper>
      </HeroContainer>
    </>
  );
};

export default Home;
