class Timer {
  display;
  seconds;
  started;
  timer
  //constructor
  constructor(seconds, display) {
    this.seconds = seconds;
    this.display = display;
    this.started = false;
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
  
  //start method
  start(timer){
    this.timer = timer;
    //var seconds = 180;
    this.started = true;
    
    //run subTime on 1 sec interval
    setInterval(function() {timer.subTime()}, 1000);
  }    
  
  //sub 1 second function
  subTime(){
    if(this.seconds > 0 && this.started == true){
      this.seconds--;
      //call method to display
      this.display.displayTime(this.seconds);                             
    } else {
      //call method to display
      this.display.displayTime(this.seconds);
    }
  }
}