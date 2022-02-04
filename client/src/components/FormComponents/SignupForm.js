import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { Marginer } from "../../utils/Marginer";
import { AccountContext } from "./accountContext";
import DotLoader from "react-spinners/DotLoader";
import {
  FormContainer,
  FormWrapper,
  Input,
  SbmtButton,
  MutedText,
  BoldLink,
} from "../styles/LoginForm.styled";

const SignupForm = () => {
  // Use context to switch user forms
  const { switchToSignin } = useContext(AccountContext);
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signUp, { error, data }] = useMutation(ADD_USER);

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
    console.log(formState);
    try {
      const { data } = await signUp({
        variables: { userInput: { ...formState } },
      });
      console.log("checking if signup fetch is called:", JSON.stringify(data));
      await Auth.login(data.signUp.token);
      navigate("/habits");
    } catch (e) {
      console.error(e);
      console.log(e);
    }
  };
  
  return (
    <FormWrapper>
      {data ? (
        <MutedText>
          <DotLoader color={"#adc178"} loading={data} size={70} />
        </MutedText>
      ) : (
        <FormContainer onSubmit={handleFormSubmit}>
          <Input
            type="name"
            name="username"
            placeholder="username"
            value={formState.username}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="email"
            value={formState.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={formState.password}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            value={formState.confirmPassword}
            onChange={handleChange}
          />
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
      )}
      {error && <MutedText> {error.message} </MutedText>}
    </FormWrapper>
  );
};
export default SignupForm;
