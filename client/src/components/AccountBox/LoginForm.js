import React from "react";
import { Marginer } from "./Marginer";
import {
  FormContainer,
  FormWrapper,
  Input,
  SbmtButton,
} from "./Form.styled";

const LoginForm = (props) => {
  return (
    <FormWrapper>
      <FormContainer>
      <Marginer direction="vertical" margin={10} />
        <Input type="name" placeholder="username" />
        <Input type="password" placeholder="password" />
        <Marginer direction="vertical" margin="1.6em" />
        <SbmtButton>Signin</SbmtButton>
        <Marginer direction="vertical" margin="1em" />
      </FormContainer>
    </FormWrapper>
  );
};

export default LoginForm;
