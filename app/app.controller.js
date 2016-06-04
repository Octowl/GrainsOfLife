

game.controller("app", ['$scope', '$window', 'cell', 'gameFactory', function($scope, $window, Cell, gameOfLife){
  $scope.gameOfLife = gameOfLife;
  var FileReader = new $window.FileReader()
  document.getElementById('step_btn').addEventListener('click', $scope.gameOfLife.step.bind($scope.gameOfLife))
  document.getElementById('clear_btn').addEventListener('click', $scope.gameOfLife.clear.bind($scope.gameOfLife))
  document.getElementById('play_btn').addEventListener('click', $scope.gameOfLife.enableAutoPlay.bind($scope.gameOfLife))
  document.getElementById('reset_btn').addEventListener('click', $scope.gameOfLife.randomize.bind($scope.gameOfLife))
  document.getElementById('submit_file').addEventListener('click', function() {
    var file = document.getElementById('input').files[0],
        content = FileReader.readAsText(file)
    while (FileReader.readyState !== 2) {
      console.log(FileReader.readyState)
    }
    console.log(content.result)
  })

  $scope.gameOfLife.createAndShowBoard();



}]);
