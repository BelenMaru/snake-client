const net = require("net");

//establishing connetion with game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: "50542",
  });

  conn.on('connect', () => {
    console.log("Sucessfully connected to game sever")
    conn.write("Name: ABC")
    conn.write("Move: up") 

  })

  conn.on('data', (data) => {
    console.log(data.toString());
  });

  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.export = {
  connect,
}

