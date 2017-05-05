/**
 * @author Rikkokiri
 */


/**
 * Creates a new solid (filled with color) triangle.
 *
 * @param {Number} centerX
 * @param {Number} centerY
 * @param {Number} sidelength
 *     Sidelength can be given in multiple formats
 *     - giving one number will result in triangle with all sides the same length
 *     - An array...
 * @param {String} color -
 *
 */
function SolidTriangle(centerX, centerY, sidelength){

    this.centerX = centerX;
    this.centerY = centerY;
    this.center = new Phaser.Point(centerX, centerY);

    this.color = color;

    // Check the number and type of silengths given


    // Create the triangle
    // this.triangle

}


SolidTriangle.prototype = {

  /**
   * @return {Phaser.Point} The center point of the triangle
   */
  getCenter: function(){
    return this.center;
  },

  /**
   * @return {Array} Array of ...
   */
   getPoints: function(){
     // TODO
   }

   /**
    * Roate the triangle around its center.
    * @param TODO
    */
   rotateAroundCenter: function(rotationAngle){
     for( var point = 0; point < 4; point++ ) {
      this.triangle.points[point].rotate(this.center.x, this.center.y, rotationAngle, true, this.cornerDistance);
     }
   },

   // TODO Rotate around corners?

   rotateAroundPoint: function(point){

      // TODO

   },

   rotateAroundCorner: function(cornerNumber){

      // TODO

   },

   // ------- METHODS FOR MOVING THE triangle --------------

   /**
    * Move up
    * @param {Number} distance - How many pixels the triangle is moved upwards
    */
   moveUp: function(distance){
     for(var point = 0; point < 4; point++){
       this.triangle.points[point].y -= distance;
     }
    // Update center
    this.center.y -= distance;
   },

   /**
    * Move down
    * @param {Number} distance - How many pixels the triangle is moved downwards
    */
   moveDown: function(distance){
     this.moveUp(-distance);
   },

   /**
    * Move left
    * @param {Number} distance - How many pixels the triangle is moved left
    */
   moveLeft: function(distance){
     for(var point = 0; point < 4; point++){
       this.triangle.points[point].x -= distance;
     }
     // Update center
     this.center.x -= distance;
   },

   /**
    * Move right
    * @param {Number} distance - How many pixels the triangle is moved right
    */
   moveRight: function(distance){
     this.moveLeft(-distance);
   },

   // TODO Other directions?

   /**
    * Move the triangle so that it's center is on the given point
    * @param {}
    */
    centerOn: function(point){

      // TODO

    },

   // ------- Change color? --------------

   // TODO Check color code validity?
   setColor: function(newColor){
     this.color = newColor;
   },

   // ------- Shrink and expand triangle --------------

   // TODO

   /**
    * Move the corners of the triangle towards its center point by the given amount
    * and hence the triangle shrinks.
    *
    * The shrinking stops when the lenght of the triangle's side drops below zero.
    *
    * @param {Number} amount - How much triangle's corners are moved towards its center point.
    */
   shrink: function(amount){

       if(this.cornerDistance >= 0){

         this.cornerDistance -= amount;

         for( var point = 0; point < 4; point++ ){
           this.triangle.points[point].rotate(this.center.x, this.center.y, 0, true, this.cornerDistance);
         }

         // Update sidelength

       }
   },

   /**
    * Move the corners of the triangle away from its center point by the given amount and hence
    * the triangle expands.
    *
    * @param {Number} amount - How much triangle's corners are moved away from its center point.
    */
   expand: function(amount){
     this.cornerDistance += amount;

     for( var point = 0; point < 4; point++ ){
       this.triangle.points[point].rotate(this.center.x, this.center.y, 0, true, this.cornerDistance);
     }

     // Update sidelength

   }

}
