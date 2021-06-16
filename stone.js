class Stone {
  constructor(x,y){
  
   var options={
  
  'restitution':0.9,
  'friction':0.8,
  'density':12
   }
  this.body= Bodies.rectangle(x,y,50,50,options);
  this.width=100;
  this.height=100;
  World.add(world,this.body);
  
  }
  display(){
  
  var pos=this.body.position;
  
  var angle= this.body.angle;
  push ();
  translate(pos.x,pos.y);
  rotate(angle);
  fill("blue");
  strokeWeight(4);
  stroke("green");

 rect(0,0,this.width,this.height);
  pop();
  }
}