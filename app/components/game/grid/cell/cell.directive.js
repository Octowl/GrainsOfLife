'use strict';
game.directive('cell', ['cellClickFactory', '$log', 'cellFactory', 'gameFactory', function(cellClick, $log, cellFactory, gameFactory){
  return {
    restrict: 'E',
    template: `<td cell={{$parent.$index}} id="{{$parent.$index}}-{{$parent.$parent.$index}}" status="dead" ng-click="toggleStatus()"></td>`,
    replace: true,
    scope: {
      "status": '@',
    },
    link: function(scope, cell, attrs){
      let DOMcell = cell[0];
      scope.cellObj = new cellFactory(DOMcell, scope.$parent.$index, scope.$parent.$parent.$index, 'dead', gameFactory.cellCount, 0, gameFactory.height, gameFactory.width, scope);
      let cellObj = scope.cellObj;
      scope.$on('step', function(e, previousStep, nextStep){
        cellObj.makeAliveOrDead(previousStep)
      })
      scope.toggleStatus = function(){
        //cellClick(scope, cell[0], attrs)
        cellObj.click();
      };
    }
  }
}])


//
// function onClick (scope, cell, attrs, cellClick){
//   return cellClick.bind(scope, cell, attrs);
// }
