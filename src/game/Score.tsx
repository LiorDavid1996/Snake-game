import { GreenSquare ,ScoreWrapper,Number ,Image} from "./Game.styles";
import { useState } from "react";
import { GameState } from "./Game";
interface ScoreProps {
    score:number,
    gameOver:GameState

}
 const Score:React.FC<ScoreProps> = ({score ,gameOver})=>{
const [bestScore,setBestScore]=useState(0)


if(gameOver===GameState.GAME_OVER){
    if(score>bestScore){
    setBestScore(score)
    localStorage.setItem("bestScore",`${score}`)
    
    }
}



    return(
        <ScoreWrapper>
            <GreenSquare/>
           <Number>{score}</Number>
           <Image src="tropy-9.png"/>
           {localStorage.getItem("bestScore")===null?  `${bestScore}`:localStorage.getItem("bestScore")}
        </ScoreWrapper>
        
    )

}


export default Score