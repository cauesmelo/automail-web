import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: white;
  border-radius: 10px;
  border: 2px solid #475161;
  padding: 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;
  transition: color, border-color 0.2s;

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
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
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
