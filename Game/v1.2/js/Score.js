class Score {
  display;
  currentScore;
  constructor(display) {
    this.display = display;
    this.currentScore = 0;
  }
  //add points method
  addPoints(points) {
    this.currentScore += points;
    //call method to display
    this.display.displayScore(this.currentScore);
  }    
}