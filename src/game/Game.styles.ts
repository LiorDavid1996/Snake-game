
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
background-color: bisque;
width: 40vw;

`
export const PlayStop = styled.div` 
display: flex;
justify-content: center;
color: white;
margin-bottom: 20px;
width: 40vw;
background-color: white;
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

export const Blur = styled.div`
display: flex;
align-items: center;
justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.768);
  bottom: 0;
  z-index: 99;
`
export const TryAgainWrapper =styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: beige;
width: 60%;
height: 80%;

`
export const Button =styled.button`

  background-image: linear-gradient(-180deg, #37AEE2 0%, #1E96C8 100%);
  border-radius: .5rem;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-size: 56px;
  justify-content: center;
  padding: 1rem 1.75rem;
  text-decoration: none;
  width: 40%;
  border: 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;


&&:hover {
  background-image: linear-gradient(-180deg, #1D95C9 0%, #17759C 100%);
}




`