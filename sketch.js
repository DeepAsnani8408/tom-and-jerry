var cat, catImg
var mouse, mouseImg
var garden, gardenImg





function preload() {
    //load the images here
catImg=loadImage("cat1.png")
catImg=loadImage("cat2.png")
catImg=loadImage("cat3.png")
catImg=loadImage("cat4.png")
gardedImg=loadImage("garden.png")
mouseImg=loadImage("mouse1.png")
mouseImg=loadImage("mouse2.png")
mouseImg=loadImage("mouse3.png")
mouseImg=loadImage("mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(200, 200, 50, 50)
mouse=createSprite(300, 300, 50, 30)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2)
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
cat.velocityX=-5
cat.addAnimation("catRunning", catImg2)
cat.changeAnimation("catRunning");



}

}
