

/**
 * CONSTRUCTOR
 * TODO Documentation
 *
 * @param {Number} upperLeftX -
 * @param {Number} upperLeftY -
 * @param {Number} sidelength -
 * @param {String} color -
 *
 */
function SolidSquare (upperLeftX, upperLeftY, sidelength, color) {

  this.leftCorner = new Phaser.Point(upperLeftX, upperLeftY);
  this.sidelength = sidelength;

  var points = [new Phaser.Point(upperLeftX, upperLeftY),
                new Phaser.Point(upperLeftX + sidelength, upperLeftY),
                new Phaser.Point(upperLeftX + sidelength, upperLeftY + sidelength),
                new Phaser.Point(upperLeftX, upperLeftY + sidelength)];

  this.center = new Phaser.Point(upperLeftX + sidelength / 2, upperLeftY + sidelength / 2);
  this.color = color;

  // Calculate the distance from the corner of the square to the center point of the square
  // Standard Pythagoras
  this.cornerDistance = Math.sqrt(2 * Math.pow((sidelength/2), 2));


  // Create the polygon
  this.square = new Phaser.Polygon(points);

}


SolidSquare.prototype = {

  /**
   * @return {Phaser.Point} The center point of the square
   */
  getCenter: function(){
    return this.center;
  },

  /**
   * @return {Number} Length of the square's side
   */
  getSidelength: function(){
    return this.sidelength;
  },

  /**
   * @return {Phaser.Point} The point that is the upper left corner of the square
   */
   getLeftCorner: function(){
     return this.leftCorner;
   },

   /**
    * Draw the square to the given graphics
    * @param TODO
    *
    */
   drawSquare: function(graphics) {

     graphics.beginFill(this.color);
     graphics.drawPolygon(this.square);
     graphics.endFill();
   },

   // ------- Spin that shit! -------

   /**
    * Roate square around its center.
    * @param TODO
    */
   rotateAroundCenter: function(rotationAngle){
     for( var point = 0; point < 4; point++ ) {
      this.square.points[point].rotate(this.center.x, this.center.y, rotationAngle, true, this.cornerDistance);
     }
   },

   // TODO Rotate around corners?

   rotateAroundPoint: function(point){

     // TODO

   },

   rotateAroundCorner: function(cornerNumber){

   },

   // ------- METHODS FOR MOVING THE SQUARE --------------

   /**
    * Move up
    * @param {Number} distance - How many pixels the square is moved upwards
    */
   moveUp: function(distance){
     for(var point = 0; point < 4; point++){
       this.square.points[point].y -= distance;
     }
    // Update center
    this.center.y -= distance;
   },

   /**
    * Move down
    * @param {Number} distance - How many pixels the square is moved downwards
    */
   moveDown: function(distance){
     this.moveUp(-distance);
   },

   /**
    * Move left
    * @param {Number} distance - How many pixels the square is moved left
    */
   moveLeft: function(distance){
     for(var point = 0; point < 4; point++){
       this.square.points[point].x -= distance;
     }
     // Update center
     this.center.x -= distance;
   },

   /**
    * Move right
    * @param {Number} distance - How many pixels the square is moved right
    */
   moveRight: function(distance){
     this.moveLeft(-distance);
   },

   // TODO Other directions?

   /**
    * Move the square so that it's center is on the given point
    * @param {}
    */
    centerOn: function(point){

    },

   // ------- Change color? --------------

   // TODO Check color code validity?
   setColor: function(newColor){
     this.color = newColor;
   },

   // ------- Shrink and expand square --------------

   // TODO

   /**
    * Move the corners of the square towards its center point by the given amount
    * and hence the square shrinks.
    *
    * @param {Number} amount - How much square's corners are moved towards its center point.
    */
   shrinkSquare: function(amount){

   },

   /**
    * Move the corners of the square away from its center point by the given amount and hence
    * the square expands.
    *
    * @param {Number} amount - How much square's corners are moved away from its center point.
    */
   expandSquare: function(amount){

   }

 }
