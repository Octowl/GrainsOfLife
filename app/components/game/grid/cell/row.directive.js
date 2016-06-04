'use strict';

game.directive('row', function(){
  return {
    restrict: 'EA',
    template: `<td cell={{$index}} id="{{$index}}-{{$parent.$index}}" ng-repeat="cell in row track by $index"></td>`,
    // scope: {
    //   row: '@'
    // },
    transclude: false,
    controller: ['$scope', function($scope){
      console.log($scope);
      // $scope.row = $scope.id;
    }]
  }
})
