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


var Cell = class {
  constructor(cell, x, y, status, deadCount, aliveCount, height, width) {
    this.cell = document.getElementById(x + '-' + y);
    this.x = x
    this.y = y
    this.status = status
    this.deadCount = deadCount
    this.aliveCount = aliveCount
    this.freq = pentatonicFrequencies[x % pentatonicFrequencies.length];
    this.velocity = 1000* (y /  width);
    this.parent = {height, width}
  }
  generateFrequency(){}
  //generateRandomFrequency(){}
  getNeighbors(){}
  checkNeighbors(){}
  changeColor(){}
  toggleState(){}
  randomState(){}
  isAlive(){}
  toggleNote(){}
  makeAlive(){}
  makeDead(){}
}

game.factory('cell', function(){
  return Cell;
});
