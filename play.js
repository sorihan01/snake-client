
const {connect} = require('./client');
const {setupInput} = require('./input')
console.log('Connecting...');

// connect();
setupInput(connect());

// module.exports = connect();//is this correct?