import React from "react";
import logo from "../logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavBar = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  text-align: center;
  padding: 8px;
  background: white;
  z-index: 10;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
`;

const FlexLink = styled(Link)`
  display: flex;
`;

const NavBar = () => (
  <StyledNavBar>
    <FlexLink to="/">
      <img src={logo} alt="logo" />
    </FlexLink>
  </StyledNavBar>
);

export default NavBar;
