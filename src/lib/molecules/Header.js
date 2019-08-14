import React from "react";
import styled from "styled-components";
import { Button } from "../atoms";

const StyledHeader = styled(`div`)`
  background: #14233d;
  display: grid;
  grid-template-columns: auto 170px;
  color: white;
  height: 60px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Header = ({ children }) => (
  <StyledHeader>
    {children}
    <Button>Logout</Button>
  </StyledHeader>
);

export default Header;
