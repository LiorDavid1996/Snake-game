 import * as S from "./Canvas.styles";
 import {forwardRef ,useEffect} from 'react'
 type CanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
> & {
  draw: (context: CanvasRenderingContext2D) => void;
};
const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>(
    ({ draw, ...props }, canvasRef) => {

        useEffect(() => {
            if (!canvasRef) {
              return;
            }
            const canvas = (canvasRef as React.RefObject<HTMLCanvasElement>).current;
            if (!canvas) {
              return;
            }
      
            const context = canvas.getContext('2d');
            if (!context) {
              return;
            }
      
            draw(context);
            return () => context.clearRect(0, 0, window.innerWidth, 400);
          }, [draw, canvasRef]);
      
          if (!canvasRef) {
            return null;
          }

    return (<>
    <S.Canvas ref={canvasRef as any} {...props}/>
    
    <h2>"llll</h2>
  </>  
    )
   

}
);
export default Canvas 