import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  padding: 30px;
  height: 13vh;
`;

export const GoogleLoginContainer = styled.div``;

export const Content = styled.div`
  border: 2px solid black;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    30deg,
    #000000 5.88%,
    #ffffff 5.88%,
    #ffffff 50%,
    #000000 50%,
    #000000 55.88%,
    #ffffff 55.88%,
    #ffffff 100%
  );
  background-size: 34px 19.63px;

  p {
    display: flex;
    height: 100px;
    width: 300px;
    background-color: white;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
`;
