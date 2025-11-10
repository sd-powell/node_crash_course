import { EventEmitter } from 'events';

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello ' + name + '!');
}

function farewellHandler(name) {
    console.log('Goodbye ' + name + '!');
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('farewell', farewellHandler);

// Emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('farewell', 'John');

// Error handling example
myEmitter.on('error', (err) => {
    console.error('An error occurred:', err);
});

// Emit an error event
myEmitter.emit('error', new Error('Something went wrong!'));