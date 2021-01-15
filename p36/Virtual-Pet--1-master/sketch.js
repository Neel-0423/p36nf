//Create variables here
var dog, happyDog, database, foodS, foodStock, dogI, hdogI,fedTime,lastFed;
var form, foodStock = 20;

function preload()
{
  //load images here
  dogI = loadImage("Images/dog1.png");
  hdogI = loadImage("Images/dog2.png");
}

function setup() {
createCanvas(800,800);
  
  database = firebase.database();

  dog= createSprite(600,350);
  dog.addImage(dogI);
  dog.scale = 0.25;

  form = new Form();
  form.display();
}


function draw() {  
background("red");
  drawSprites();

  fill(255,255,254);
  textSize(15);
  text("Food Remaining" + foodStock,350,50);

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Fed :"+ lastFed%12 + "PM",350,30);
  }else if(lastFed == 0){
    text("Last Fed : 12 AM",350,30);
  }else{
    text("Last Fed : "+ lastFed+ "AM",350,30);
  }
}
function readStock(data) {
  foodS = data.val(); //Value -> data.val
  
}
function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}