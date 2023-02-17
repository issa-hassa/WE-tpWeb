
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    this.formes = []
}
Drawing.prototype.getForms = function(){
    return this.formes;
}
Drawing.prototype.addForm = function(form){
    this.formes.push(form)
}
Drawing.prototype.removeForm = function(form){
    let index = this.formes.indexOf(form);
    if(index == -1) {
        console.log("element non trouvé")
        return
    }
    this.formes.splice(index,1);
}

function Forme(couleur, epaisseur){
    this.couleur = couleur;
    this.epaisseur = epaisseur;

}



function Rectangle(position,largeur,hauteur,epaisseur,couleur){
    Forme.call(this,couleur,epaisseur);
    this.position = position;
    this.largeur = largeur;
    this.hauteur = hauteur;

    this.updatePosition = function(dimension) {
        this.largeur = dimension.largeur;
        this.hauteur = dimension.hauteur;
    };
    this.updatePosition = this.updatePosition.bind(this);
}


function Ligne(point1,point2,epaisseur,couleur){
    Forme.call(this,couleur,epaisseur);
    this.point1 = point1;
    this.point2 = point2;

    this.updatePosition = function(position) {
        this.point2 = position;
    };
    this.updatePosition = this.updatePosition.bind(this)
}
