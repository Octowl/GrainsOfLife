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
      scope.cellObj = new cellFactory(DOMcell, scope.$parent.$parent.index, scope.$parent.$index,  gameFactory.cellCount, gameFactory.height, gameFactory.width, scope);
      let cellObj = scope.cellObj;
      scope.$on('step', function(previousStep, nextStep){
        cellObj.checkNeighbors(previousStep)
      })
      scope.toggleStatus = function(){cellClick(scope, cell[0], attrs)};
    }
  }
}])


//
// function onClick (scope, cell, attrs, cellClick){
//   return cellClick.bind(scope, cell, attrs);
// }
