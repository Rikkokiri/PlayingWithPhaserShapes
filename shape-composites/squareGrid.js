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


// ===================== CREATE DIFFERENT SQUARE GRIDS =====================

/**
 * TODO Documentation!
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


/**
 * TODO Documentation!
 *
 */
function createCheckeredHalfEmptyGrid(gameWidth, gameHeight, squaresInColumn, color){

    squareSize = gameHeight / squaresInColumn;
    squaresOnRow = gameWidth / squareSize;
    numberOfSquares = (squaresOnRow) * squaresInColumn;

    var grid = [];

    for(var y = 0; y <= gameHeight - squareSize; y += 2 * squareSize){ // columns

      if(grid[y/squareSize] === undefined){
        grid[y/squareSize] = [];
      }

      if(grid[(y+squareSize)/squareSize] === undefined){
        grid[(y+squareSize)/squareSize] = [];
      }

      // Rows starting with a square
      for(var x = 0; x <= gameWidth-squareSize; x += 2 * squareSize){ // rows
        grid[y/squareSize].push(new SolidSquare(x, y, squareSize, color));
      }

      // Rows starting with an empty space
      for(var x = squareSize; x <= gameWidth - squareSize; x += 2 * squareSize){ // rows
        grid[(y+squareSize)/squareSize].push(new SolidSquare(x, y + squareSize, squareSize, color));
      }

    }

    return grid;
}


// ==================== MOVES? =====================

/**
 * TODO Documentation
 *
 */
function moveRevealSquares(canvasWidth, canvasHeight, squareSize, move, grid){

  // Left half
  for(var y = 0; y <= canvasHeight - squareSize; y += squareSize){

    for(var x = 0; x <= (canvasWidth / 2) - (2 * squareSize); x += 2 * squareSize){

      var row = y / squareSize;

      if( ( (row % 2 == 0) && (y <= canvasHeight / 2)) || ((row % 2 != 0 ) && (y >= canvasHeight / 2))){
        grid[ y / squareSize ][ (x + squareSize) / squareSize].moveDown(move);
      }
      else {
        grid[ y / squareSize ][ x / squareSize].moveDown(move);
      }
    }
  }

  // Right half
  for(var y = 0; y <= canvasHeight - squareSize; y += squareSize){

    for(var x = (canvasWidth / 2); x <= canvasWidth - (2 * squareSize); x += 2 * squareSize){

      var row = y / squareSize;

      if( ( (row % 2 == 0) && (y <= canvasHeight / 2)) || ((row % 2 != 0 ) && (y >= canvasHeight / 2))){
        grid[ y / squareSize ][ x / squareSize].moveDown(move);
      }
      else {
        grid[ y / squareSize ][ (x + squareSize) / squareSize].moveDown(move);
      }
    }
  }

}

// ==================== SPIN SQUARES =====================
