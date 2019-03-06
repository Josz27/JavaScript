var Emitter= require ('events');
var emtr = new Emitter();

emtr.on('greet', function() {
  console.log(' Mukashi Hanashi');
});
    
emtr.on('greet', function() {
    console.log('A "Subarashi" thing happened');
});
console.log('Hi');
emtr.emit('greet');
