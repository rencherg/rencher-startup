const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const {data, processComment, addToUsers, addPost, addToWebsocket} = require('./dao.js');
const getWeather = require('./weather.js')

//Not until next project

// // Third party middleware - Cookies
// app.use(cookieParser());

// app.post('/cookie/:name/:value', (req, res, next) => {
//   res.cookie(req.params.name, req.params.value);
//   res.send({cookie: `${req.params.name}:${req.params.value}`});
// });

// app.get('/cookie', (req, res, next) => {
//   res.send({cookie: req.cookies});
// });

// // Creating your own middleware - logging
// app.use((req, res, next) => {
//   console.log(req.originalUrl);
//   next();
// });

// Built in middleware - Static file hosting
app.use(express.static('html'));

//ex
// Routing middleware
// app.get('/store/:storeName', (req, res) => {
//   res.send({name: req.params.storeName});
// });

// app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

// app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));

// Error middleware
app.get('/error', (req, res, next) => {
  throw new Error('Error: Resource not found');
});

//getting backend data
app.get('/data', (req, res, next) => {
  res.send(data);
});

//These two will be implemented later
// app.post('/login', (req, res, next) => {
//   res.send({"message": "ok"});
// });

// app.post('/logout', (req, res, next) => {
//   res.send({"message": "ok"});
// });

const bodyParser = require('body-parser');
app.use(bodyParser.json());
//This will be changed but right now it only adds a user to the database
app.post('/register', (req, res) => {

  addToUsers(req.body)

  res.send({"message": "Data received successfully."});
});

app.post('/post', (req, res, next) => {
  addPost(req.body)

  res.send({"message": "Data received successfully."});
});

app.put('/comment', (req, res, next) => {
  res.send({"message": "ok"});
});

app.get('/weather/:zip', async (req, res) => {

  const { zip } =  await req.params;

  let temp

  try{
    temp = await getWeather(zip)
  }catch(e){

    temp = {
      "error": "request invalid"
    }
  }
  
  console.log(temp)
  
  res.send(temp);
})

app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});

// Listening to a network port
const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});