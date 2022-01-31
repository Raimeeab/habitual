import React from "react";
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import styled from "styled-components";
import logoImg from "../../assets/logo.png";

const Styles = styled.div`
  .logo {
    width: 120px;
    height: 120px;
  }

  .formTitle {
    color: #6c584c;
    font-weight: bold;
    margin-top: 20px;
  }
  .formContainer {
    margin-top: 60px;
  }

  .formGroup {
    margin-top: 10px;
    padding: 0 90px;
  }

  .formLabel {
    &:focus {
      color: #adc178;
    }
  }

  .submitBtn {
    margin-top: 10px;
    background-color: #6c584c;
    font-size: 1rem;
  }
`;

const Login = () => {
  return (
    <Styles>
      {/* onSubmit={handleSubmit} */}
      <Form className="formContainer text-center">
        <img src={logoImg} alt="Habitual Logo" className="logo"></img>
        <h1 className="mt-10 fw-bold text-center formTitle">Login</h1>
        <Form.Group className="formGroup" size="sm" controlId="formGroupName">
          <FloatingLabel
            className="formLabel my-2"
            controlId="floatingEmail"
            label="email"
          >
            <Form.Control
              className="formControl"
              type="email"
              placeholder="email"
              // onChange={(e) => setField("email", e.target.value)}
              // isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {/* {errors.email} */}
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel
            className="formLabel"
            controlId="floatingInput"
            label="password"
          >
            <Form.Control
              size="sm"
              className="formControl"
              type="password"
              placeholder="password"
              // onChange={(e) => setField("enquiry", e.target.value)}
              // isInvalid={!!errors.enquiry}
            />
            <Form.Control.Feedback type="invalid">
              {/* {errors.enquiry} */}
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <div className="container">
          <div className="col-md-12 text-center">
            <Button variant="dark" className="btn-lg submitBtn" type="submit">
              Submit
            </Button>
          </div>
        </div>
        <div>
          <Link to="signup" className="my-2">
            Don't have an account?
          </Link>
        </div>
      </Form>
    </Styles>
  );
};

export default Login;
