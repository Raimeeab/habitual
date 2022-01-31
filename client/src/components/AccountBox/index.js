import React, { useState } from "react";
import { AccountContext } from "./accountContext";
import {
  BoxContainer,
  TopContainer,
  BackDrop,
} from "./Form.styled";

const AccountBox = () => {

  return (
    <AccountContext.Provider>
      <BoxContainer>
        <TopContainer>
          <BackDrop/>
        
        </TopContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
};

export default AccountBox;
