import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #f0ead2;
  }

  .title {
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bolder;
    color: #adc178;
    justify-content: flex-end;
    text-shadow: 1px 1.5px #a98467;
  }

  .navbarLinks {
    margin-left: 10px;
    text-decoration: none;
    color: #6c584c;

    &:hover {
      transition: all 0.5 ease-in-out;
      border-bottom: 3px solid #adc178;
    }
  }
`;

const Header = () => {
  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };

  return (
    <Styles>
      <Navbar className="navbar" expand="sm">
        <Container fluid>
          <Link to="/" className="title">
            Habitual
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {Auth.loggedIn() ? (
                <>
                  <Link to="/" onClick={logout} className="navbarLinks">
                    {" "}
                    Logout
                  </Link>
                  <Link to="/habits" className="navbarLinks">
                    Habits
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="navbarLinks">
                    Login
                  </Link>
                  <Link to="/habits" className="navbarLinks">
                    Habits
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
};

export default Header;
