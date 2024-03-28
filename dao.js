const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const { MongoClient, ObjectId } = require('mongodb');

const postDataId = '660361f2fef954de8f3df06e'
const userDataId = '6603618bfef954de8f3df06d'
const websocketDataId = '660362a1fef954de8f3df06f'

let sampleUsers = {
    "userlist":[
    {
        "username":"rencherg",
        "password":"password",
        "zipcode":84003,
        "lat/long":"<latlong here>",
        "authToken":""
    },
    {
        "username":"foxmulder",
        "password":"password",
        "zipcode":20535,
        "lat/long":"<latlong here>",
        "authToken":""
    },
    {
        "username":"dscully",
        "password":"password",
        "zipcode":20535,
        "lat/long":"<latlong here>",
        "authToken":""
    },
    {
        "username":"wskinner",
        "password":"password",
        "zipcode":20535,
        "lat/long":"<latlong here>",
        "authToken":""
    },
    {
        "username":"test",
        "password":"test",
        "zipcode":84003,
        "lat/long":"<latlong here>",
        "authToken":""
    }
]}

let samplePostData = {
    "posts":[
    {
        "user":"rencherg",
        "message":"This is my sample post, click on me or any comment to make a comment",
        "id":1,
        "comment_id":15,
        "comments": [
            {
                "user":"rencherg",
                "message":"Dang that's crazy!",
                "id":4,
                "subcomments":[
                    {
                        "user":"rencherg",
                        "message":"I guess so I mean he didn't even say what happened",
                        "id":5,
                        "subcomments":[]
                    },
                    {
                        "user":"rencherg",
                        "message":"Everyone has a story",
                        "id":6,
                        "subcomments":[
                            {
                                "user":"rencherg",
                                "message":"The indent means that this comment is replying to the one above it",
                                "id":7,
                                "subcomments":[]
                            },
                            {
                                "user":"rencherg",
                                "message":"Another comment",
                                "id":8,
                                "subcomments":[]
                            },
                            {
                                "user":"rencherg",
                                "message":"Another comment",
                                "id":9,
                                "subcomments":[
                                    {
                                        "user":"rencherg",
                                        "message":"Another comment",
                                        "id":10,
                                        "subcomments":[
                                            {
                                                "user":"rencherg",
                                                "message":"Another comment",
                                                "id":11,
                                                "subcomments":[
                                                    {
                                                        "user":"rencherg",
                                                        "message":"Another comment",
                                                        "id":12,
                                                        "subcomments":[]
                                                    },
                                                    {
                                                        "user":"rencherg",
                                                        "message":"Late",
                                                        "id":13,
                                                        "subcomments":[]
                                                    },
                                                    {
                                                        "user":"rencherg",
                                                        "message":"Bom dia",
                                                        "id":14,
                                                        "subcomments":[]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "user":"rencherg",
                "message":"It's a busy world huh",
                "id":2,
                "subcomments":[]
            },
            {
                "user":"rencherg",
                "message":"This is another comment",
                "id":3,
                "subcomments":[]
            },
            {
                "user":"rencherg",
                "message":"Another comment",
                "id":1,
                "subcomments":[]
            }
        ]
    },
    {
        "user":"test",
        "message":"Test data Test data Test data Test data Test data Test data",
        "id":2,
        "comment_id":2,
        "comments": [
            {
                "user":"rencherg",
                "message":"Test data",
                "id":1,
                "subcomments":[]
            }
        ],
    }
]}

let sampleWebsocketData = {
    "data":[
        "comment", "comment2", "more sample comments", "another", "ok", "Another sample comment", "late", "Bom dia"
    ]
}

function addToWebsocket(comment){
    sampleWebsocketData['data'].push(comment)
}

function addToUsers(obj){
    sampleUsers['userlist'].push(obj)
}

function addPost(obj){
    samplePostData['posts'].push(obj)
}

function processComment(postData, commentText, currentPostID, parentID){

    let desiredPost = ''
    let postIndex

    //find correct post
    for(let i = 0; i < samplePostData["posts"].length; i++){
        if(samplePostData["posts"][i]["id"].toString()===currentPostID.toString()){

            desiredPost = samplePostData["posts"][i]
            postIndex = i
        }
    }

    //If we are replying to the main post
    if(parentID === 'post-content'){

        samplePostData["posts"][postIndex]['comments'].push({
            "user":desiredPost['user'],
            "message":commentText,
            "id":desiredPost['comment_id'],
            "subcomments":[]
        })

        samplePostData['posts'][postIndex]['comment_id'] = samplePostData['posts'][postIndex]['comment_id']+1

    }

    //Update desired parent comment tree
    for(let i = 0; i < desiredPost['comments'].length; i++){
        let updatedPost = addComment(desiredPost['comments'][i], parentID, desiredPost['comment_id'], desiredPost['user'], commentText)
        if(updatedPost!== null){

            desiredPost['comments'][i] = updatedPost
            samplePostData['posts'][postIndex]['comment_id'] = samplePostData['posts'][postIndex]['comment_id']+1
            samplePostData['posts'][postIndex] = desiredPost

        }
    }

    return postData
}

//helper function for process comment
function addComment(comment, parentID, newID, user, newMessage){
    if(comment['id'].toString() === parentID){
        comment['subcomments'].push({
            "user":user,
            "message":newMessage,
            "id":newID,
            "subcomments":[]
        })
        return comment
    }else if(comment['subcomments'].length > 0){
        for(let i = 0; i < comment['subcomments'].length; i++){
            let result = addComment(comment['subcomments'][i], parentID, newID, user, newMessage)
            if(result !== null){
                comment['subcomments'][i] = result
                return comment
            }
        }
        return null
    }else{
        return null
    }
}

// async function organizeExports() {

//     const data = await getAllItems()
//         // {
//         //     "sampleUsers": sampleUsers,
//         //     "samplePostData": samplePostData,
//         //     "sampleWebsocketData": sampleWebsocketData
//         // }

//     // console.log(data)
//     module.exports = {data, processComment, addToUsers, addPost, addToWebsocket, getAllItems}

// }

// console.log('here')

// (async function testConnection() {
//   await client.connect();
//   await db.command({ ping: 1 });
// })().catch((ex) => {
//   console.log(`Unable to connect to database with ${url} because ${ex.message}`);
//   process.exit(1);
// });

// (async function testConnection() {
//     try {
//       // Connect with a timeout of 10 seconds
//       await Promise.race([
//         client.connect(),
//         new Promise((_, reject) => setTimeout(() => reject(new Error('Connection timeout')), 10000))
//       ]);
  
//       await db.command({ ping: 1 });
//       console.log('Connected to MongoDB');
//     } catch (ex) {
//       console.log(`Unable to connect to database with ${url} because ${ex.message}`);
//       process.exit(1);
//     } finally {
//       // Close the client
//       await client.close();
//     }
//   })();

  // Define async function to retrieve all items from the collection
async function getAllItems() {

    const client = new MongoClient(url);
    const db = client.db('app_data');
    const collectionName = 'app_data';

    let data = {}

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Access the database and collection
        const collection = db.collection(collectionName);

        const postData = await collection.findOne({ _id: new ObjectId(postDataId) });
        const userData = await collection.findOne({ _id: new ObjectId(userDataId) });
        const websocketData = await collection.findOne({ _id: new ObjectId(websocketDataId) });

        // console.log(postData)
        // console.log(userData)
        // console.log(websocketData)

        data = {
            "sampleUsers": {
                "userlist": sampleUsers
            },
            "samplePostData": {
                "posts": postData.posts
            },
            "sampleWebsocketData": {
                "data": websocketData.data
            }
        }

        // console.log(data)

        // // Retrieve all documents from the collection
        // const cursor = collection.find({});

        // // Iterate over the documents and log each one
        // await cursor.forEach(document => {
        //     console.log(document);
        // });

        // // Retrieve all documents from the collection
        // const cursor2 = collection.find({'660361f2fef954de8f3df06e'});

        // await cursor2.forEach(document => {
        //     console.log(document);
        // });

        console.log("All items retrieved successfully!");
    } catch (error) {
        console.error("Error retrieving items:", error);
    } finally {
        // Close the MongoDB connection
        await client.close();
        return data
    }
}

async function addToWebsocketDb(newString) {
    const client = new MongoClient(url);
    const db = client.db('app_data');
    const collectionName = 'app_data';

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Access the database and collection
        const collection = db.collection(collectionName);

        await collection.updateOne(
            { "_id": new ObjectId(websocketDataId) },
            { $push: { "data": newString } }
        );

        console.log('New string added successfully');

    } catch (error) {
        console.error('Error updating document:', error);
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
}

async function addPostDb(obj) {
    const client = new MongoClient(url);
    const db = client.db('app_data');
    const collectionName = 'app_data';

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Access the database and collection
        const collection = db.collection(collectionName);

        await collection.updateOne(
            { "_id": new ObjectId(postDataId) },
            { $push: { "posts": obj } }
        );

        console.log('New post added successfully');

    } catch (error) {
        console.error('Error updating document:', error);
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
}

async function addUserDb(obj) {
    const client = new MongoClient(url);
    const db = client.db('app_data');
    const collectionName = 'app_data';

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Access the database and collection
        const collection = db.collection(collectionName);

        await collection.updateOne(
            { "_id": new ObjectId(userDataId) },
            { $push: { "userlist": obj } }
        );

        console.log('New post added successfully');

    } catch (error) {
        console.error('Error updating document:', error);
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
}

async function updateUserAuthToken(username, newToken) {
    const client = new MongoClient(url);
    const db = client.db('app_data');
    const collectionName = 'app_data';

    try {
        // Connect to the MongoDB server
        await client.connect();

        const collection = db.collection(collectionName);

        // Find the document containing the userlist array
        const userData = await collection.findOne({ _id: new ObjectId(userDataId) });

        // Find the user with the specified username within the userlist array
        const user = userData.userlist.find(user => user.username === username);

        // Update the authToken for the found user
        if (user) {
            user.authToken = newToken;
        } else {
            console.error('User not found.');
            return;
        }

        // Update the document in the collection
        await collection.updateOne({ _id: userData._id }, { $set: { userlist: userData.userlist } })

    } catch (error) {
        console.error('Error updating user authToken:', error);
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
}

async function updatePostData(newPostData) {
    const client = new MongoClient(url);
    const db = client.db('app_data');
    const collectionName = 'app_data';

    try {
        await client.connect();

        const collection = db.collection(collectionName);

        await collection.updateOne(
            { _id: new ObjectId(postDataId) },
            { $set: newPostData }
        );

    } catch (error) {
        console.error('Error replacing document:', error);
    } finally {
        await client.close();
    }
}

async function updateUserData(newUserData) {
    const client = new MongoClient(url);
    const db = client.db('app_data');
    const collectionName = 'app_data';

    try {
        await client.connect();

        const collection = db.collection(collectionName);

        await collection.updateOne(
            { _id: new ObjectId(userDataId) },
            { $set: newUserData }
        );

    } catch (error) {
        console.error('Error replacing document:', error);
    } finally {
        await client.close();
    }
}

async function updateWebsocketData(newWebsocketData) {
    const client = new MongoClient(url);
    const db = client.db('app_data');
    const collectionName = 'app_data';

    try {
        await client.connect();

        const collection = db.collection(collectionName);

        await collection.updateOne(
            { _id: new ObjectId(websocketDataId) },
            { $set: newWebsocketData }
        );

    } catch (error) {
        console.error('Error replacing document:', error);
    } finally {
        await client.close();
    }
}

//Effectively resets the data in the db with the sample data
async function resetDb(){
    await updatePostData(samplePostData)
    await updateUserData(sampleUsers)
    await updateWebsocketData(sampleWebsocketData)
}

let samplePost={
    "user":"ya boy",
    "message":"bom dia",
    "id":"3",
    "comment_id":1,
    "comments": []
}

let sampleUser={
    
    "username":"bud",
    "password":"password",
    "zipcode":84003,
    "lat/long":"<latlong here>",
    "authToken":""
    
}


// Call the function to retrieve all items
// getAllItems();
// organizeExports();
module.exports = {processComment, addToUsers, addPost, addToWebsocket, getAllItems, updateUserAuthToken}

//db actions needed -
//get all items✅
//Add user to db✅
//modify user in db(authToken)✅
//Addwebsocket data,✅
//Add post✅
//Add comment

// updatePostData(samplePostData)

resetDb()