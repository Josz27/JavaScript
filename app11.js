//Cambio y uso de events, el cual está en el core de javascript
var Emitter= require ('events');
var eventConfig= require ('./config').events;
var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
  console.log(' Mukashi Hanashi');
});
    
emtr.on('greet', function() {
    console.log('A "Subarashi" thing happened');
});
console.log('Hi');
emtr.emit('greet');
