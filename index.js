// const cookieParser = require('cookie-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const {data, processComment, addToUsers, addPost, addToWebsocket} = require('./dao.js');
const getWeather = require('./weather.js')

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.static('public'));

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

app.put('/comment', (req, res) => {

  req.body.postData

  processComment(req.body.postData, req.body.commentText, req.body.currentPostID, req.body.parentID)
  addToWebsocket(req.body.commentText)

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
  
  res.send(temp);
})

app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});

// Listening to a network port
// const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

//Todo

//get DB credentials✅
//put them in a file✅
//import file and make basic db call logic 1
//Connect everything in the project to it 2
//Password encryption 4
//Cookies and new login endpoints 3