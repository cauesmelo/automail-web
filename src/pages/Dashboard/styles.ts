import styled from 'styled-components';

export const Container = styled.div`
  background-color: #8699B8;
  height: 100vh;
  color: white;
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



export const ButtonMenu = styled.div``;

export const EmailsContainer = styled.div``;

export const BumpsContainer = styled.div``;

export const TitleContainer = styled.div``;

