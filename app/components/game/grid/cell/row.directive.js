'use strict';

game.directive('row', function(){
  return {
    restrict: 'EA',
    template: `<cell ng-repeat="cell in row track by $index"></cell>`,
    // scope: {
    //   row: '@'
    // },
    controller: ['$scope', function($scope){
      console.log($scope);
      // $scope.row = $scope.id;
    }]
  }
})


    // template: `<td cell={{$index}} id="{{$index}}-{{$parent.$index}}" ng-repeat="cell in row track by $index"></td>`,
