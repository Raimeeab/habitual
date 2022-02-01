import React, { useContext } from "react";
import { Marginer } from "./Marginer";
import { AccountContext } from "./accountContext";
import {
  FormContainer,
  FormWrapper,
  Input,
  SbmtButton,
  MutedText,
  BoldLink,
} from "./Form.styled";

const SignupForm = () => {

  // Use context to switch user forms 
  const { switchToSignin } = useContext(AccountContext);
  return (
    <FormWrapper>
      <FormContainer>
        <Input type="name" placeholder="username" />
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Input type="password" placeholder="confirm password" />
        <Marginer direction="vertical" margin="1.6em" />
        <SbmtButton>Register</SbmtButton>
        <Marginer direction="vertical" margin=".5em" />
        <MutedText>
          Already have an account?{" "}
          <BoldLink href="#" onClick={switchToSignin}>
            Sign in
          </BoldLink>{" "}
        </MutedText>
      </FormContainer>
    </FormWrapper>
  );
};

export default SignupForm;
