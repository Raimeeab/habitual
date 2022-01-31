import React from 'react';
import logo from "../../assets/logo.png"; 
import {HomeContainer, BackgroundImage, Welcome, Text, GetStarted} from "./Home.styled";

const Home = () => {
  return (
    <>
    <BackgroundImage img={logo} alt="Habitual logo">
      {/* <Image img={alt="Habitual logo" /> */}
      <Welcome> Welcome to Habitual </Welcome >
    <Text>Habit tracking, made easy</Text>
    </BackgroundImage>
    <HomeContainer>

    
    </HomeContainer>
    </>
  )
}

export default Home
