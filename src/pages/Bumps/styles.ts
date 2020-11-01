import styled, { css } from 'styled-components';

interface ItemProps {
  isLast?: boolean;
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
    color: rgb(62, 70, 66);
    padding-top: 20px;
    margin: 0 auto;
    width: 70%;
    padding-bottom: 50px;
  }
`;

export const Content = styled.div`
  margin-top: 50px;
  h2 {
    margin-bottom: 15px;
    font-size: 32px;
  }
`;

export const BumpMenu = styled.div`
  border: 1px solid #a0a0a0;
  border-radius: 15px 15px 0px 0px;
  padding: 20px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(12, 1fr);
  select {
    grid-column-start: span 5;
    margin: 5px;
    padding: 5px;
  }
  button {
    margin: 0px;
    height: 40px;
    border-radius: 10px;
    background-color: #dd3636;
    font-weight: 500;
    grid-column-start: span 4;
    margin: 5px;
    &:hover {
      background-color: #a32626;
    }
  }
  p {
    margin: 5px;
    font-size: 16px;
    text-align: center;
    grid-column-start: span 3;
    color: #a0a0a0;
    svg {
      padding-top: 2px;
      margin-left: 10px;
    }
  }

  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltipText {
    visibility: hidden;
    width: 400px;
    background-color: white;
    color: #a0a0a0;
    text-align: left;
    padding: 20px 15px;
    border-radius: 6px;
    bottom: 120%;
    left: 50%;
    margin-left: -200px;
    border: 1px solid #a0a0a0;

    position: absolute;
    z-index: 1;
  }

  .tooltip:hover .tooltipText {
    visibility: visible;
  }

  .tooltip .tooltipText::after {
    content: ' ';
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 10px;
    border-style: solid;
    border-color: #a0a0a0 transparent transparent transparent;
  }
`;
export const BumpHeader = styled.div`
  border: 1px solid #a0a0a0;
  border-top: none;
  background-color: #ededed;
  padding: 30px;
  span {
    font-size: 14px;
    color: rgb(153, 153, 153);
    text-decoration: underline;
  }
  h3 {
    font-size: 28px;
    display: inline-block;
    margin-right: 20px;
  }
  p {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
    color: rgb(119, 124, 122);
  }
`;

export const BumpContent = styled.div`
  border: 1px solid #a0a0a0;
  padding: 30px;
  border-top: none;
  display: grid;

  .buttonAdd {
    justify-self: center;
    width: 50%;
    font-weight: 500;
    height: 60px;
    border-radius: 5px;
    background-color: #83badc;
    font-size: 22px;
    &:hover {
      background-color: #567c94;
    }
  }
`;
export const BumpContentHeader = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(12, 1fr);
  height: 100px;
  svg {
    fill: #83badc;
    grid-column-start: span 2;
    width: 100%;
    height: 100%;
  }
  h3 {
    grid-column-start: span 10;
    font-size: 28px;
    line-height: 100px;
    font-weight: 400;
    padding-left: 30px;
  }
`;
export const BumpContentItem = styled.div<ItemProps>`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: 50px;

  ${props =>
    props.isLast
      ? css`
          .deleteButton {
            display: block;
          }
        `
      : css`
          .deleteButton {
            display: none;
          }
        `}

  .dayBall {
    color: white;
    font-size: 12px;
    grid-column-start: span 2;
    margin: 0 auto;
    margin-top: 20px;
    padding: 10px;
    text-align: center;
    height: 50px;
    width: 50px;
    background-color: #83badc;
    border-radius: 50%;

    .dayLabel {
      display: inline-block;
      margin-top: -5px;
    }
    .dayNumber {
      margin-top: -7px;
      display: inline-block;
      width: 100%;
      font-size: 24px;
    }
  }
`;

export const BumpContentItemCard = styled.div`
  grid-column-start: span 10;
`;
export const BumpContentItemTitle = styled.div`
  padding: 25px 40px;
  background-color: #343d39;
  font-size: 28px;
  color: white;
  font-weight: 600;
  border-radius: 5px 5px 0 0;
  position: relative;
  display: flex;
  justify-content: flex-end;

  h3 {
    margin-right: auto;
  }

  &:after {
    content: ' ';
    position: absolute;
    left: -15px;
    top: 25px;
    border-top: 15px solid transparent;
    border-right: 15px solid #343d39;
    border-left: none;
    border-bottom: 15px solid transparent;
  }

  .editButton {
    margin-left: 5px;
    margin-right: 5px;
    background-color: #f2f2f2;
    justify-self: end;
    border-radius: 5px;
    color: #a0a0a0;
    font-weight: 700;

    &:hover {
      color: #343d39;
    }

    svg {
      margin-right: 5px;
    }
  }

  .deleteButton {
    margin-left: 5px;
    margin-right: 5px;
    background-color: #f2f2f2;
    border-radius: 5px;
    color: #dd3636;
    font-weight: 700;
    justify-self: end;

    &:hover {
      color: white;
      background-color: #dd3636;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const BumpContentItemSubTitle = styled.div`
  background-color: rgb(237, 237, 237);
  p {
    padding: 10px 40px;
    font-size: 16px;
    svg {
      padding-top: 2px;
      margin-right: 7px;
    }
  }
`;
export const BumpContentItemContent = styled.div`
  padding: 30px;
  border: 1px solid rgb(237, 237, 237);
  border-radius: 0px 0px 10px 10px;
  border-top: none;

  > p {
    font-size: 22px;
    padding: 50px;
  }

  span {
    color: rgb(164, 164, 164);
    font-size: 14px;
    font-weight: 500;
    margin-right: 40px;
  }

  .Balls {
    display: inline-block;
    margin-right: 20px;
    background-color: rgb(242, 242, 242);
    border: 1px solid grey;
    width: 23px;
    height: 18px;
    padding-left: 1px;
    svg {
      fill: rgb(146, 146, 146);
      width: 6px;
      padding: 1px;
    }
  }
`;
