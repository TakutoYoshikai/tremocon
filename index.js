const Remocon = require("rcjs");
const remocon = new Remocon();
const exec = require("child_process").exec;

remocon.addButton("Close Browser", function() {
  exec("killall firefox");
});

remocon.start(3000);
