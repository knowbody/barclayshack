var express = require("express");
var app = express();
app.use(express.logger());
var restler = require('restler');

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


var message = 'how tall is obama';
app.all('/', function(request, response) {
    restler.get('http://www.wolframalpha.com/input/?i=' + message).on('complete', function(r) {
        var titles = "<Response>";
            titles += "<Sms>" + request + '   ' + response + "</Sms>";
        titles += "</Response>";
        response.send(titles);
    });
});
