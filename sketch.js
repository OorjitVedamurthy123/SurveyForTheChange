var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var userName;
var email;
var database;
var title,title2,title3,title4,title5,title6,title7;
var form, player, game;
var allPlayers;

function setup(){
  canvas = createCanvas(900,500);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    
  }
  
  
}

