'use strict';
game.directive('gameGrid',function(){
  return {
    restrict: "E",
    template: `<table id="board"></table>`,
    replace: true
  }
})
