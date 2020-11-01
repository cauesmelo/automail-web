import styled, { css } from 'styled-components';

interface TabProps {
  isActive?: boolean;
}

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
    font-weight: 500;
  }
  p {
    text-align: center;
    color: rgb(62, 70, 66);
    padding-top: 20px;
    margin: 0 auto;
    width: 70%;
    padding-bottom: 50px;
  }
`;

export const Content = styled.div`
  margin-top: 50px;
`;

export const ContentContainer = styled.div``;

export const Status = styled.div`
  display: flex;
`;

export const StatusContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  h3 {
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    margin-bottom: 15px;
  }
`;
export const StatusBox = styled.div`
  background-color: #eef5f9;
  border-radius: 5px;
  width: 90px;
  height: 60px;
  padding: 10px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .number {
    width: 100%;
  }

  .period {
    margin-top: 5px;
    width: 100%;
    font-size: 13px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const TabsContainer = styled.div`
  display: flex;
  width: 500px;
`;
export const Tab = styled.div<TabProps>`
  cursor: pointer;
  width: 50%;
  border: 1px solid rgb(169, 169, 169);
  margin: 0px 10px 0px 10px;
  padding: 10px 20px;
  border-radius: 5px 5px 0 0;
  background-color: rgb(242, 242, 242);
  color: rgb(169, 169, 169);
  display: flex;

  h4 {
    font-size: 20px;
    font-weight: 400;
  }

  .tabNumber {
    text-align: center;
    line-height: 30px;

    background-color: rgb(201, 207, 204);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: auto;
  }

  ${props =>
    props.isActive &&
    css`
      background-color: #83badc;
      color: white;

      .tabNumber {
        background-color: #558cae;
      }
    `}
`;
export const Search = styled.div`
  width: 300px;
  margin-left: auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: inset 0 0 10px #e9e9e9;

  input {
    border: none;
    width: 250px;
    font-size: 14px;
  }
`;
export const IconContainer = styled.div`
  cursor: pointer;
  background-color: rgb(52, 61, 57);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  margin-left: auto;
  svg {
    fill: white;
    width: 15px;
    height: 15px;
  }
`;

export const TableContainer = styled.div`
  padding: 20px;

  table {
    width: 100%;
    th {
      text-align: left;
      padding-bottom: 5px;
      border-bottom: 2px solid #e9e9e9;
    }
    tr {
      td {
        padding: 10px 0px 0px 0px;
      }
    }
  }
`;
