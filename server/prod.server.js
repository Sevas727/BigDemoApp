var express = require('express');
var app = express();

app.use(express.static('../static'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen('3333', '0.0.0.0', function(err){
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', '3333', '3333');
});
