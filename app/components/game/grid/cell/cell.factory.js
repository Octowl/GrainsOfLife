'use strict';

var Cell = class {
  constructor(cell, x, y, status, deadCount, aliveCount) {
    this.cell = cell
    this.x = x
    this.y = y
    this.status = status
    this.deadCount = deadCount
    this.aliveCount = aliveCount
  }
}

game.factory('cell', function(){
  return Cell;
});
