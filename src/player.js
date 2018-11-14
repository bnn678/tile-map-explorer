/** @module Player
  * A class representing the player.
  */
export default class Player {
  /** @constructor
    * Constructs a new player instance
    * @param {float} x - the player's x position
    * @param {float} y - the player's y position
    */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = "up";
  }

  /** @method update
    * Updates the player
    * @param {double} deltaT - the elapsed time
    * @param {Input} input - the input object
    */
  update(deltaT, input) {
    // TODO: Do not allow the player to walk through some tiles specified as "solid"

    if(input.keyPressed("ArrowLeft")) this.x--;
    if(input.keyPressed("ArrowRight")) this.x++;
    if(input.keyPressed("ArrowUp")) this.y--;
    if(input.keyPressed("ArrowDown")) this.y++;

    if(input.keyDown("ArrowLeft")) this.direction = "left";
    if(input.keyDown("ArrowRight")) this.direction = "right";
    if(input.keyDown("ArrowUp")) this.direction = "up";
    if(input.keyDown("ArrowDown")) this.direction = "down";
  }

  /** @method render
    * Renders the player
    * @param {double} deltaT - elapsed time
    * @param {Context2D} context - the rendering context
    */
  render(deltaT, context) {
    // TODO: make these actual sprites
    // TODO: animate the sprites
    // Sprite Credit:  Curt - cjc83486 - https://opengameart.org/content/rpg-character

    if( this.direction == "left") context.fillStyle = "blue";
    if( this.direction == "right") context.fillStyle = "red";
    if( this.direction == "up") context.fillStyle = "green";
    if( this.direction == "down") context.fillStyle = "black";

    context.beginPath();
    context.arc(this.x, this.y, 25, 0, 2*Math.PI);
    context.fill();
  }

}
