
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Drawing.prototype.paint = function(ctx) {
  
  ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.getForms().forEach(function (forme) {
    forme.paint(ctx);
  });
}
Drawing.prototype.updateShapeList = function(ctx){
    var shaplist = document.getElementById("shapeList")
    var newShape = this.formes[this.formes.length - 1]
    var newIl = document.createElement("li")

    var button = document.createElement("button")
    button.type = "button"
    button.className = "btn btn-default"
    var span = document.createElement("span")
    span.className = "glyphicon glyphicon-remove-sign"
   
    button.appendChild(span)
    let drawing = this
    button.onclick = function(){
        //let il = document.getElementById("forme"+drawing.formes.indexOf(newShape)) 
        drawing.removeForm(newShape)
        newIl.remove()
        drawing.paint(ctx)
        

    }
    // this.removeIl = removeIl.bind(this)
    // button.onclick = function(){
    //   this.removeIl(ctx,newShape,newIl)  
    // } 
     console.log(span)
    console.log(button)

    newIl.appendChild(button)

    console.log(newIl)
    newIl.id = "forme"+ (this.formes.length - 1)
    let text =document.createElement("p")
    text.innerHTML = newShape instanceof Rectangle ?"Rectangle("+newShape.position.x + ","+newShape.position.y +","
                                                    +newShape.largeur+","+newShape.hauteur+")"
            :"Ligne("+newShape.point1.x+","+newShape.point1.y + ","+newShape.point2.x+","+
                                newShape.point2.y +")"
    newIl.appendChild(text)
    
    console.log(newIl)
    shaplist.appendChild(newIl)

}
// function removeIl(ctx,newshape,newIl,drawing){
//     this.removeForm(newshape)
//     newIl.remove()
//     this.paint(ctx)
// }


Forme.prototype.paint = function(ctx){
  
  //  ctx.fillStyle = this.couleur;
    ctx.strokeStyle =  this.couleur;
    ctx.lineWidth = this.epaisseur;
    
}
Rectangle.prototype = new Forme();

Rectangle.prototype.paint = function(ctx){
    Forme.prototype.paint.call(this,ctx);
   // ctx.beginPath();
    ctx.rect(this.position.x,this.position.y,this.largeur,this.hauteur);
  //  ctx.strokeRect(this.position.x,this.position.y,this.largeur,this.hauteur);
     ctx.stroke();
}


Ligne.prototype = new Forme();
Ligne.prototype.paint = function(ctx){
    Forme.prototype.paint.call(this,ctx);
   
    ctx.beginPath();
    ctx.moveTo(this.point1.x, this.point1.y);
    ctx.lineTo(this.point2.x, this.point2.y);
    ctx.stroke();

}