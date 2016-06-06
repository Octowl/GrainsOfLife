'use strict';


var Synth = class{
  constructor(){
    this.sines = [];
    return T("OscGen", (T("reverb", {
            room: 0.95,
            damp: 0.1,
            mix: 0.75
        }, T("sin", {mul:0.25})))).play();
  }
}

function createSynth(T){
  return new Synth()
}

game.factory('synthFactory',function($window){
  debugger;
  var synth = createSynth($window.T);
  return createSynth($window.T);
});
