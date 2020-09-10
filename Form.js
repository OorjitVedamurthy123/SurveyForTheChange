class Form {
  constructor() {
    this.input = createInput("Name");
    this.input2 = createInput("Email ID");
    this.button = createButton('OK');
    this.greeting = createElement('h3');

  }

  display(){
    var title = createElement('h2')
    title.html("A survey to bring about change");
    title.position(300, 0);
    
  // input = createInput("Name");
    //var button = createButton('Play');
    
    this.input.position(350, 160);
    this.input2.position(350,200);
    this.button.position(430, 250);

    this.button.mousePressed(()=>{
     this.input.hide();
     this.input2.hide();
      this.button.hide();

      player.name = this.input.value();
      player.email = this.input2.value();
      
      playerCount+=1;
      player.update();
      player.updateCount(playerCount);
     // var greeting = createElement('h3');
      this.greeting.html("Hello" )
      this.greeting.position(30, 160);
      
      
    });

  }
  hide(){
    this.button.hide();
    this.input.hide();
    this.greeting.hide();
  }
}
