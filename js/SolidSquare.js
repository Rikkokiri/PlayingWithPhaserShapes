function SolidSquare (upperLeftX, upperLeftY, sidelength, color) {
  this.leftCorner = new Phaser.Point(upperLeftX, upperLeftY);
  this.sidelength = sidelength;

  this.points = [new Phaser.Point(upperLeftX, upperLeftY),
                new Phaser.Point(upperLeftX + sidelength, upperLeftY),
                new Phaser.Point(upperLeftX + sidelength, upperLeftY + sidelength),
                new Phaser.Point(upperLeftX, upperLeftY + sidelength)];

  this.center = new Phaser.Point(upperLeftX + sidelength / 2, upperLeftY + sidelength / 2);
  this.color = color;

  // Calculate the distance from the corner of the square to the center point of the square
  // Standard Pythagoras
  this.cornerDistance = Math.sqrt(2 * Math.pow((sidelength/2), 2));


  // Create the polygon
  this.square = new Phaser.Polygon(this.points);
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
   }

   // TODO Rotate around corners?

   // ------- METHODS FOR MOVING THE SQUARE --------------




 }
