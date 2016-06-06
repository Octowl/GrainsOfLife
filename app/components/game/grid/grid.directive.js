'use strict';
game.directive('gameGrid',['cellFactory', function(Cell){
  return {
    restrict: "EA",
    template: `<table id="board"><tbody><tr row={{$index}} ng-repeat="row in rows track by $index"></tr></tbody></table>`,
    replace: true,
    link: function(scope){
      // scope.rows = makeRows(50, 50, Cell)
      scope.rows = new Array(50);
    }
  }
}])

// function makeRow(j, width, Cell){
//   return Array.from({length: width}, function(cell, i){
//     let DOMcell = document.getElementById(i + '-' + j);
//     return new Cell(DOMcell, i, j, 0, 0, 50, 50)
//   })
// }
//
// function makeRows(height, width, Cell){
//   return Array.from({length: height}, function(row, j){
//     return makeRow(j, width, Cell)
//   })
// }
