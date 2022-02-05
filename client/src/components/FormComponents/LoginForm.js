import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { LOGIN_USER } from "../../utils/mutations";
import DotLoader from "react-spinners/DotLoader";
import { AccountContext } from "./accountContext";
import { Marginer } from "../../utils/Marginer";
import {
  FormContainer,
  FormWrapper,
  Input,
  SbmtButton,
  MutedText,
  BoldLink,
} from "../styles/Form.styled";

const LoginForm = (props) => {
  // Use context to switch user forms
  const { switchToSignup } = useContext(AccountContext);
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();
  // Update state based on form input
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
      await Auth.login(data.login.token);
      navigate("/habits");
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
        <MutedText>
          <DotLoader color={"#adc178"} loading={data} size={70} />
        </MutedText>
      ) : (
        <FormContainer onSubmit={handleFormSubmit}>
          <Marginer direction="vertical" margin={10} />
          <Input
            type="name"
            name="username"
            placeholder="username"
            value={formState.username}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={formState.password}
            onChange={handleChange}
          />
          <Marginer direction="vertical" margin="1.6em" />
          <SbmtButton type="submit">Sign in</SbmtButton>
          <Marginer direction="vertical" margin=".5em" />
          <MutedText>
            Don't have an account?{" "}
            <BoldLink href="#" onClick={switchToSignup}>
              Sign up
            </BoldLink>{" "}
          </MutedText>
        </FormContainer>
      )}
      {error && <MutedText>{error.message}</MutedText>}
    </FormWrapper>
  );
};
export default LoginForm;
