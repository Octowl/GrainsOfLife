
game.directive("clear", function(forEachCell, cellFactory){
  return {
    restrict: "E",
    replace: true,
    template: "<button id='clear_btn' class='btn btn-info' ng-click='clear()'>Clear</button>",
    link: function(scope){
      scope.clear = function(){
        forEachCell( function(cell){
          debugger;
           let cellObj = angular.element(cell).scope()
           cellObj.$$childHead.cellObj.makeDead(true)}
      )}
    }
  }
})

game.directive("pause", function(){
  return {
    restrict: "E",
    replace: true,
    template: "<button>Pause</button>"
  }
})

game.directive("play", ['gameFactory', function(game){
  return {
    restrict: "E",
    replace: true,
    template: `<button id='play_btn' class='btn btn-primary' ng-click="enableAutoPlay()">Play</button>`,
    link: function(scope, playBtn){
      scope.autoPlayOn = false;
      scope.intervalName = 'playPause';
      scope.enableAutoPlay = function(){
        if (scope.autoPlayOn) {
          scope.autoPlayOn = false
          clearInterval(scope.setIntervalID)
          playBtn[0].innerHTML = 'Play'
        } else {
          debugger;
          scope.autoPlayOn = true
          scope.setIntervalID = setInterval(function(){game.step()}, document.getElementById('step_amount').value || 100)
          playBtn[0].innerHTML = 'Pause'
        }
      }
    }
  }
}])

game.directive("reset", function(forEachCell){
  return {
    restrict: "E",
    replace: true,
    template: "<button id='reset_btn' class='btn btn-warning' ng-click='random()'>Reset Random</button>",
    link: function(scope){
      scope.random = function () {
        forEachCell(function (cell, x, y) {
          debugger;
          let cellObj = angular.element(document.getElementById( x + '-' + y)).scope().$$childHead.cellObj;
          var state = Math.floor(Math.random() * 2)
          if (state === 1) {
            cellObj.makeDead(true);
          } else {
            cellObj.makeAlive(true);
          }
        })

      }
    }
  }
})

game.directive("save", function(){
  return {
    restrict: "E",
    replace: true,
    template: "<button>Save</button>"
  }
})

game.directive("step", ['gameFactory', function(gameFactory){
  return {
    restrict: "E",
    replace: true,
    template: "<button id='step_btn' class='btn btn-success' ng-click='step()'>Step</button>",
    link: function(scope){
      scope.step = gameFactory.step;
    }
  }
}])

game.directive("submit", function(){
  return {
    restrict: "E",
    replace: true,
    template: "<button>Submit</button>"
  }
})
