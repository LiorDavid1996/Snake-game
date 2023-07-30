import { Blur ,Button ,TryAgainWrapper} from "./Game.styles"
import { GameState } from "./Game";
import { useEffect } from "react";
interface TryAgainProps {
    gameState:GameState
    setGameState:any
    resetGameState:any


}
const TryAgain:React.FC<TryAgainProps>=({gameState ,setGameState,resetGameState})=>{
    {console.log(gameState)
    }
   
    useEffect(()=>{
 resetGameState()

    },[])
return (
   <Blur>
    <TryAgainWrapper>
    <img src="sucker-mr-snake.gif"/>
    <Button onClick={()=>setGameState(GameState.RUNNING)}> TRY AGAIN</Button>
    
    </TryAgainWrapper>
   </Blur>
)
}


export default TryAgain
