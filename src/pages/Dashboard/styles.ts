import styled, { css } from 'styled-components';

interface TabProps {
  selected?: boolean;
}

export const Container = styled.div`
  background-color: white;
  height: 100vh;
  color: black;
  width: 70%;
  margin: auto;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Logo = styled.div`
  display: flex;
  width: 200px;
  justify-content: center;
  align-self: center;
  height: 50px;
  p {
    display: flex;
    align-self: center;
  }
`;

export const MenuHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-self: end;
`;

export const AccountHeader = styled.div`
  grid-column-start: 3;
  grid-column-end: span 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1em 0;
  margin: auto;
  width: 100%;
`;

export const LogoutButton = styled.div`
  justify-self: end;
`;

export const TabsButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
`;
export const TabButton = styled.button<TabProps>`
  display: flex;
  width: 150px;
  height: 50px;
  background-color: rgb(242, 242, 242);
  border: 1px solid #a9a9a9;
  border-bottom: none;
  font-size: 20px;
  border-radius: 10px 10px 0 0;
  color: #a9a9a9;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #555;
  }
  ${props =>
    props.selected &&
    css`
      background-color: #dd3636;
      color: white;
      border: none;
      &:hover {
        color: white;
      }
    `}

  span {
    margin-left: 10px;
    font-weight: 500;
  }
`;

export const TabsContentContainer = styled.div``;
