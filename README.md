# rencher-startup
Startup site to practice web development


Here is the link to my exam notes:
https://github.com/rencherg/startup/blob/main/notes.md

# Startup Specifications

# Easy to Read Forum

## Elevator Pitch

There are many popular forums and message boards these days, but the problem that almost all of them have is that it's relatively hard to see all of the content without excessive scrolling or clicking. In the forum that I will build, all of the content relative to the discussion will be relatively easy to view. All posts and comments will be organized nicely. You should really think about investing in this forum because it will change the world!

## Key Features

* Ability to post a message and comment on the posts of other people.
* All comments will be sorted by which comment or post they are responding to and then by date
* All comments are shown in a compact, yet organized space, making it easier to read what is going on.
* A table showing the most recent comments in real time
* An easy to use way to login to the site.
* Ability to register with your current location and see the weather for your current location each time you login.

## How will all technologies be used?

* **HTML** - Gives clear structure and organization to the way the site and the comments are laid out.

* **CSS** - Gives an aesthetically pleasing look to the site, using a consistent color scheme and style across the entire site.

* **Javascript** - Gives the ability to login and make calls to the backend to get post and comment info.

* **Service** - A geolocation service will be used to get the latitude and longitude from the user's current city and then a weather service will use the lat and long coordinates to get the weather for the current user.

* **React** - React will give a stylish look to the site to attract users and better display info

* **Authentication** - All users must create an account. To post or comment users will be required to log in to the account they created. The authentication service will be used to manage accounts.

* **Database Data** - All information about posts and comments will be stored in the database. Everytime a post is viewed, the post content along with all comments will be loaded from the database.

* **Websocket Data** - The websocket data will be used to show a live comment page where all recent posts and comments will be shown in real time.

## Demo Sketches
![IMG_1279](https://github.com/rencherg/startup/assets/67397048/c601bacc-9f1d-43a2-b4a4-7ebc03ef6ef9)
1. Simple login page
![IMG_1278](https://github.com/rencherg/startup/assets/67397048/ca8b52b5-a338-4ba2-8ad7-46cd992d37d8)
2. Main post and all comments can be easily viewed
![IMG_1277](https://github.com/rencherg/startup/assets/67397048/099598a1-f457-44ce-8e91-90ca0159580e)
3. Live message Board

## HTML deliverable

For this deliverable the basic HTML DOM was built

- **HTML pages** - HTML pages for login, signup, about, viewing a post, recent comments(websocket), and all recent posts.
- **Links** - The navbar contains links to login, index, about, signup. The footer contains a link to my github
- **Images** - Images of Morpheus from the movie the Matrix and a picture of the Federalist papers are included
- **DB/Login** - The db data is used to show all recent posts, comments
- **WebSocket** - The websocket data is used to show all recent comments in real time

## CSS deliverable

For this deliverable the application was given a good looking and uniform style

- **Header, footer, and main content body**
- **Navbar** - All navbar elements were put in a uniform row at the top. Some are floated to the left and others to the right. The links change color when hovered over and do not have underlines. There is a sun icon on the right side that will be used for the weather service call.
- **Responsive to window resizing** - App looks good down to a width of 400px. This is much less than almost all device types.
- **Application elements** - Aesthetically pleasing use of white space. The content is not cluttered and is easy to read.
- **Application text content** - Sans-serif font and consistent colors were used.
- **Application images** - Images were given a border radius and were centered in the middle of the screen horizontally.

## JS Deliverable

- **User Input** - Users are allowed to post and comment on any other post in an easy to view way. The data is saved in localstorage
- **Login** - Javascript is used to login, signup, logout, and display the username when logged in
- **DB** - Mock database data is used to register, login and view posts
- **localstorage** - localstorage API is used to keep track of user data, session data, and post data
- **Websocket** - Websocket data is mocked using javascript

## Web Services Deliverable

- **User Input** - Users are allowed to post and comment on any other post in an easy to view way. The data is saved in localstorage and is stored and retrieved using the backend endpoints
- **Login** - Javascript is used to login, signup, logout, and display the username when logged in
- **DB** - Mock database data is used to register, login and view posts. The mock data comes from the backend and a dao file has already been created
- **Websocket** - Websocket data is mocked using javascript and is stored in the backend
- **HTTP Service** - A functional node.js express service was created
- **Middleware** - Frontend resources are served using static middleware
- **3rd Part Service** - Third party endpoint is used to display the temperature at the user's current location
- **Endpoints** - Backend provides service endpoints and frontend calls them

## Login Deliverable

- **User Registration** - Users are allowed to register using a username, password and zip code. Credentials are stored in the database and the password is encrypted. An auth token is returned as a cookie.
- **Existing User Authentication** - Users can login using their username and password. After the initial login an authtoken is returned as a cookie and is used to authenticate
- **Application Data Storage** - All application data like posts, comments, and user data is stored in the MongoDB database.
- **Application Credential Storage** - User credentials are stored in the database after registration and are used to login, authenticate, and return zip code data
- **Funcionality Restriction** - Only logged in users are allowed to make new posts however anyone can comment. Auth tokens are checked on the front and backend to prevent hacking.

To login go to the login page and use the following information for testing

## Websocket Deliverable

- **Backend Listens for Websocket Connection** - Backend waits for the frontend to make the connection
- **Frontend Makes Websocket Connection** - Websocket connection is made by the frontend
- **Websocket Data Retrieval** - Whenever any comment is made to any post, the comment is sent over websocket
- **Websocket Data Display** - Websocket data is displayed on its own page


- **Tip for Testing the Application Websocket** - Open one tab to the websocket page and another on any post. Start commenting on the post(You don't need to be logged in to comment) and you should see your comments start to appear on the websocket page.

- ## React Deliverable

- **Bundled using Vite** - Vite is used to bundle the application
- **Multiple functional react components** - All files that were HTML are now react components
- **React router** - React Router and Navlinks are used to display the different components
- **React hooks** - Multiple React hooks are used throughout the application (If you are looking for some hooks in the code some can be found in /src/login, /src/hooks, /src/new-post)

- Note: In previous deliverables the comments of a post had indents marking which comments were replying to which but in this deliverable that was changed to a more traditional list of comments without intents. Commenting and posting still function normally though.

To login go to the login page and use the following information for testing

username: test
password: test

Or you can create your own temporary account at the register page

If you register for a new account make sure to put in a valid zip code so that the temperature at your location can be shown

When you view a post go into the post and click on any comment or the post itself and then make your comment. You need to be logged in to post but not to comment.
