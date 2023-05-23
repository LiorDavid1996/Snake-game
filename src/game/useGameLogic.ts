import { useState } from "react";
import useInterval from "../utils/useInterval";
import createSnakeMovement from "./movement";

export interface Position{
    x:number;
    y:number;
}

export enum Direction{
    UP,
    DOWN,
    LEFT,
    RIGHT

}
const MOVEMENT_SPEED=75
const useGameLogic = () =>{
    const [direction, setDirection] = useState<Direction | undefined>();

    const [snakeBody,setSnakeBody] = useState<Position[]>([
        {
           x:0,
           y:0
        }
    ])
    const[foodPosition,setFoodPosition]=useState<Position[] | undefined> ( ) 
    const { moveDown, moveUp, moveLeft, moveRight } = createSnakeMovement();
    const onKeyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
        switch (event.code) {
          case 'KeyS':
            if (direction !== Direction.UP) {
              setDirection(Direction.DOWN);
            }
            break;
          case 'KeyW':
            if (direction !== Direction.DOWN) {
              setDirection(Direction.UP);
            }
            break;
          case 'KeyD':
            if (direction !== Direction.LEFT) {
              setDirection(Direction.RIGHT);
            }
            break;
          case 'KeyA':
            if (direction !== Direction.RIGHT) {
              setDirection(Direction.LEFT);
            }
            break;
        }
        console.log(event.code,direction);
        
      };
    
   
  const moveSnake = () => {
    let snakeBodyAfterMovement: Position[] | undefined;
    switch (direction) {
      case Direction.UP:
        snakeBodyAfterMovement=moveUp(snakeBody)
        break;
        case Direction.DOWN:
            snakeBodyAfterMovement=moveDown(snakeBody)
        break
        case Direction.LEFT:
            snakeBodyAfterMovement=moveLeft(snakeBody)
            break
        case Direction.RIGHT:
            snakeBodyAfterMovement=moveRight(snakeBody)
            break
    } 
    if(snakeBodyAfterMovement){
        setSnakeBody(snakeBodyAfterMovement)
    }
};
    useInterval(moveSnake,MOVEMENT_SPEED)
    return{
        snakeBody,
        onKeyDownHandler,
    }
}
export default useGameLogic