'use strict'

game.directive('board', function () {
  return {
    restrict: 'E',
    template: function () {
      var height = 10
      var width = 10
      // create <table> element
      var goltable = document.createElement("tbody");

      // build Table HTML
      var tablehtml = '';
      for (var h=0; h<height; h++) {
        tablehtml += "<tr id='row+" + h + "'>";
        for (var w=0; w<width; w++) {
          tablehtml += "<td data-status='dead' id='" + w + "-" + h + "'></td>";
        }
        tablehtml += "</tr>";
      }

      console.log(typeof tablehtml)

      goltable.innerHTML = tablehtml;
      // return '<h1>hello</h1>'
      return '<table id="board"><tbody>' + tablehtml + '</tbody></table>'
    },
    link: function(scope, element, attr) {
      scope.height = [0, 1, 2, 3]
      scope.width = [0, 1, 2, 3]
    }
  }
});
