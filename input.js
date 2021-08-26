const { connect } = require("./client");
// const { setupInput } = require("./input");
let connection;

const up = "Move: up";
const down = "Move: down";
const right = "Move: right";
const left = "Move: left";


// setupInput();
const setupInput = function(conn) {
connection = conn;

// Listen for keyboard input
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// This will happen when data is recievied from th stdin(callback handler)
const handleUserInput = function (input) {
  if (input === '\u0003') {
    console.log("You passed pressed ctrl +c to exit the game :("); 
    process.exit()
  }
  if (input === '\u0077') {       //send message to server when key is pressed
    console.log("W", up);
    connection.wrtie(up);
  }
  if (input ==='\u0061') {
    console.log('A', left);
    connection.write(left);
  }
  if (input === '\u0073') {
    console.log('S', down)
    connection.write(down);
  }
  if (input === '\u0064') {
    console.log("D", right);
    connection.write(right);
  }
};

module.exports = {
  setupInput
};