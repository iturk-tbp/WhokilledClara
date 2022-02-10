function preload(){
  dad = loadImage("Dad.png");
  clara = loadImage("Clara.jpg");
  fiance = loadImage("Fiance.png");
  lady = loadImage("Lady.png");
  servant = loadImage("Servant.png");
  
}

function setup(){
  gameState = "begin";
  suspect = 0
}
function draw(){
  createCanvas(600,400);
  background("black");
  if(gameState == "begin"){
    textSize(50);
    fill("red")
    text("WHO KILLED CLARA?",45,100);
    textSize(30);
    text("Press space to play",175,250);
    if(keyIsDown(32)){
      gameState = "home";
    }
  }
  if(gameState == "home"){
    image(clara,200,200,200,200);
    textSize(30);
    fill("white")
    text("Today, Clara Murdstone was found dead, in her house. Interview the suspects and find out who killed her using the clues. Press right arrow for suspects.",0,0,600,200);
    if(keyIsDown(39)){
      gameState = "suspects";
    }
  }
  if(gameState == "suspects"){
    if(suspect === 0){
    image(dad,0,0,200,230);
    fill("white");
    textSize(25)
    text("I am Clara's Dad. She hates me, but I didn't kill her! I was just watching TV at her house because I lost my TV's remote. I was working in the garden after that!",201,0,400,300)
    text("Press 2 to see the second suspect.",100,250)
      if(keyIsDown(50) || keyIsDown(98)){
        suspect = 2
      }
    }
    if(suspect == 2){
      image(fiance,0,0,200,230);
    fill("white");
    textSize(25)
    text("I am Clara's Fiance. We were going to get married next year. Why would I kill her? I work at the doughnut shop.",201,0,400,300)
    text("Press 3 to see the third suspect.",100,250)
      if(keyIsDown(51) || keyIsDown(99)){
        suspect = 3
      }
    }
    if(suspect == 3){
      image(lady,0,0,200,230);
    fill("white");
    textSize(25)
    text("I am Clara's BFF. We were going to shop for her wedding today! I definately didn't kill her!",201,0,400,300)
    text("Press 4 to see the last suspect.",100,250)
      if(keyIsDown(52) || keyIsDown(100)){
        suspect = 4
      }
    }
    if(suspect == 4){
      image(servant,0,0,200,230);
    fill("white");
    textSize(25)
    text("I am Miss Clara's househelp. She was like a sister to me, I didn't kill her!",201,0,400,300)
    text("Press the H key to arrest the killer.",100,250)
      if(keyIsDown(72)){
        gameState = "killer";
        suspect = 0;
      }
    }
    
  }
  if(gameState == "killer"){
    image(dad,0,0,125,125);
    image(fiance,126,0,125,125);
    image(lady,252,0,125,125);
    image(servant,378,0,125,125);
    fill("white");
    textSize(25);
    text("Press the key according to following index: ",0,150,600,50)
    text("D if you think her dad killed her!",0,176,600,30);
    text("F if you think her fiance killed her!",0,202,600,30);
    text("B if you think her BFF killed her!",0,228,600,30);
    text("S if you think her servant killed her!",0,254,600,30);
    
    if(keyIsDown(83) || keyIsDown(70) || keyIsDown(68)){
      gameState = "youlose"
    }
    if(keyIsDown(66)){
      gameState = "youwin"
    }
  }
  if(gameState == "youlose"){
    image(lady,0,0,200,200);
    textSize(30);
    fill("red");
    text("Sorry, but you lost! It was her best friend. Why would they go shopping for a wedding that was taking place next year?!!",200,0,400,400);
    textSize(25);
    text("Press R to start again.",0,350,600,50)
    if(keyIsDown(82)){
      gameState = "begin";
    }
  }  
  
  if(gameState == "youwin"){
    image(lady,0,0,200,200);
    textSize(30);
    fill("green");
    text("You are right! It was her best friend. Why would they go shopping for a wedding that was taking place next year?!! Congratulations on cracking this case!",200,0,400,400);
    textSize(25);
    text("Press R to start again.",0,350,600,50);
    if(keyIsDown(82)){
      gameState = "begin";
    }
  }
}