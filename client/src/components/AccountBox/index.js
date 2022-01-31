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

const AccountBox = () => {

  return (
    <AccountContext.Provider>
      <BoxWrapper>
      <BoxContainer>
        <TopContainer>
          <BackDrop/>
          <HeaderContainer>
            <HeaderText>Welcome</HeaderText>
            <HeaderText>Back!</HeaderText>
            <SmallText>Sign in to continue</SmallText>
          </HeaderContainer>
        </TopContainer>
        <InnerContainer>
          <LoginForm></LoginForm>
        </InnerContainer>
      </BoxContainer>

      </BoxWrapper>
    </AccountContext.Provider>
  );
};

export default AccountBox;
