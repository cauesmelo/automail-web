import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid black;
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
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr; 
`;

export const AccountHeader = styled.div`
  grid-column-start: span 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const LogoutButton = styled.div`

`;

export const AccountContainer = styled.div`
  
`;



export const ButtonMenu = styled.div``;

export const EmailsContainer = styled.div``;

export const BumpsContainer = styled.div``;

export const TitleContainer = styled.div``;

export const Content = styled.div``;


