import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  background-color: rgb(131, 186, 220);
  color: white;
  h1 {
    font-size: 30px;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
    font-weight: 500;
  }
`;

export const Content = styled.div``;

export const AccountInformation = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
`;

export const AccountInformationTitle = styled.div`
  height: 50px;
  border-radius: 10px 10px 0px 0px;
  background-color: rgb(52, 61, 57);

  color: white;
  grid-column-start: span 2;
  h2 {
    line-height: 50px;
    margin-left: 50px;
    font-size: 24px;
    font-weight: 400;
  }
`;

export const AccountInformationContent = styled.div`
  border: 1px solid #e9e9e9;
  border-top: none;
  padding: 15px 30px;
  grid-column-start: span 2;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

export const AccountInformationUser = styled.div`
  div {
    padding: 20px;
    width: 100%;
    input {
      padding: 10px;
    }
  }

  h4 {
    color: #a0a0a0;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

export const AccountInformationType = styled.div`
  div {
    display: grid;
    padding: 0px 0px 50px 0px;
    p {
      text-align: center;
    }
    h4 {
      color: #a0a0a0;
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 10px;
    }

    .box {
      border: 1px solid #e6e6e6;
      border-radius: 5px;
      p {
        font-size: 26px;
        margin: 50px 0px;
      }
    }
  }
`;

export const BumpSettings = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
`;
export const BumpSettingsTitle = styled.div`
  height: 50px;
  border-radius: 10px 10px 0px 0px;
  background-color: rgb(52, 61, 57);

  color: white;
  grid-column-start: span 2;
  h2 {
    line-height: 50px;
    margin-left: 50px;
    font-size: 24px;
    font-weight: 400;
  }
`;
export const BumpSettingsContent = styled.div`
  background-color: rgb(237, 247, 255);
  border: 1px solid #e9e9e9;
  border-top: none;
  padding: 15px 100px;
  grid-column-start: span 2;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding-top: 30px;
  button {
    grid-column-start: span 2;
    justify-self: center;
  }
`;

export const BumpSettingsRow = styled.div`
  display: grid;
  grid-column-start: span 2;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  margin-bottom: 35px;
  h4 {
    grid-column-start: span 1;
    align-self: center;
    font-weight: 400;
  }
  div {
    grid-column-start: span 5;
  }

  .whitebg {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
  }

  #copy {
    margin-right: 20px;
  }

  .copyLabel {
    font-size: 16px;
  }
`;
