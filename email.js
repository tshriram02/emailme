var email   = require("emailjs/email");
var server  = email.server.connect({
   user:    "tshriram02", 
   password:"password", 
   host:    "smtp.gmail.com", 
   ssl:     true
});

// send the message and get a callback with an error or details of the message that was sent
server.send({
   text:    "i hope this works", 
   from:    "Shriram <tshriram02@gmail.com>", 
   to:      "Abhinav <prabhat4ever@gmail.com>",
   cc:      "Shriram <ts_shriram@hotmail.com>",
   subject: "testing email"
}, function(err, message) { console.log(err || message); });