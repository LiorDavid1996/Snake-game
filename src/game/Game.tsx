import Canvas from "../canvas/Canvas"
 import { GameWrapper } from "./Game.styles";
 import draw from "../draw/draw";
 import useGameLogic from "./useGameLogic";
import { useRef } from "react";

interface GameProps{

}

const Game:React.FC<GameProps> =({}) =>{
const canvasRef = useRef<HTMLCanvasElement>(null)

const {snakeBody,onKeyDownHandler} = useGameLogic()
      const drawGame = (ctx: CanvasRenderingContext2D) => {
     draw({ctx,snakeBody})
  };
 return(
 <GameWrapper tabIndex={0} onKeyDown={onKeyDownHandler}>
    <Canvas ref={canvasRef} width={400} height={200} draw={drawGame }/>
    <h1>wht the fuck</h1>
 </GameWrapper>
    
    )
}

export default Game