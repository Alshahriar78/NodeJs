const EventEmitter = require('events'); //require events class
// create a object of class instance;
const emitter = new EventEmitter();


// register a listener for myEvent  event
emitter.on('myEvent',(period)=>{
    console.log(`myEvent fired ${period}`);
});
// emitting an event
// raise an event
setTimeout(()=>{
    console.log('after 2 seconds');
    emitter.emit('myEvent',' need to raise because 2 second gone already');
},2000);



// listen for an event
