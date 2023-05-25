
import styled from 'styled-components';

export const GameWrapper = styled.div`
  width: 100%auto;
  display: flex;
  align-items: center;
  outline: none;
  flex-direction: column;
  
`;
export const GreenSquare = styled.div`
  width: 20px;
  height: 20px;
  background-color: green;
  
  
`;

export const ScoreWrapper = styled.div`
display: flex;
justify-content: center;
color: white;
margin-bottom: 20px;;


`
export const Number = styled.span`
  margin-left: 10px;
  color: white;
  font-size: 16px;
  
`;

export const Image = styled.img`
width: 50px;
height: 30px;
margin-bottom: 10px;

vertical-align: middle;
`;

export const Score = styled.h1`

  background: linear-gradient(to left, #753ad5, #d53a9d);
  --webkit-background-clip: text;
  --webkit-text-fill-color: transparent;
`;