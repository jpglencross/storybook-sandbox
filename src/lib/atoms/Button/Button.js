import React from "react";
import styled from "styled-components";

const BlueButton = styled(`button`)`
  background: lightblue;
  font-weight: 600;
  line-height: 30px;
  color: white;
  width: 150px;
  border-radius: 3px;
  border: none;
`;

const Button = ({ children }) => <BlueButton>{children}</BlueButton>;

export default Button;
