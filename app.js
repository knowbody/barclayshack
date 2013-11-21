var express = require("express");
var app = express();
app.use(express.logger());
var restler = require('restler');

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

app.all('/', function(request, response) {
    restler.get('http://api.wolframalpha.com/v2/query?appid=4EU37Y-TX9WJG3JH3&input=mitosis&format=plaintext').on('complete', function(r) {
        var titles = "<Response>";
            titles += "<Sms>" + r.data + "</Sms>";
        titles += "</Response>";
        response.send(titles);
    });
});