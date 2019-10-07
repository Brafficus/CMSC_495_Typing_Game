/* * * * * * * * * * * * * * * * *
 *    CMST 495 6380 Group 2      *
 * * * * * * * * * * * * * * * * *
 *
 * Name: Display.js
 * Author: Thuan Bui, Christopher Sankey, Nathan Woodson, Danny Ramirez
 * Description: Handles all changes to the GUI
 *
 */

/* Revision History
 * 9/30/2019 - Created class using Nathan's original work and incorporated it into the site.
 * (Chris Sankey)
 * 
 * 10/3/2019 - Added win message.
 * (Chris Sankey)
 */

class Display {
  wpm;
  level;
  timer;
  mode;
  score;
  word;
  wordInput;

  constructor(wpm, level, timer, mode, score, word, wordInput) {
    this.wpm = wpm;
    this.level = level;
    this.timer = timer;
    this.mode = mode;
    this.score = score;
    this.word = word;
    this.wordInput = wordInput;
  }

  displayScore(score) {
    this.score.innerHTML = score;
  }

  displayTime(time) {
    this.timer.innerHTML = Math.ceil(time);
  }

  displayWord(word) {
    this.word.innerHTML = word;
  }

  displayWpm(wpm) {
    if(wpm !== Infinity);
    this.wpm.innerHTML = Math.ceil(wpm);
  }

  displayLevel(level) {
    if (level <= 10) {
      this.level.innerHTML = level;
    }
  }

  displayMode(mode) {
    this.mode.innerHTML = mode;
  }

  clearWordInput() {
    this.wordInput.value = "";
  }

  gameOver() {
    this.word.innerHTML = "Game Over";
    this.timer.innerHTML = "0";
    this.wordInput.setAttribute("disabled", "true");
  }

  win() {
    this.word.innerHTML = "You win!";
    this.wordInput.setAttribute("disabled", "true");
  }
}