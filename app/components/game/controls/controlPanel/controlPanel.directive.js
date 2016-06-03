'use strict';
game.directive("controlPanel", function(){
  return {
    restrict: "E",
    replace: true,
    template: controlPanelTemplate()
  }
})


function controlPanelTemplate(){
  return `
  <div id="control_panel" class="container-fluid">
    <button name="collapse" class="glyphicon glyphicon-menu-down" />
    <step></step>
    <input id='step_amount' placeholder="Auto Play Speed (ms) " value='600'>
    <play></play>
    <reset></reset>
    <clear></clear>
  </div>
  `
}
