import { Position } from "../game/useGameLogic"
interface DrawArgs{
    ctx:CanvasRenderingContext2D
    snakeBody:Position[]
    foodPosition?:Position
}

export const SEGMENT_SIZE =5
const drawSnake = (ctx: CanvasRenderingContext2D, snakeBody: Position[]) => {
    const head = snakeBody[snakeBody.length - 1];
  
    // Draw body segments
    ctx.fillStyle = 'green';
    snakeBody.slice(0, -1).forEach(segment => {
      ctx.beginPath();
      ctx.arc(segment.x, segment.y, SEGMENT_SIZE / 2, 0, Math.PI * 2);
      ctx.fill();
    });
  
    // Draw head
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(head.x, head.y, SEGMENT_SIZE / 2, 0, Math.PI * 2);
    ctx.fill();
  
    // Draw eyes on the head
    ctx.fillStyle = 'black';
    const eyeSize = SEGMENT_SIZE / 10;
    const eyeOffset = SEGMENT_SIZE / 3;
    const eyeX = head.x +(head.angle ? Math.cos(head.angle) : 0) * eyeOffset;
    const eyeY = head.y + (head.angle ? Math.sin(head.angle) : 0)  * eyeOffset;
    ctx.beginPath();
    ctx.arc(eyeX - eyeSize, eyeY, eyeSize, 0, Math.PI * 2);
    ctx.arc(eyeX + eyeSize, eyeY, eyeSize, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawFood = (ctx: CanvasRenderingContext2D, foodPosition: Position) => {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(foodPosition.x, foodPosition.y, SEGMENT_SIZE / 2, 0, Math.PI * 2);
    ctx.fill();
  };
  
  
const draw = ({ctx,snakeBody,foodPosition}:DrawArgs)=> {

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  if (foodPosition) {
    drawFood(ctx, foodPosition);
  }

  drawSnake(ctx, snakeBody);

}

export default draw;