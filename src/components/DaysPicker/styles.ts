import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0px 0px;
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
