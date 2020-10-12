import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: white;
  border-radius: 1em;
  border: 0.2em solid #475161;
  padding: 1.6em;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;
  transition: color, border-color 0.2s;

  @media only screen and (max-width: 600px) {
    padding: 0.8em;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: black;
      border-color: black;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: black;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: black;

    &::placeholder {
      color: 475161;
    }
  }

  & + div {
    margin-top: 0.8em;
  }

  svg {
    margin-right: 1.6em;
  }
`;

export const Error = styled(Tooltip)`
  height: 2.0em;
  margin-left: 1.6em;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
