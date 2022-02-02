import React from "react";
import logo from "../../assets/logo.png";
import {
  TextContainer,
  BackgroundImage,
  Welcome,
  Text,
  StyledButton
} from "../styles/Home.styled";

const Home = () => {
  return (
    <>
      <BackgroundImage img={logo} alt="Habitual logo">
      <TextContainer>
        <Welcome> Welcome to Habitual </Welcome>
        <Text>Habit tracking, made easy</Text>
        <StyledButton variant="contained" size="small" href="/login">Get Started</StyledButton>
      </TextContainer>
      </BackgroundImage>
    </>
  );
};

export default Home;
