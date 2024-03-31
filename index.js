// const cookieParser = require('cookie-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const uuid = require('uuid');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cookieParser());

const {processComment, addToUsers, addPost, addToWebsocket, getAllItems, updateUserAuthToken, addUserDb, addPostDb, addToWebsocketDb, updatePostData, getAllUsers} = require('./dao.js');
const getWeather = require('./weather.js')

const port = process.argv.length > 2 ? process.argv[2] : 3050;

app.use(express.static('public'));

// Error middleware
app.get('/error', (req, res, next) => {
  throw new Error('Error: Resource not found');
});

//getting backend data
app.get('/data', async (req, res, next) => {
  try {
    const siteData = await getAllItems()
    res.send(siteData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
})

//Model object body that we will use
// sampleLoginObject = {
//   "username": "username",
//   "password": "password"
// }

app.post('/login', async (req, res, next) => {
  userList = await getAllUsers()

  found = false
  let foundUserZip

  userList.forEach(element => {
    if((req.body.username === element.username) && (req.body.password === element.password)){
      found = true
      foundUserZip = element.zipcode
    }
  });

  if(found){

    const token = uuid.v4();

    updateUserAuthToken(req.body.username, token)

    const response = {
      "message": "success",
      "authToken": token,
      "userZip": foundUserZip,
      "username": req.body.username
    }

    setAuthUsernameCookies(res, token, req.body.username)

    res.send(response);
  }else{
    res.send({"message": "invalid credentials"});
  }

});

app.post('/logout', async (req, res, next) => {

  const username = req.cookies['username'];

  userList = await getAllUsers()

  found = false

  userList.forEach(element => {
    if((element.username === username)){
      found = true
    }
  });

  if(found){

    updateUserAuthToken(username, '')

    const response = {
      "message": "success",
    }

    res.clearCookie('token');
    res.clearCookie('username');

    res.send(response);
  }else{
    res.send({"message": "invalid credentials"});
  }
});

//Model object body that we will use
// sampleAuthenticateObject = {
//   "username": "username",
//   "token": "token"
// }

app.post('/authenticate', async (req, res, next) => {
  const token = req.cookies['token'];
  const username = req.cookies['username'];

  res.send(await authenticate(username, token));

});

async function authenticate(username, token){

  if(token === ''){
    res.send({"message": "invalid credentials"});
  }

  userList = await getAllUsers()

  found = false
  let foundUserZip

  userList.forEach(element => {
    if((username === element.username) && (token === element.authToken)){
      found = true
      foundUserZip = element.zipcode
    }
  });

  if(found){

    const response = {
      "message": "success",
      "username": username,
      "userZip": foundUserZip
    }

    return response
  }else{
    return({"message": "invalid credentials"});
  }
}

app.post('/register', async (req, res) => {

  userList = await getAllUsers()
  data = req.body

  duplicateUser=false

  userList.forEach(user => {
    if (data.username === user.username) {
      duplicateUser=true
    }
  });

  if(duplicateUser){
    res.send({"message": "User already exists"});
  }else{
    // addToUsers(req.body)
    await addUserDb(req.body)

    const token = uuid.v4();

    updateUserAuthToken(data.username, token)

    const response = {
      "message": "success",
      "authToken": token,
      "userZip": data.zipcode,
      "username": data.username
    }

    setAuthUsernameCookies(res, token, req.body.username)

    res.send(response);
  }
});

app.post('/post', async (req, res, next) => {

  const token = req.cookies['token'];
  const username = req.cookies['username'];

  authenticationResponse = await authenticate(username, token)

  if(authenticationResponse.message !== 'success'){
    res.send({"message": "Error: not logged in."});
  }else{
    // addPost(req.body)
    addPostDb(req.body)

    res.send({"message": "Post added successfully."});
  }
});

app.put('/comment', async (req, res) => {

  req.body.postData

  obj = await processComment(req.body.postData, req.body.commentText, req.body.currentPostID, req.body.parentID)
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

function setAuthUsernameCookies(res, authToken, username) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });

  res.cookie('username', username, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

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
//2b Login Endpoint that returns token and weather data✅
//3 Logout endpoint that deletes token✅
//4 Register endpoint that also returns token and weather data✅
//5 Remove user data from front end
//6 Ability to check if token and username(from cookie) are valid only for new posts is this used. Returns confirmation and weather data✅
//7 Slightly change new posts function to use the verification endpoint
//8 Slightly change is logged in function to check for cookies
//9 BCrypt