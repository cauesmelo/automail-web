import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  height: 150px;
  background-color: rgb(131, 186, 220);
  color: white;
  h1 {
    font-size: 30px;
    text-align: center;
    line-height: 150px;
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
    form {
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
