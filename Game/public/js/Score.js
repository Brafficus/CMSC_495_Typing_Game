/* * * * * * * * * * * * * * * * *
 *    CMST 495 6380 Group 2      *
 * * * * * * * * * * * * * * * * *
 *
 * Name: Score.js
 * Author: Thuan Bui, Christopher Sankey, Nathan Woodson, Danny Ramirez
 * Description: Keeps track of score and adds points as necessary
 *
 */

/* Revision History
 * 9/30/2019 - Created class using Nathan's original work and incorporated it into the site.
 * (Chris Sankey)
 */

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