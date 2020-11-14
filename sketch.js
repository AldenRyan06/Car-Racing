var hypnoticBall, database;
var position;
var gameState = 0;
var playerCount;
var form;
var game;
var player;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  //objects
  game = new Game()
  game.getState()
  game.start()
  
  
}

function draw(){
  background("white");
  
}
