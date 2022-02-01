import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
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

import Auth from "../../utils/auth";

const LoginForm = (props) => {
  // Use context to switch user forms
  const { switchToSignup } = useContext(AccountContext);

  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // Update state based on form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // Clear form values
    setFormState({
      username: "",
      password: "",
    });
  };

  return (
    <FormWrapper>
      {data ? (
        <Link to="/habits"></Link>
      ) : (
        <FormContainer onSubmit={handleFormSubmit}>
          <Marginer direction="vertical" margin={10} />
          <Input
            type="name"
            placeholder="username"
            value={formState.username}
            onChange={handleChange}
            // error={error.username ? true : false}
          />
          <Input
            type="password"
            placeholder="password"
            value={formState.password}
            onChange={handleChange}
            // error={error.password ? true : false}
          />
          <Marginer direction="vertical" margin="1.6em" />
          <SbmtButton>Sign in</SbmtButton>
          <Marginer direction="vertical" margin=".5em" />
          <MutedText>
            Don't have an account?{" "}
            <BoldLink href="#" onClick={switchToSignup}>
              Sign up
            </BoldLink>{" "}
          </MutedText>
        </FormContainer>
      )} 
      {error && (
        <MutedText>{error.message}</MutedText>
      )}
    </FormWrapper>
  );
};

export default LoginForm;
