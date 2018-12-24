import React from "react";
import logo from "../logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavBar = styled.header`
  position: fixed;
  width: 100%;
  height: 48px;
  top: 0;
  left: 0;
  text-align: center;
  padding: 8px;
  background: white;
  z-index: 1;
`;

const NavBar = () => (
  <StyledNavBar>
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
  </StyledNavBar>
);

export default NavBar;
