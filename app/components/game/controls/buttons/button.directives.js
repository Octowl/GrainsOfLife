
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

game.directive("play", function(){
  return {
    restrict: "E",
    replace: true,
    template: "<button id='play_btn' class='btn btn-primary'>Play</button>"
  }
})

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
