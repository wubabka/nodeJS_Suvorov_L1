const ansi = require("ansi");

var prompt = require("./div");
var cursor = ansi(process.stdout);
cursor.beep();