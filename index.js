//1. Import Area

const express = require('express')
const app = express()

//object.method(string,function);
//app.method();
app.get('/', function (req, res) {
  res.send('Hello World')
});

app.post('/hello', function (req, res) {
    res.json({'message':"Hello world again!"})
  });

  app.post('/hello2', function (req, res) {
    res.status(201).json({
                'message':"Hello world again!",
                'status':200
            })
  });



app.listen(3000)