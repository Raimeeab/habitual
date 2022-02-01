import React from "react";
import Button from '@mui/material/Button';
import logo from "../../assets/logo.png";
import {
  TextContainer,
  BackgroundImage,
  Welcome,
  Text,
} from "./Home.styled";

const Home = () => {
  return (
    <>
      <BackgroundImage img={logo} alt="Habitual logo">
        {/* <Image img={logo} alt="Habitual logo" /> */}
      <TextContainer>
        <Welcome> Welcome to Habitual </Welcome>
        <Text>Habit tracking, made easy</Text>
        <Button variant="contained" size="medium" href="/login">Get Started</Button>
      </TextContainer>
      </BackgroundImage>
    </>
  );
};

export default Home;
