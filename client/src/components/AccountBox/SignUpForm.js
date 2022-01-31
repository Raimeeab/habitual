import React from "react";
import { Marginer } from "./Marginer";
import {
  FormContainer,
  FormWrapper,
  Input,
  SbmtButton,
  MutedText,
  BoldLink,
} from "./Form.styled";

const SignupForm = () => {
  return (
    <FormWrapper>
      <FormContainer>
        <Input type="name" placeholder="username" />
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Input type="password" placeholder="confirmpassword" />
        <Marginer direction="vertical" margin="1.6em" />
        <SbmtButton>Signin</SbmtButton>
        <Marginer direction="vertical" margin=".5em" />
        <MutedText>
          Already have an account? <BoldLink href="#">Sign in</BoldLink>{" "}
        </MutedText>
      </FormContainer>
    </FormWrapper>
  );
};

export default SignupForm;
