// const cookieParser = require('cookie-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const uuid = require('uuid');

const {processComment, addToUsers, addPost, addToWebsocket, getAllItems, updateUserAuthToken, addUserDb, addPostDb, addToWebsocketDb, updatePostData} = require('./dao.js');
const getWeather = require('./weather.js')

const port = process.argv.length > 2 ? process.argv[2] : 3040;

app.use(express.static('public'));

// Error middleware
app.get('/error', (req, res, next) => {
  throw new Error('Error: Resource not found');
});

//getting backend data
app.get('/data', async (req, res, next) => {
  try {
    const siteData = await getAllItems()
    // console.log(siteData)
    res.send(siteData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
})

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

  // addToUsers(req.body)
  addUserDb(req.body)

  res.send({"message": "Data received successfully."});
});

app.post('/post', (req, res, next) => {
  // addPost(req.body)
  addPostDb(req.body)

  res.send({"message": "Data received successfully."});
});

app.put('/comment', async (req, res) => {

  req.body.postData


  console.log('body')
  console.log(req.body)

  obj = await processComment(req.body.postData, req.body.commentText, req.body.currentPostID, req.body.parentID)
  // addToWebsocket(req.body.commentText)
  console.log('obj: ')
  console.log(obj.posts[0].comments[0])
  updatePostData(obj)
  addToWebsocketDb(req.body.commentText)

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
//import file ✅ and make basic db call logic 1✅
//Connect everything in the project to it 2✅
//Password encryption 3
//Cookies 2
//new login endpoints 1

//1 Get all users endpoint✅
//2a Ability to generate tokens✅
//2b Login Endpoint that returns token and weather data
//3 Logout endpoint that deleted token
//4 Register endpoint that also returns token and weather data
//5 Remove user data from front end
//6 Ability to check if token (from cookie) is valid only for new posts is this used. Returns usernamen and weather data
//7 Slightly change new posts funciton to use the verification endpoint
//8 Slightly change is logged in function to check for cookies
//9 BCrypt

updateUserAuthToken('rencherg', 'nviorenvjufikren')