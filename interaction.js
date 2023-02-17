var canvas = document.getElementById('myCanvas');

// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.positionInitiale = {x:0,y:0};
  this.positionFinale = {x:0,y:0};
  this.isReleased = false;
  this.isPressed = false;

  this.pressed = this.pressed.bind(this);
  this.moved = this.moved.bind(this);
  this.relesed = this.relesed.bind(this);
  
  this.interactor = interactor;
  console.log(this.interactor)
  canvas.addEventListener('mousedown',this.pressed,false);
  canvas.addEventListener('mousemove',this.moved,false);
  canvas.addEventListener('mouseup',this.relesed,false);

};
DnD.prototype.pressed = function(evt){
  this.isReleased = false;
  this.isPressed = true;
  this.positionInitiale = getMousePosition(canvas,evt);

  
  this.interactor.onInteractionStart(this);
  

}
DnD.prototype.moved = function(evt){
  if(!this.isReleased && this.isPressed){
    let mouse = getMousePosition(canvas,evt)
    this.positionFinale.x =mouse.x;
    this.positionFinale.y =mouse.y;
    this.interactor.onInteractionUpdate(this);
  
  }
  
    
}
DnD.prototype.relesed = function(evt){
  this.isReleased = true;
  this.isPressed = false;

  this.positionFinale = getMousePosition(canvas,evt);
  
  this.interactor.onInteractionEnd(this)
  


}

//var dnd = new DnD(canvas)


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



