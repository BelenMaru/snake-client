const net = require("net");
const { IP, PORT } = require("./constants");

//establishing connetion with game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

 // Interpret incoming data as text
  conn.setEncoding("utf8");

// First connection establishment
  conn.on('data', (data) => {
    console.log(data.toString());
  });

 //handle the event
  conn.on('connect', () => {
    console.log("Sucessfully connected to game sever");
    conn.write("Name: ABC");
  });
   
    setTimeout(() => {
   setInterval(() => {conn.write('Move:up') },400)
   setInterval(() => {conn.write('Move:left') }, 750)
   },250);

   return conn;


};
// console.log("Connecting ...");
// connect();


module.export = {
  connect,
}

