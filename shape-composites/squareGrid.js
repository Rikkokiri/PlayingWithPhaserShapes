/**
 * Draw a grid of SolidSquares to given graphics
 *
 * @param {} graphics - TODO
 * @param {} grid - TODO
 */
function drawSquareGrid(graphics, grid){

  for(var row = 0; row < grid.length; row++){
    for(var col = 0; col < grid[row].length; col++){

      if(grid[row][col] !== undefined && grid[row][col] instanceof SolidSquare){
        grid[row][col].drawSquare(graphics);
      }

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

/*
 * Animate the squares spinning
 */
function spinSquaresSameDirection(graphics, grid, rotationAngle) {

    // First rotate each square
    for(var row = 0; row < grid.length; row++){
      for(var col = 0; col < grid[row].length; col++){

        grid[row][col].rotateAroundCenter(rotationAngle);

      }
    }
    // if(rotationSum < 180){
    //     rotationSum += Math.abs(rotationAngle);
    // }
    // else {
    //   rotationSum = 0;
    //   rotationAngle = -1 * rotationAngle;
    // }

    // Draw the grid
    drawSquareGrid(graphics, grid);
}

/*
 * TODO
 * TODO Give option to choose whether it's even rows or odd rows that spin clockwise
 */
function spinSquaresTwoDirections(graphics, grid, rotationAngle) {

    // First rotate each square
    for(var row = 0; row < grid.length; row++){
      for(var index = 0; index < grid[row].length; index++){

        var angle;

        if(row % 2 == 0){
          angle = rotationAngle;
        }
        else {
          angle = -1 * rotationAngle;
        }

        grid[row][col].rotateAroundCenter(angle);

      }
    }

    // Draw the grid
    drawSquareGrid(graphics, grid);

}
