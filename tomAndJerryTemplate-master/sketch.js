var cat, catImg, catImg2, catAnimation;
var rat, ratImg, ratImg2, ratAnimation;
var garden, gardenImg;

function preload() {

    //ratImg = loadImage("mouse4.png");
    //catImg = loadImage("cat4.png");
    //ratImg2 = loadImage("mouse1.png");
    //catImg = loadImage("cat1.png");

    //gardenImg = loadImage("garden.png");

    //catAnimation = loadAnimation("cat2.png","cat3.png");
    //ratAnimation = loadAnimation("rat2.png","rat3.png");

}

function setup(){
    createCanvas(600,300);

    cat = createSprite(500,200,20,20);
    //cat.addImage("catImg");

    rat = createSprite(100,200,10,10);
    //rat.addImage("ratImg");
    rat.setCollider("rectangle",0,0,30,30);

    garden = createSprite(300,150,10,10);
    //garden.addImage("gardenImg");

    
}

function draw() {
   
    background(0);

    if(keyDown("w")){
        cat.velocityX = -3
        //cat.changeAnimation("catAnimation");
        //rat.changeAnimation("ratAnimation");
    }

    if(cat.isTouching(rat)){
        //cat.changeAnimation("catImg2");
        //rat.changeAnimation("ratImg2");
        cat.velocityX = 0;
    }

    
    drawSprites();
}
