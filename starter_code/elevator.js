class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.floor      = 0;
    this.direction  = 0;
  }

  start() {
    this.startElevator = setInterval( () => {
    this.update();
    }, 1000);
  }

  stop() {
    setTimeout( () => { clearInterval(this.startElevator); }
  }

  update() {
    this.log();
  }

  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
