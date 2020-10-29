import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 1em;
  background-color: #4C5769;
`;

export const TitleContainer = styled.div`
  h1 {
    text-align: center;
  }
`;

export const Content = styled.div``;

export const AccountInformation = styled.div`
  padding: 1em 1em 1em 1em;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
`;

export const AccountInformationTitle = styled.div`
  grid-column-start: span 2;
  margin: 0 0 2em 0;
`;

export const AccountInformationUser = styled.div`
  div{
    form{
      input{
        width:17em;
        color: white;
        height: 1.4em;
        padding-left: 15px;
        margin-bottom: 0.7em;
        border: none;
        border-radius: 20px;
        background: rgba(255,255,255,.2);
      }
    }
  }

  div{
    p{
      margin: 0.6em 0;
      span{
        font-weight: bold;
      }
    }
  }
`;

export const AccountInformationType = styled.div`
div{
  p{
    margin-bottom: 1em;
    span{
      font-weight: bold;
    }
  }
}
`;