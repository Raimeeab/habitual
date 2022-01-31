import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { AccountContext } from "./accountContext";
import {
  BoxWrapper,
  BoxContainer,
  TopContainer,
  BackDrop,
  HeaderContainer,
  HeaderText,
  SmallText,
  InnerContainer,
} from "./Form.styled";

// ----- Holds all the porperties for the expanded/ collapsed state -----
const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const AccountBox = (props) => {
  // State used to determine when the animation is collapsed or not
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);

    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition * 1000 - 1500);
  };

  const switchToSignuUp = () => {
    playExpandingAnimation(); 
   setTimeout(()=> {
    setActive("signup"); 
   }, 450)
  }

  const switchToSignIn = () => {
    playExpandingAnimation(); 
   setTimeout(()=> {
    setActive("signin"); 
   }, 450)
  }

  return (
    <AccountContext.Provider>
      <BoxWrapper>
        <BoxContainer>
          <TopContainer>
            {/* the animation will run the variants depending on the state */}
            <BackDrop
              initial={false}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={backdropVariants}
              transition={expandingTransition}
            />
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back!</HeaderText>
              <SmallText>Sign in to continue</SmallText>
            </HeaderContainer>
          </TopContainer>
          <InnerContainer>{<LoginForm></LoginForm>}</InnerContainer>
        </BoxContainer>
      </BoxWrapper>
    </AccountContext.Provider>
  );
};

export default AccountBox;
