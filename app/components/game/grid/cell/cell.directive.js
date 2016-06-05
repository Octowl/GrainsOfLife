'use strict';
game.directive('cell', ['cellClickFactory', '$log', function(cellClick, $log){
  return {
    restrict: 'E',
    template: `<td cell={{$parent.$index}} id="{{$parent.$index}}-{{$parent.$parent.$index}}" status="dead" ng-click="toggleStatus()"></td>`,
    replace: true,
    scope: {
      "status": '@',
    },
    link: function(scope, cell, attrs){
      scope.$on('step', function(){
        console.log('stepping');
      })
      scope.toggleStatus = function(){cellClick(scope, cell[0], attrs)}
    }
  }
}])


//
// function onClick (scope, cell, attrs, cellClick){
//   return cellClick.bind(scope, cell, attrs);
// }
