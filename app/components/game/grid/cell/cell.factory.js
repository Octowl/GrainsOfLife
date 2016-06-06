'use strict';
var pentatonicFrequencies = [
    /*16.35,
    18.35,
    20.6,
    24.5,
    27.5,
    32.7,
    36.71,
    41.2,
    49,
    55,
    65.41,
    73.42,
    82.41,
    98,
    110,
    130.81,
    146.83,
    164.81,
    196,
    220,*/
    261.63,
    293.66,
    329.63,
    392,
    440,
    523.25,
    587.33,
    659.25,
    783.99,
    880,
    1046.5,
    1174.66,
    1318.51,
    1567.98,
    1760
    /*2093,
    2349.32,
    2637.02,
    3135.96,
    3520,
    4186.01,
    4698.63,
    5274.04,
    6271.93,
    7040*/
];

game.factory('cellFactory', function(gameFactory, synthFactory){

/**
 * [Cell constructor]
 * @type {[type]}
 */
const Cell = class {
  constructor(cell, x, y, status, deadCount, aliveCount, height, width, scope) {
    this.cell = cell;
    this.scope = scope;
    this.x = x
    this.y = y
    this.status = status
    this.states = [this.status] //zero-indexed to step
    this.deadCount = deadCount
    this.aliveCount = aliveCount
    this.freq = pentatonicFrequencies[x % pentatonicFrequencies.length];
    this.velocity = 500* (y /  width);
    this.parent = {height, width}
  }
  generateFrequency(){}
  //generateRandomFrequency(){}
  get neighbors(){
    let x = this.x, y = this.y;
    let neighbors = [
      Cell.getNeighbor(x-1, y-1, this.parent),
      Cell.getNeighbor(x  , y-1, this.parent),
      Cell.getNeighbor(x+1, y-1, this.parent),
      Cell.getNeighbor(x-1, y  , this.parent),
      Cell.getNeighbor(x+1, y  , this.parent),
      Cell.getNeighbor(x-1, y+1, this.parent),
      Cell.getNeighbor(x  , y+1, this.parent),
      Cell.getNeighbor(x+1, y+1, this.parent)
    ];
    return neighbors;
  }
  static getNeighbor(x, y, parent){
    if( x < 0 ) x = parent.width-1;
    if( x >= parent.width ) x = 0;
    if( y < 0 ) y = parent.height-1;
    if( y >= parent.height ) y = 0;
    if( x<0 ||
        x >= parent.width ||
        y <0 ||
        y >= parent.height ) {
          return null
        } else {
          let cellToReturn = Cell.getCell(x, y);
          let toReturn = cellToReturn.scope().$$childHead.cellObj;
          return toReturn;
        }
    // return x < 0 || x >= parent.width || y < 0 || y >= parent.height ? null : document.getElementById( x+'-'+y ).scope.cellObj;
  }
  static getCell(x, y){
    return angular.element(document.getElementById( x + '-' + y ))
  }
  /**
   * [checkNeighbors returns the number of alive neighbors for a cell]
   * @param  {[integer]} step [step should be the previous step during a step event]
   * @return {[integer]}      [the number of alive neighbors]
   */
  checkNeighbors(step){
    debugger;
    let aliveNeighbors = 0;
    this.neighbors.forEach( function(neighbor){
      if(!!neighbor && neighbor.states[step] === 'alive'){
        aliveNeighbors++
      }
    })
    return aliveNeighbors;
  }
  makeAliveOrDead(step){
    let neighborCount = this.checkNeighbors(step);
    if(this.isAlive(step)){
      synthFactory.noteOnWithFreq(this.freq, this.velocity);
      if(neighborCount < 2 || neighborCount > 3) {
        this.makeDead();
      }
    }
    else{
      synthFactory.noteOffWithFreq(this.freq);
      if(neighborCount === 3){
        this.makeAlive();
      }
    }
    this.registerState();
  }
  changeColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }
  toggleState(){}
  randomState(){}
  isAlive(step = null){
    return step === null ? this.status === 'alive' : this.states[step] === 'alive';
  }
  toggleNote(){}
  makeAlive(register = false){
    debugger;
    this.status = 'alive';
    if(register) this.states[gameFactory.currentStep] = this.status;
    this.cell.className = "alive";
    this.cell.setAttribute('status', 'alive');
    this.cell.setAttribute('style', 'background-color:' + this.changeColor())
    // console.log(color)
  }
  makeDead(register = false){
    debugger;
    this.status = 'dead';
    if(register) this.states[gameFactory.currentStep] = this.status;
    this.cell.className = "dead";
    this.cell.setAttribute('data-status', 'dead');
    this.cell.setAttribute('style', 'background-color:#FFFFFF')
  }
  registerState(){
    this.states.push(this.status);
  };
  click(){
    if (this.status == 'dead') {
      this.makeAlive(true);
        // this.cell.className = "alive";
        // this.cell.setAttribute('status', 'alive');
        // this.cell.setAttribute('style', 'background-color:' + color)
        // // console.log(color)
    } else {
      this.makeDead(true);
        // this.cell.className = "dead";
        // this.cell.setAttribute('data-status', 'dead');
        // this.cell.setAttribute('style', 'background-color:#FFFFFF')
    }
  }
}


  return Cell;
});
