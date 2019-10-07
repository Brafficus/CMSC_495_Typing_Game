/* * * * * * * * * * * * * * * * *
 *    CMST 495 6380 Group 2      *
 * * * * * * * * * * * * * * * * *
 *
 * Name: validator.js
 * Author: Thuan Bui, Christopher Sankey, Nathan Woodson, Danny Ramirez
 * Description: Takes care of comparing the player's input against the current word.
 *
 */

/* Revision History
 * 10/1/2019 - Created class using Danny's original work and incorporated it into the site.
 * (Chris Sankey)
 */

class Validator {
  display;
  word;
  level;

  constructor(display) {
    this.display = display;
    this.level = 0;
  }

  levelUp() {
    this.level++;
    this.display.displayLevel(this.level);
  }

  getLevel() {
    return this.level;
  }

  setWord(word) {
    this.word = word;
    this.display.displayWord(word);
  }

  /**
   * Compares the player's input against the 
   * word generated by setWord().
   * 
   * @return {Boolean}
   */
  checkWord(word) {
    if (this.word.toLowerCase() === word.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
}