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
