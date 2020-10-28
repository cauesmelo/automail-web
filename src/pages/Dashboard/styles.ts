import styled from 'styled-components';

export const Container = styled.div`
  background-color: #8699B8;
  height: 100vh;
  padding: 0 1em;
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

export const AccountContainer = styled.div``;

export const ButtonMenu = styled.div``;

export const EmailsContainer = styled.div``;

export const BumpsContainer = styled.div``;

export const TitleContainer = styled.div``;

export const Content = styled.div``;

export const AccountInformation = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;

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
  width: 45%;
`;

export const AccountInformationType = styled.div`
  width: 45%;
`;

export const BumpSettingsContainer = styled.div`
  h2 {
    font-size: 24px;
    margin: 20px;
  }
`;
export const BumpSettingsRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px 0px;

  h4 {
    width: 300px;
  }

  .containerTimezone {
    width: 800px;
  }

  .checkContainer {
    display: flex;
    flex: 1;
    justify-content: space-around;
  }

  .checkItem {
    display: flex;
    input {
      margin: 0px 10px 0px 0px;
    }
  }
`;
