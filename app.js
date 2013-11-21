var express = require("express");
var app = express();
app.use(express.logger());
var restler = require('restler');

  var wolfram = require('wolfram-alpha').createClient("4EU37Y-TX9WJG3JH3", null);


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

app.all('/', function(request, response) {
  
wolfram.query("What is mitosis?", function (err, result) {
  if (err) throw err;
  console.log("- %j",result);
  if(result[1].subpods[0]){
   response.send(result[1].subpods[0].text);
   }else{
   response.send(result[0].subpods[0].text);
   }
});

});
