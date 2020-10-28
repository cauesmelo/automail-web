import styled from 'styled-components';
import img from '../../assets/austin-distel-VvAcrVa56fc-unsplash.jpg';


export const Container = styled.div`

background-color:  #475161;
  
`;

export const Header = styled.div`
  max-width: 70%;
  margin: auto;
`;

export const GoogleLoginContainer = styled.div`
  float: right;
  padding-top: 0.5em;
`;

export const Parallax = styled.div`
  background-image: url(${img});
  height:100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &:after{
    content: '';
  }
  div {
    max-width: 70%;
    margin: auto;
    height: 100%;
    h2 {
      background-color: rgba(255,255,255,0.6);
      color: #5A5A5A;
      padding: 2em;
      text-align: center;
      top: 38%;
      position: relative;
      border-radius: 1em;
    }
  }
    
`;

export const Content = styled.div`
  max-width: 70%;
  margin: auto;
  height:100vh;
`;

export const FixedContent = styled.div`
padding: 2em;
text-align: center;
h1 {
  margin-bottom: 0.5em;
  color:white;
}
  display:flex; 
  flex-direction:column; 
  justify-content:space-between;
`;

export const CardList = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Card = styled.div`
  margin: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  border-radius: 0.5em;
  p {
    margin: 0.3em 0;
  }
  span { 
    p{
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  margin: 5em 0 0 0;
  h2{
    color: white;
  }
  img {
    height: 5vh;
    width: 3em;
    margin: 0 0.5em;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(358deg) brightness(103%) contrast(101%);
  }
`;