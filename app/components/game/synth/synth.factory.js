'use strict';


var Synth = class{
  constructor(){
    this.locals = {
      sines: []
    }
    return T("OscGen", (T("reverb", {
            room: 0.95,
            damp: 0.1,
            mix: 0.75
        }, T("sin", {mul:0.25})))).play();
  }
}

function createSynth(T){
  return Synth
}

game.factory('synthFactory',function($window){
  return createSynth($window.T);
});
