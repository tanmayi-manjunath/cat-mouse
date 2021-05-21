var bg,bgImg;
var cat1,cat1Img;
var cat2,cat2Img;
var cat3,cat3Img;
var cat4,cat4Img;
var mouse1,mouse1Img;
var mouse2,mouse2Img;
var mouse3,mouse3Img;
var mouse4,mouse4Img;

function preload() {
    //load the images here
    bgImg = loadAnimation("images/garden.png");
    cat1Img = loadAnimation("images/cat1.png");
    cat2Img = loadAnimation("images/cat2.png","images/cat3.png");
    cat4Img = loadAnimation("images/cat4.png");
    mouse1Img = loadAnimation("images/mouse1.png");
    mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4Img = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    cat1 = createSprite(695,700,20,20);
    cat1.scale = 0.13;
    cat1.addAnimation(cat1Img);

    mouse1 = createSprite(63,690,20,20);
    mouse1.scale = 0.13;
    mouse1.addAnimation(mouse1Img);

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        mouse1.addAnimation("mouseTeasing",mouse2Img);
        mouse1.changeAnimation("mouseTeasaing");
    }

  //For moving and changing animation write code here


}
