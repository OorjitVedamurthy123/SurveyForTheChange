class Game {
  constructor(){
      this.button = createButton('YES');
      this.button.position(-100,-100);
        this.button2 = createButton('NO');
        this.button2.position(-100,-100);
        this.button3 = createButton('YES');
        this.button3.position(-100,-110);
        this.button4 = createButton('NO');
        this.button4.position(-100,-100);
        this.button5 = createButton('100');
        this.button5.position(-100,-100);
        this.button6 = createButton('500');
        this.button6.position(-100,-100);
        this.button7 = createButton('1000');
        this.button7.position(-100,-100);
        this.button8 = createButton('MORE');
        this.button8.position(-100,-100);
  }
  
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      var playerUserName = await database.ref("userName").once("value");
      var playerEmail = await database.ref("email").once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        userName = playerUserName.val();
        email = playerEmail.val();
        player.getCount();
      }
     
      form = new Form();
      form.display();
      
      
    }
  }
  play(){
    
    form.hide();
    textSize(18);
    fill("black")
    text("1) Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?",5,100);  
    text("2) Would you be willing to contribute a small amount every month for such a program?",5,200);
    text("3) How much per month would you be willing to pay",5,300);
    
    
    
      
    if(allPlayers !== undefined){
        var displayPosition = 130;
        for(var plr in allPlayers){
          if(plr === "player"+player.index){
            fill("red");
          }
          else{
            fill("black")
          }
        
        displayPosition += 20;
        textSize(15);
        text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,displayPosition);
        }  
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance += 50;
        player.update();
    }
    this.button.position(70,150);
    this.button2.position(120,150);
    this.button3.position(70,250);
    this.button4.position(120,250);
    this.button5.position(70,350);
    this.button6.position(120,350);
    this.button7.position(170,350);
    this.button8.position(220,350);
      
      this.button.mousePressed(()=>{
        this.button.hide();
        this.button2.hide();
        var title5 = createElement("h3");
        title5.html("THANK YOU VERY MUCH");
        title5.position(30,125);
      })
      this.button2.mousePressed(()=>{
        this.button.hide();
        this.button2.hide();
        var title6 = createElement("h3");
        title6.html(":'(");
        title6.position(30,125);
      })
      this.button3.mousePressed(()=>{
        this.button3.hide();
        this.button4.hide();
        var title7 = createElement("h3");
        title7.html("THANK YOU VERY MUCH");
        title7.position(30,225);
      })
      this.button4.mousePressed(()=>{
        this.button3.hide();
        this.button4.hide();
        var title8 = createElement("h3");
        title8.html("IT'S OKAY");
        title8.position(30,225);
      })
      this.button5.mousePressed(()=>{
        
        this.button5.hide();
        this.button6.hide();
        this.button7.hide();
        this.button8.hide();
        var title = createElement("h3");
        title.html("Thanks");
        title.position(100,350);
        
      })
      this.button6.mousePressed(()=>{
        this.button5.hide();
        this.button6.hide();
        this.button7.hide();
        this.button8.hide();
        var title2 = createElement("h3");
        title2.html("Thank you");
        title2.position(100,350);
        
      })
      this.button7.mousePressed(()=>{
        this.button5.hide();
        this.button6.hide();
        this.button7.hide();
        this.button8.hide();
        var title3 = createElement("h3");
        title3.html("Thank you so much");
        title3.position(100,350);
        
      })
      this.button8.mousePressed(()=>{
        this.button5.hide();
        this.button6.hide();
        this.button7.hide();
        this.button8.hide();
        var title4 = createElement("h2");
        title4.html("Thank you very much");
        title4.position(100,350);
      })
  }
  
}
