class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.Array1 = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x > 230){
    var Array2 = [this.body.position.x, this.body.position.y];
    this.Array1.push(Array2); 
    }
    // for(i=0;i<300;i++)


    // this.Array1 = [[200,100],[240,75],[320,19],[360,59]]; // this.Array1[i][0],this.Array1[0][1]

   for (var i=0;i<this.Array1.length; i++){
     image(this.image1,this.Array1[i][0],this.Array1[i][1])
   }
  } 
}
