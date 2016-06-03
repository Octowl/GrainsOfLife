'use strict';
app.directive("controlPanel", function(){
  return {
    restrict: "E",
    template: controlPanelTemplate(),
  }
})


function controlPanelTemplate(){
  return `
  <div name="control-panel" class="container-fluid">
    <button name="collapse" class="glyphicon glyphicon-menu-down" />
    <div class="row"><h3>Controls</h3></div>
    <div class="row">
      <h4>Width</h4>

    </div>
    <div class="row"></div>
  </div>
  `
}
