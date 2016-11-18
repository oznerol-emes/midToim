var express = require('express');
var app = express();
var port = 1337;
  //express static fileserver middleware
app.use(express.static('./'))

app.listen(port, (err)=> {
  if(err){
    console.log('Server Down Sucka', err);
  } else {
    console.log('Server UP Foo');
  }
});
