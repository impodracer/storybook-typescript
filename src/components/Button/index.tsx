import * as React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button.attrs({ type: 'button' })`
  background-color: #0f4c81;
  border: none;
  color: white;
  padding: 0.8em 1em;
`;

const Button: React.FC = ({ children }) => <ButtonBase>{children}</ButtonBase>;

export default Button;
