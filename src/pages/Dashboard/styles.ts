import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: white;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;
  }

  svg {
    color: black;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: black;
    }

    strong {
      color: blue;
    }
    a {
      text-decoration: none;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 40px auto;
`;

export const Listing = styled.div`
  flex: 1;
  width: 100%;
  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  button {
    margin-right: 20px;
    display: flex;
    align-items: center;
    color: black;
    width: 150px;
    height: 50px;

    span {
      width: 100%;
    }
  }

  svg {
    color: black;
    margin-right: 8px;
  }

  div {
    flex: 1;
    background: lightgrey;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-right: 24px;

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }
  }
`;

export const CreateList = styled.div`
  display: flex;
  margin-bottom: 80px;
`;
