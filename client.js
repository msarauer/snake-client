const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: '50542'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', ()=>{
    console.log('You are connected.');
    conn.write("Name: SUP");
    // setInterval(()=>{conn.write("Move: up")}, 50);
    // setInterval(()=>{conn.write("Move: left")}, 150);
    // setInterval(()=>{conn.write("Move: down")}, 250);
    // setInterval(()=>{conn.write("Move: right")}, 350);
  });
  conn.on('data', (message)=>{
    console.log(message);
  })

  return conn;
};

module.exports = {
  connect
}