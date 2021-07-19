  var garden,rabbit;
  var gardenImg,rabbitImg;
  var apples,appleimg
  var leaf,leafimg

  function preload(){
    gardenImg = loadImage("garden.png");
    rabbitImg = loadImage("rabbit.png");
    appleimg = loadImage("apple.png")
    leafimg = loadImage("leaf.png")

  }

  function setup(){
    
    createCanvas(400,400);
    
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);


  }


  function draw() {
    background(0);
    
    edges= createEdgeSprites();
    rabbit.collide(edges);
    var select_sprites = Math.round(random(1,2))
    if(frameCount%56== 0){
      if(select_sprites == 1) {
      spawnApple();
      }
    
    }
    if(frameCount%67== 0){
      if(select_sprites == 1) {
        spawnleaves()
      }

    }
 
    rabbit.x = World.mouseX
    drawSprites();
  }

  function spawnApple() {


   var apple = createSprite(345,30,12,13)

    apple.addImage(appleimg);
    apple.velocityY = 9
    apple.scale = 0.06
  

  }
  
  function spawnleaves() {


    var leaf = createSprite(100,30,12,13)
 
     leaf.addImage(leafimg);
    leaf.velocityY = 9
     leaf.scale = 0.06
   
 
   }
  
   



























