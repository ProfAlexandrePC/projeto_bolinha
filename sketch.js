let cor;
let posicaoHorizontal;
let posicaoVertical;

let posicaoHorizontal2;
let posicaoVertical2;


function setup() {
  createCanvas(400, 400);
  background("white");
  cor = color(random(0, 255), random(0, 255),random(0, 255));
  posicaoHorizontal = 0;
  posicaoVertical = random(height);
   posicaoHorizontal2 = 0;
  posicaoVertical2 = random(height);
}

function draw() {
  circle(posicaoHorizontal, posicaoVertical, 50);
  fill(cor);
  
  posicaoHorizontal += random(0, 3);
  posicaoVertical += random(-3, 3);
  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255),random(0, 255), random(0,100));
  }
}