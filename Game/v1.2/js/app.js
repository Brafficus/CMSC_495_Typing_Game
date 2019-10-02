/* * * * * * * * * * * * * * * * *
 *    CMST 495 6380 Group 2      *
 * * * * * * * * * * * * * * * * *
 *
 * Name: app.js
 * Author: Thuan Bui, Christopher Sankey, Nathan Woodson, Danny Ramirez
 * Description:
 *
 */

//window.addEventListener('DOMContentLoaded', init);

let wpmField = document.getElementById("wpm");
let levelField = document.getElementById("level");
let timerField = document.getElementById("timer");
let modeField = document.getElementById("mode");
let scoreField = document.getElementById("score");
let wordField = document.getElementById("word");
let wordInput = document.getElementById("wordInput");

const display = new Display(wpmField, levelField, timerField, modeField, scoreField, wordField, wordInput);
const score = new Score(display);
const timer = new Timer(180, display);
const dictionaryPull = new DictionaryPull();
const validator = new Validator(display);

wordInput.value = "";

wordInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    if (validator.checkWord(wordInput.value)) {
      score.addPoints(10);
    }
    wordInput.value = "";
    let newWord = dictionaryPull.pullWord()[0];

    if (!newWord) {
      levelUp();
    } else {
      validator.setWord(newWord);
    }

  } else if (!timer.started) {
    timer.start(timer);
  }
});

function LoadFile() {
  let oFrame = document.getElementById("frmFile");
  let strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
  dictionaryPull.setDictionary(JSON.parse(strRawContents));
  levelUp();
}

function levelUp() {
  validator.levelUp();
  
  if (validator.getLevel() <= 10) {
    dictionaryPull.pullWordArray(validator.getLevel());
    validator.setWord(dictionaryPull.pullWord()[0]);
  } else {
    console.log("You win!");
    timer.stop();
  }
}