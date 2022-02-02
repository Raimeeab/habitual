import React, { useState } from "react";
import LoginForm from "../AccountBox/LoginForm";
import SignupForm from "../AccountBox/SignupForm";
import { AccountContext } from "../AccountBox/accountContext";
import {
  BoxWrapper,
  BoxContainer,
  TopContainer,
  BackDrop,
  HeaderContainer,
  HeaderText,
  SmallText,
  InnerContainer,
} from "../styles/Form.styled";

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

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignin, switchToSignup };

  return (
    <AccountContext.Provider value={contextValue}>
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
            {active === "signin" && (
              <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back!</HeaderText>
                <SmallText>Please sign-in to continue</SmallText>
              </HeaderContainer>
            )}
            {active === "signup" && (
              <HeaderContainer>
                <HeaderText>Create</HeaderText>
                <HeaderText>Account</HeaderText>
                <SmallText>Please sign-up to continue</SmallText>
              </HeaderContainer>
            )}
          </TopContainer>
          <InnerContainer>
            {" "}
            {active === "signin" && <LoginForm />}
            {active === "signup" && <SignupForm />}
          </InnerContainer>
        </BoxContainer>
      </BoxWrapper>
    </AccountContext.Provider>
  );
};

export default AccountBox;
