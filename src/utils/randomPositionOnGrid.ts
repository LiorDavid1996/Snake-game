interface RandomPositionOnGridArgs {
    gridSize?: number;
    threshold: number;
  }
  
  const randomPositionOnGrid = ({
    gridSize = 5,
    threshold,
  }: RandomPositionOnGridArgs) =>
   Math.floor(Math.random() * (threshold / gridSize)) * gridSize+10;
  
  export default randomPositionOnGrid;