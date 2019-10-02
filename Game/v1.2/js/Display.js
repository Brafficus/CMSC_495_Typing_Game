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
    this.timer.innerHTML = time;
  }

  displayWord(word) {
    this.word.innerHTML = word;
  }

  displayWpm(wpm) {
    this.wpm.innerHTML = wpm;
  }

  displayLevel(level) {
    this.level.innerHTML = level;
  }

  displayMode(mode) {
    this.mode.innerHTML = mode;
  }

  clearWordInput() {
    this.wordInput.value = "";
  }

  gameOver() {
    this.word.innerHTML = "Game Over"
    this.wordInput.setAttribute("disabled", "true");
  }
}