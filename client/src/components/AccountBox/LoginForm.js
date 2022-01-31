import React, { useContext } from "react";
import { AccountContext } from "./accountContext";
import { Marginer } from "./Marginer";
import {
  FormContainer,
  FormWrapper,
  Input,
  SbmtButton,
  MutedText,
  BoldLink,
} from "./Form.styled";

const LoginForm = (props) => {

    const { switchToSignup } = useContext(AccountContext); 

  return (
    <FormWrapper>
      <FormContainer>
        <Marginer direction="vertical" margin={10} />
        <Input type="name" placeholder="username" />
        <Input type="password" placeholder="password" />
        <Marginer direction="vertical" margin="1.6em" />
        <SbmtButton>Sign in</SbmtButton>
        <Marginer direction="vertical" margin=".5em" />
        <MutedText>
          Don't have an account? <BoldLink href="#" onClick={switchToSignup}>Sign up</BoldLink>{" "}
        </MutedText>
      </FormContainer>
    </FormWrapper>
  );
};

export default LoginForm;
