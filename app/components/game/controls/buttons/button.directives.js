
game.directive("clear", function(){
  return {
    restrict: "E",
    replace: true,
    template: "<button id='clear_btn' class='btn btn-info'>Clear</button>"
  }
})

game.directive("pause", function(){
  return {
    restrict: "E",
    replace: true,
    template: "<button>Pause</button>"
  }
})

game.directive("play", ['stepFactory', function(stepFn){
  return {
    restrict: "E",
    replace: true,
    template: `<button id='play_btn' class='btn btn-primary' ng-click="enableAutoPlay()">Play</button>`,
    link: function(scope, playBtn){
      scope.autoPlayOn = false;
      scope.enableAutoPlay = function(){
        if (scope.autoPlayOn) {
          scope.autoPlayOn = false
          clearInterval(scope.setIntervalID)
          playBtn[0].innerHTML = 'Play'
        } else {
          debugger;
          scope.autoPlayOn = true
          scope.setIntervalID = setInterval(stepFn.bind(scope), document.getElementById('step_amount').value || 100)
          playBtn[0].innerHTML = 'Pause'
        }
      }
    }
  }
}])

game.directive("reset", function(){
  return {
    restrict: "E",
    replace: true,
    template: "<button id='reset_btn' class='btn btn-warning'>Reset Random</button>"
  }
})

game.directive("save", function(){
  return {
    restrict: "E",
    replace: true,
    template: "<button>Save</button>"
  }
})

game.directive("step", function(){
  return {
    restrict: "E",
    replace: true,
    template: "<button id='step_btn' class='btn btn-success'>Step</button>"
  }
})

game.directive("submit", function(){
  return {
    restrict: "E",
    replace: true,
    template: "<button>Submit</button>"
  }
})
