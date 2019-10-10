/* * * * * * * * * * * * * * * * *
 *    CMST 495 6380 Group 2      *
 * * * * * * * * * * * * * * * * *
 *
 * Name: app.js
 * Author: Thuan Bui, Christopher Sankey, Nathan Woodson, Danny Ramirez
 * Description: Holds the "main" functions and variables for the game, and calls
 *              the other classes and their functions as needed.
 *
 */

/* Revision History
 * 9/27/2019 - Initially created.
 * (Danny Ramirez)
 * 
 * 9/30/2019 - Added calls to all of the other classes and set up variables that'll be needed for the game.
 * (Chris Sankey)
 * 
 * 10/1/2019 - Set up word pulling/displaying and set up initial proof-of-concept tests (points only added to
 *             score with correct input, level increases every five words)
 * (Chris Sankey)
 * 
 * 10/2/2019 - Set up initial time-added-upon-correct-input logic; call win message if player gets through all
 *             words, set up modes (easy/medium/hard).  Input disables until difficulty is selected and when
 *             time runs out/player wins.
 * (Chris Sankey)
 * 
 * 10/3/2019 - Set up WPM calculation per suggestions from Nathan and Thuan.  Implemented Nathan's time adding
 *             logic (time added per correct word decreases withe each level).
 * (Chris Sankey)
 * 
 * 10/5/2019 - Changed gameplay loop so that the next word is only pulled when the user types it correctly.
 * (Chris Sankey)
 */

let wpmField = document.getElementById("wpm");
let levelField = document.getElementById("level");
let timerField = document.getElementById("timer");
let modeField = document.getElementById("mode");
let scoreField = document.getElementById("score");
let wordField = document.getElementById("word");
let wordInput = document.getElementById("wordInput");
let modeChoice;
let wordCount = 0;
let levelCounter = 0;

const display = new Display(wpmField, levelField, timerField, modeField, scoreField, wordField, wordInput);
const score = new Score(display);
const timer = new Timer(180, display);
const dictionaryPull = new DictionaryPull();
const validator = new Validator(display);

wordInput.value = "";

wordInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter" && wordInput.value !== "") {
    if (validator.checkWord(wordInput.value)) {
      wordCount++;
      score.addPoints(10 * validator.getLevel());
      addTime();
      updateWpm();
      levelCounter++;
      newWord = dictionaryPull.pullWord()[0];

      if (!newWord) {
        levelUp();
      } else {
        validator.setWord(newWord);
      }
    }
    wordInput.value = "";

  } else if (!timer.started) {
    document.getElementById("modeButtons").style = "display: none";
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
    timer.stop();
    display.win();
    document.getElementById("buttons-finish").style = "display: block";
  }
}

function setMode(mode) {
  switch(mode) {
    case "Easy":
      timer.setTimer(180);
      break;
    case "Medium":
      timer.setTimer(120);
      break;
    case "Hard":
      timer.setTimer(60);
      break;
  }
  display.displayMode(mode);
  wordInput.removeAttribute("disabled");
  wordInput.setAttribute("placeholder", "Start typing here...");
}

function updateWpm() {
  let wpm = wordCount / (timer.getElapsedTime() / 60);
  display.displayWpm(wpm);
}

function addTime() {
  // Suggested Table to for time to add
  // Level the player is expected to type at a certain speed
  // if the player types faster he/she banks time
  // if the player types slower he/shee loses time
  // +-------+-----+-----------+
  // | Level | WPM | Time(Min) |
  // +-------+-----+-----------+
  // |   1   |  20 |   0.0500  |
  // +-------+-----+-----------+
  // |   2   |  48 |   0.0208  |
  // +-------+-----+-----------+
  // |   3   |  76 |   0.0131  |
  // +-------+-----+-----------+
  // |   4   |  96 |   0.0104  |
  // +-------+-----+-----------+
  // |   5   | 112 |   0.0089  |
  // +-------+-----+-----------+
  // |   6   | 125 |   0.0080  |
  // +-------+-----+-----------+
  // |   7   | 135 |   0.0074  |
  // +-------+-----+-----------+
  // |   8   | 144 |   0.0069  |
  // +-------+-----+-----------+
  // |   9   | 153 |   0.0065  |
  // +-------+-----+-----------+
  // |   10  | 160 |   0.0063  |
  // +-------+-----+-----------+


  //add time on expected words per min for each level
  if(validator.getLevel() == 1){
    //level 1 expected WPM = 20, add 3 secs per word
    timer.addSeconds(3);          
  }else if(validator.getLevel() == 2){      
    //level 2 expected WPM = 48, add 1.25 secs per word
    timer.addSeconds(1.25);
  }else if (validator.getLevel == 3){
    //level 3 expected WPM = 76, add 0.79 secs per word
    timer.addSeconds(0.79);
  }else if(validator.getLevel() == 4){
    //level 4 expected WPM = 96, add 0.62 secs per word
    timer.addSeconds(0.62);
  }else if(validator.getLevel() == 5){
    //level 5 expected WPM = 112, add 0.54 secs per word
    timer.addSeconds(0.54);
  }else if(validator.getLevel() == 6){
    //level 6 expected WPM = 125, add 0.48 secs per word
    timer.addSeconds(0.48);
  }else if(validator.getLevel() == 7){
    //level 7 expected WPM = 135, add 0.44 secs per word
    timer.addSeconds(0.44);
  }else if(validator.getLevel() == 8){
    //level 8 expected WPM = 144, add 0.42 secs per word
    timer.addSeconds(0.42);
  }else if(validator.getLevel() == 9){
    //level 9 expected WPM = 153, add 0.39 secs per word
    timer.addSeconds(0.39);
  }else{
    //level 10 expected WPM = 160, add 0.38 secs per word
    timer.addSeconds(0.38);
  }
}