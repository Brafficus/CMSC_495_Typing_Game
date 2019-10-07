/* * * * * * * * * * * * * * * * *
 *    CMST 495 6380 Group 2      *
 * * * * * * * * * * * * * * * * *
 *
 * Name: DictionaryPull.js
 * Author: Thuan Bui, Christopher Sankey, Nathan Woodson, Danny Ramirez
 * Description: Handles dictionary interactions
 *
 */

/* Revision History
 * 9/24/2019 - Began working on file, created test function to ensure the test HTML file is able to use it.
 * (Chris Sankey)
 * 
 * 9/25/2019 - Removed test function, added all necessary features (ability to set level length, pulling
 *             an array of words from the JSON used as our dictionary, pulling a single word from that
 *             array, loading the JSON for use)
 * (Chris Sankey)
 * 
 * 9/30/2019 - Converted to a class and incorporated into the rest of the site.
 * (Chris Sankey)
 */

class DictionaryPull {
  wordList = [];
  levelLength = 5;
  dictionary;
  
  constructor() {
    this.wordList = [];
    this.levelLength = 5;
  }

  setLevelLength(length) {
    this.levelLength = length;
  }

  pullWordArray(level) {
    this.wordList = [];
    
    // The JSON.parse(JSON.stringify)) is to force JavaScript to make a deep copy instead of assigning by reference
    let words = JSON.parse(JSON.stringify(this.dictionary[level]));
    
    for(let length = this.levelLength; length > 0; length--) {
      let index = Math.floor(Math.random() * words.length);
      this.wordList.push(words.splice(index, 1));
    }
    
    return this.wordList;
  }

  pullWord() {
    if(this.wordList.length == 0) {
      return false;
    } else {
      return this.wordList.pop();
    }
  }
  
  setDictionary(dic) {
    this.dictionary = dic;
  }
}