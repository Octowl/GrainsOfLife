'use strict';

game.directive('cell', function(){
  return {
    restrict: 'EA',
    template: `<td data-status="dead"></td>`,
    link: function(scope, cell, attrs){
      
    }

  }
})
