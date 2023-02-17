
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currCouleur = '#000000';
	this.currentShape = 0;
	this.drawing = drawing;
	this.ctx  = ctx
	new DnD(canvas, this);
	
	this.onInteractionEnd = this.onInteractionEnd.bind(this)
	this.onInteractionStart = this.onInteractionStart.bind(this)
	this.onInteractionUpdate = this.onInteractionUpdate.bind(this)

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	const spinnerInput = document.getElementById('spinnerWidth');
  	const colorInput = document.getElementById('colour');
	const shape = document.querySelector('form');

	spinnerInput.addEventListener('input', (event) => {
     this.currLineWidth = event.target.value;
	
   
  	});
  	colorInput.addEventListener('input', (event) => {
    	this.currCouleur = event.target.value;
	
    	
  	});
	shape.addEventListener('change', (event) => {
		this.currEditingMode =  (document.getElementById("butLine").checked )? 1 : 0;
    
	});

	

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
};
Pencil.prototype.onInteractionStart = function(dnd){
	
	switch(this.currEditingMode){
		case editingMode.rect: {
			let hauteur = dnd.positionFinale.y - dnd.positionInitiale.y;
			let largeur = dnd.positionFinale.x - dnd.positionInitiale.x;
			this.currentShape = new Rectangle(dnd.positionInitiale,largeur,hauteur,this.currLineWidth,this.currCouleur)
			break
		}
		case editingMode.line :{
		
							console.log("creation avec : " +  this.currCouleur)
					this.currentShape = new Ligne(dnd.positionInitiale,dnd.positionFinale,this.currLineWidth,this.currCouleur)

			break
		}
	}
	
}
Pencil.prototype.onInteractionUpdate = function(dnd){
	
	// switch(this.currEditingMode){
	// 	case editingMode.rect : {
	// 		this.currentShape.updatePosition({largeur:dnd.positionFinale.x - dnd.positionInitiale.x,
	// 											hauteur : dnd.positionFinale.y - dnd.positionInitiale.y
	// 		})
	// 	}
	// 	case editingMode.line : {
	// 		this.currentShape.updatePosition(dnd.positionFinale)
	// 	}
	//}
	if (this.currentShape instanceof Rectangle) {
		
		// this.ctx.strokeStyle = '#F0F0F0'; // set canvas' background color
 		// this.ctx.rect(this.currentShape.position.x,this.currentShape.position.y,
		// 	 this.currentShape.largeur, this.currentShape.hauteur);
		// this.ctx.stroke()	 
	
		
    	this.currentShape.updatePosition({largeur:dnd.positionFinale.x - dnd.positionInitiale.x,
											hauteur : dnd.positionFinale.y - dnd.positionInitiale.y});
  	}

	else if (this.currentShape instanceof Ligne) {
		
    	this.currentShape.updatePosition(dnd.positionFinale);
  	}
	this.ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  	this.ctx.fillRect(0, 0, this.ctx.width, this.ctx.height);

//	this.currentShape.paint(this.ctx)
		


}
Pencil.prototype.onInteractionEnd = function(dnd){
	
	this.drawing.addForm(this.currentShape)
	this.drawing.updateShapeList(this.ctx)
	
	this.currentShape = 0;
	this.drawing.paint(this.ctx)
	
	
	
}


