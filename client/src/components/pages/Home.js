import React from "react";
import logo from "../../assets/whiteLogo.png";
import bgGif from "../../assets/background.gif"; 
import bgImage from "../../assets/background-image.png"; 

import { ContentWrapper, HeroBackground, BackgroundImage,BackgroundGif, HeroContainer, GetStarted } from "../styles/Home.styled";

const Home = () => {
  return (
    <>
      <HeroContainer>
        {/* <HeroBackground> */}
        {/* <Background src={background} alt="Background image"/ > */}
        <BackgroundGif src={bgImage}>
          {/* <source src={bgGif} type="video/mp4" /> */}
        </BackgroundGif>

        <ContentWrapper>
        <BackgroundImage src={logo} alt="Habitual Logo" />
        <GetStarted variant="contained" size="large" href="/login">Get started </GetStarted>
        </ContentWrapper>
        {/* </HeroBackground> */}
      </HeroContainer>
    </>
  );
};

export default Home;
