import React, { useState } from "react";
import { AccountContext } from "./accountContext";
import {
  FormContainer,
  BoxContainer,
  TopContainer,
  BackDrop,
} from "./Form.styled";

const AccountBox = () => {

  return (
    <AccountContext.Provider>
      <FormContainer>
      <BoxContainer>
        <TopContainer>
          <BackDrop/>
        </TopContainer>
      </BoxContainer>

      </FormContainer>
    </AccountContext.Provider>
  );
};

export default AccountBox;
