'use strict'

game.directive('board', function () {
  return {
    restrict: 'E',
    template: function () {
      // create <table> element
      // var goltable = $scope.document.createElement("tbody");
      //
      // // build Table HTML
      // var tablehtml = '';
      // for (var h=0; h<this.height; h++) {
      //   tablehtml += "<tr id='row+" + h + "'>";
      //   for (var w=0; w<this.width; w++) {
      //     tablehtml += "<td data-status='dead' id='" + w + "-" + h + "'></td>";
      //   }
      //   tablehtml += "</tr>";
      // }
      // goltable.innerHTML = tablehtml;
      //
      // return goltable
      return 'test'
    }
  }
});
