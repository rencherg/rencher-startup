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


1/19

Starting ec2 server

Login to aws -> ec2 -> Instances -> change region to virginia -> launch instance -> give a name -> give image id(found on class site) -> community AMI -> choose instance size(preferred t3 nano) -> advanced details -> credit specification -> unlimited -> download key pair -> PROTECT IT -> work out bugs and launch

Hostnames

Go to route 53 -> buy a domain -> RESPOND TO THE EMAIL WITHIN 30 DAYS -> 

1/22

In Caddyfile change urls to correct things

url.com

startup.url.com

simon.domain.com

You must have a trusted 3rd party to provide a secure https connection

After that do 

sudo service caddy restart

1/24

Use Live Server and GitLens VSCode extensions




1/26

HTML

<html lang=”en”>

<head>
Inside the body
</head>

<body>
Inside the body
</body>

</html>

Anchor tag:

Relative reference
<a href=”image.png” /> <- the last slash is a shorthand tag closure

Absolute reference
<a href =”link.com” />

1/31
If you want to put the css directly in the html file one way to do it is to put it inside a style tag in the  head tag

Ex 
<head>
<style>
…
</style>
</head>

Style inside the actual html tag itself takes precedence over style in the style tag.

After the style in the actual html tag whichever was declared last(style tag or css file) takes precedence.


::before or ::after in css can insert text into an html tag from css


2/2

Disify.com
Free email validator api

Animation example in pictures

2/5

Block - takes up the entire space give
Inline - only takes up the space that is needed

Flex box - Only modifies the children of the current tag/class. Does not modify the tag itself nor its Grandchildren.

2/7

Align-items:center;
Justify-content:center; 
Aligns perfectly in the middle

2/9
JavaScript
No different between double and single quotes in js

.forEach() javascript iteration through array

How to reference js in html code

Add a script tag in the head that references the index.js file

Script tag in body where you actually write a function in the html
Onclick attribute = “function()”


Manual breakpoints can be added in JS using debugger;

2/12
In JS comparing two objects will return false most of the time even when the members are the same. This is because JS compares object references instead of the objects themselves.

Conditionals
False = false 0, -0, ‘’, NaN, null, undefined
True = !False
Functions are primitive types in JS, like numbers, bool.

Functions can be defined inside functions - This is done to keep code that is only relevant to a function not visible to anything else.

Anonymous functions;


Let f = function(i) {
	Return i;
}

Let d = f;

d(7);

Function can be passed to different variables and called as needed

Optional parameters

Let f = function(i, r = ‘rat’) {
	Return i;
}

If r is not passed into the call r will just be ‘rat’

Arrow functions

Const arrowWithBlock = (a) =>{
	Return a;
}

arrowWithBlock is assigned to an anonymous function with a as the parameter. It’s just another way to declare an anonymous function.


2/14

for(let iterator of array):

For each JS

.forEach function is awesome

Does one operation on each element of the array

Nullish operator
Y ??= 3;

Will only assign 3 to y if y is null. If Y is already assigned then y will not be changed

…(spread operator)

Ex you can inject the contents of one array/json object into another


…(variadic operator)

You can specify a parameter that represents an array of any number of parameters

2/21
JS when you use await you need to return a promise

2/26
Port 443 is the default port for every service on the computer. Other internal ports should not be exposed to avoid security vulnerabilities.

Gateway service uses port 443 and calls other internal only ports and returns the information. A black box is effectively created. Only the gateway service is visible to the outside.

3 services are currently running on our servers - Welcome to cs260 page, simon page, and startup page.

TLD (originals: .com, .org, .edu., gov, .mil, .int., net)

All 7 have origins in the US military

Localhost (127.0.0.1)
