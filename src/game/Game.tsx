import Canvas from "../canvas/Canvas"
 import { GameWrapper , PlayStop  } from "./Game.styles";
 import draw from "../draw/draw";
 import useGameLogic from "./useGameLogic";
import { useRef, useState } from "react";
import Score from "./Score";
import TryAgain from "./TryAgain";

interface GameProps{}

export enum GameState{
    RUNNING,
    GAME_OVER,
    PAUSED
}

const Game:React.FC<GameProps> =({}) =>{
const canvasRef = useRef<HTMLCanvasElement>(null)
const [gameState,setGameState]=useState<GameState>(GameState.RUNNING)

const onGameOver = () => setGameState(GameState.GAME_OVER)

const {snakeBody,onKeyDownHandler,foodPosition,resetGameState} = useGameLogic({
    canvasHeight:canvasRef.current?.height,
    canvasWidth:canvasRef.current?.width,
    onGameOver,
    gameState,
    
})
      const drawGame = (ctx: CanvasRenderingContext2D) => {
     draw({ctx,snakeBody,foodPosition})
  };

 return(
     <>
     {gameState=== GameState.GAME_OVER&&<TryAgain gameState={gameState} setGameState={setGameState} resetGameState={resetGameState}  />}
       <Score score={(snakeBody.length - 1) * 10} gameOver={gameState}/>
      <GameWrapper tabIndex={0} onKeyDown={onKeyDownHandler}>
    <Canvas ref={canvasRef} width={400} height={200} draw={drawGame }/>
    {gameState === GameState.GAME_OVER ? (
        <button onClick={() => {
            setGameState(GameState.RUNNING)
            resetGameState()
        }}>play again</button>
    ):( <button onClick={()=>{
        setGameState(gameState === GameState.RUNNING ? GameState.PAUSED : GameState.RUNNING)
    }}>{gameState === GameState.RUNNING? "pause": "play"}</button>)}
    
    
 </GameWrapper>
 </>
    )
}

export default Game