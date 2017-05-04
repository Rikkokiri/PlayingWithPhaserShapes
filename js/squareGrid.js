/**
 * Draw a grid of SolidSquares to given graphics
 *
 * @param {} graphics - TODO
 */
function drawSquareGrid(grid, graphics){

  for(var row = 0; row < grid.length; row++){
    for(var col = 0; col < grid[row].length; col++){
      grid[row][col].drawSquare(graphics);
    }
  }
}


/**
 * TODO Documentation
 *
 */
function createRevealSquares(gameWidth, gameHeight, squaresInColumn) {

  squareSize = gameHeight / squaresInColumn;
  squaresOnRow = gameWidth / squareSize;
  numberOfSquares = (squaresOnRow) * squaresInColumn;

  var grid = [];

  var black = "0x000000";
  var white = "0xffffff";
  var currentColor = white;

  for(var y = 0; y <= gameHeight - squareSize; y += squareSize){

    for(var x = 0; x <= gameWidth - squareSize; x += squareSize ){

      if(grid[y/squareSize] === undefined) {
        grid[y/squareSize] = [];
      }

      /*
       * | White | Black |
       * | Black | White |
       */
       if((y < gameHeight / 2) && (x < gameWidth / 2)){
         currentColor = white;
       }
       if((y < gameHeight / 2) && (x >= gameWidth / 2)){
         currentColor = black;
       }
       if((y >= gameHeight / 2) && (x < gameWidth / 2)){
         currentColor = black;
       }
       if((y >= gameHeight / 2) && (x >= gameWidth / 2)){
         currentColor = white;
       }

       grid[y/squareSize][x/squareSize] = new SolidSquare(x, y, squareSize, currentColor);

    }
  }

  return grid;
}
