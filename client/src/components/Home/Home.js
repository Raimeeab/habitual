import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "@material-ui/core/Button"; 
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
        <Button variant="contained" href="/login">Get Started</Button>
      </TextContainer>
      </BackgroundImage>
    </>
  );
};

export default Home;
