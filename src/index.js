const express = require('express')
var app = express()

// This gets call for each request
app.use(function (req, res, next) {
  console.log('Application Startup', Date.now())
  next()
})

// This gets called when pasth as user:id is run along with other function
app.use('/user/:id', function (req,res,next) {
  console.log('Requestfg url:', req.originalUrl)
  next()
}, function(req,res,next){
  console.log('Request Type:', req.method)
  //next()
})

// This called when request is for root path
app.get('/' , function(req,res,next){
  res.send("Root")
})


//create a server object:
/*http
  .createServer(function (req, res) {
    res.write("Hedd!"); //write a response to the client
    res.end(); //end the response
  })
*/
  .listen(8080); //the server object listens on port 8080
