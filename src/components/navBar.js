import React from "react";
import logo from "../logo.svg";
import styled from "styled-components";

const StyledNavBar = styled.header`
  position: fixed;
  width: 100%;
  height: 48px;
  top: 0;
  left: 0;
  text-align: center;
  padding: 8px;
  background: white;
`;

const NavBar = () => (
  <StyledNavBar>
    <img src={logo} alt="logo" />
  </StyledNavBar>
);

export default NavBar;
