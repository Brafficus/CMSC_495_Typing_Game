/* * * * * * * * * * * * * * * * *
 *    CMST 495 6380 Group 2      *
 * * * * * * * * * * * * * * * * *
 *
 * Name: Timer.js
 * Author: Thuan Bui, Christopher Sankey, Nathan Woodson, Danny Ramirez
 * Description: Keeps track of time remaining and elapsed time
 *
 */

/* Revision History
 * 9/30/2019 - Created class using Nathan's original work and incorporated it into the site.
 * (Chris Sankey)
 * 
 * 10/2/2019 - Added a call to Display's gameOver() function if time runs out.
 * (Chris Sankey)
 * 
 * 10/3/2019 - Added 'elapsedTime' to help calculate WPM per Nathan and Thuan's recommendation.
 * (Chris Sankey)
 */

class Timer {
  display;
  seconds;
  started;
  timer;
  elapsedTime;

  //constructor
  constructor(seconds, display) {
    this.seconds = seconds;
    this.display = display;
    this.started = false;
    this.elapsedTime = 0;
  }
  //get time method
  getTime(){
    return this.seconds;
  }
  //add seconds method
  addSeconds(sec){
    this.seconds+=sec;
  }
  //stop method
  stop(){
    this.started = false;
  }       
  //set timer
  setTimer(seconds){
    this.seconds = seconds;
    this.display.displayTime(seconds);
  }
  //start method
  start(timer){
    this.timer = timer;
    //var seconds = 180;
    this.started = true;
    
    //run subTime on 1 sec interval
    setInterval(function() {timer.subTime()}, 1000);
  }

  getElapsedTime(){
    return this.elapsedTime;
  }
  
  //sub 1 second function
  subTime(){
    if(this.seconds > 0 && this.started){
      this.seconds--;
      this.elapsedTime++;
      //call method to display
      this.display.displayTime(this.seconds);                             
    } else if(this.seconds <= 0) {
      //call method to display
      this.display.gameOver();
    }
  }
}