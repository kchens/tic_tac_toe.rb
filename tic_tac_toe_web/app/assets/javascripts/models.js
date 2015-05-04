function Board() {
  // this.startHuman;
  // this.winner;
  // this.tie;
  // this.players;
  this.positions = [];
}

Board.prototype = {
  initialize: function(startGameData) {
    this.startHuman = startGameData.startHuman;
    this.gameStatus = startGameData.gameStatus;
    // this.winner     = startGameData.winner;
    // this.tie        = startGameData.tie;
    this.players    = startGameData.players;
    this.positions = startGameData.board.positions;

    console.log(this.startHuman);
    console.log(this.gameStatus);
    // console.log(this.winner);
    // console.log(this.tie);
    console.log(this.players);
    console.log(this.players.currentPlayer);
    console.log(this.positions);

    this.getOpenPositions();
  },
  getOpenPositions: function(positions) {
    var self = this;
    self.openPositions = [];
    self.positions.forEach( function(position) {
      if ( typeof position == "number" ) {
        self.openPositions.push( position )
      }
    });
    console.log("----------")
    console.log(self.openPositions);
    return self.openPositions;
  },
  thereIsAWinner: function() {
    return this.gameStatus.over;
  },
  winner: function() {
    if ( this.thereIsAWinner() ) {
      return this.gameStatus.winner;
    } else {
      return this.gameStatus.winner;
    }
  }
}
