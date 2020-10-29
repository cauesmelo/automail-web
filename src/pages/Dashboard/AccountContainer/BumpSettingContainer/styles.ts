import styled from 'styled-components';

export const Container = styled.div`
background-color: #8699B8;
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
