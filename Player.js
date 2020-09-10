class Player {
  constructor(){
    this.name = null;
    this.distance = 0;
    this.index = 1;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    var playerUserName = database.ref('userName');
    var playerEmail = database.ref('email');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
    playerUserName.on("value",(data)=>{
      userName = data.val();
    })
    playerEmail.on("value",(data)=>{
      email = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count,
      userName: count,
      email: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance : this.distance
    });
    this.index++;
  }
  static getPlayerInfo(){
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value",(data)=>{
    allPlayers = data.val();
    });
  }
}
