var instructions, introImg;
function preload(){
introImg = loadImage("intro.png");
}
function setup(){
createCanvas(displayWidth-36,displayHeight-166);
console.log(displayHeight);
instructions = createSprite(displayWidth/2.05,displayHeight/2.3,displayWidth-100,displayHeight-400);
instructions.addImage(introImg);
//instructions.scale=(displayWidth*displayHeight)/100;
}
function draw(){
background("pink");
drawSprites();
}