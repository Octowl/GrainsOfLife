'use strict';

game.directive('row', function(){
  return {
    restrict: 'EA',
    template: `<cell ng-repeat="cell in cells track by $index"></cell>`,
    // scope: {
    //   row: '@'
    // },
    link: function(scope){
      scope.cells = new Array(50)
    },
    controller: ['$scope', function($scope){
      // $scope.row = $scope.id;
    }]
  }
})


    // template: `<td cell={{$index}} id="{{$index}}-{{$parent.$index}}" ng-repeat="cell in row track by $index"></td>`,
