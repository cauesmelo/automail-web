import styled from 'styled-components';

export const Container = styled.div``;

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
  grid-template-columns: 1fr 1fr 1fr;
  justify-self: end;
`;

export const AccountHeader = styled.div`
  grid-column-start: span 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1em 0;
  margin: auto;
  p {
    margin: 0 40px;
  }
`;

export const LogoutButton = styled.div`
  margin: 0 1em;
  justify-self: end;
`;

export const AccountContainer = styled.div``;

export const ButtonMenu = styled.div``;

export const EmailsContainer = styled.div``;

export const BumpsContainer = styled.div``;

export const TitleContainer = styled.div``;

export const Content = styled.div``;

export const AccountInformation = styled.div`
  padding: 10px;
  display: flex;

  h3 {
    font-weight: 800;
    font-size: 18px;
    margin: 20px 0px 5px;
  }

  p {
    font-size: 16px;
  }
`;
export const AccountInformationTitle = styled.div`
  font-size: 24px;
  margin: 20px;
`;
export const AccountInformationUser = styled.div`
  width: 50%;
`;

export const AccountInformationType = styled.div`
  width: 50%;
`;
