const should = require('chai').should();


describe("Grains of Life", function(){
  it("is refactored to Angular best practices", function () {
    throw 'fail';
  })
  describe("Grid", function () {
    describe("Game Logic", function () {
      //Game of Life Rules: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules
      it("follows game of life rules", function(){
        //throw 'false';
      })
    })
    describe("Node", function () {
      describe("State", function () {
        it("can be 'alive' or 'dead'", function(){
          //throw 'fail';
        })
        it("is 'dead' by default", function(){
          //throw 'fail';
        })
      })
      describe("Wave", function () {
        it("outputs when Node is alive", function(){
          throw 'fail';
        })
        it("does not output when Node is dead", function(){
          throw 'fail';
        })
        it("is function of coordinates", function(){
          throw 'fail';
        })
        it("frequency is controlled by x coords by default", function(){
          throw 'fail';
        })
        it("amplitude (volume) is controlled by y coords by default", function(){
          throw 'fail';
        })
        it("has a different form for every node", function(){
          throw 'fail';
        })
        it("outputs to a processor chain", function(){
          throw 'fail';
        })
      })
      describe("Click", function () {
        it("toggles between 'alive' and 'dead'", function(){
          //throw 'fail';
        })
        it("plays a short tone", function(){
          throw 'fail';
        })
      })
    })
    describe("Play Button", function () {
      it("plays the sounds continuously", function(){
        throw 'fail';
      })
      it("iterates the game state", function(){
        throw 'fail';
      })
      it("changes to pause button when running", function(){
        throw 'fail';
      })
      describe("Pause Button", function () {
        it("pauses both playback and game play", function(){
          throw 'fail';
        })
      })
    })
    describe("Save Button", function () {
      it("creates a persistent route the the current grid state", function(){
        throw 'fail';
      })
      it("gives some sort of visual feedback", function(){
        throw 'fail';
      })
    })
    describe("UI Controller", function () {
      it("controls width", function(){
        throw 'fail';
      })
      it("controls height", function(){
        throw 'fail';
      })
      it("controls wave function", function(){
        throw 'fail';
      })
      it("controls the playback speed", function(){
        throw 'fail';
      })
      it("allows user to choose waveform", function(){
        throw 'fail';
      })
    })
    describe("Audio Output", function () {
      xit("uses web audio api", function(){
        throw 'fail';
      })
      it("combines the sounds of all nodes", function(){
        //throw 'fail';
      })
    })
  })
  // wish list is for features that would be cool but aren't for the first round
  describe("Wish List", function () {
    it("is multiplayer", function(){
      throw 'fail';
    })
    it("could have other custom 'alive' states (not by default)", function(){
      throw 'fail';
    })
    it("can sample an mp3", function(){
      throw 'fail';
    })
    it("does not slow down with more live nodes", function(){
      throw 'fail';
    })
  })
})
