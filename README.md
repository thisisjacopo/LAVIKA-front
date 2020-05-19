NSRVK
Non-Sense-Randrum-Visual-Karaoke
cause we suck at naming stuff

Description
NSRVK is an app that lets you create music and visuals through a canvas. Shapes, sounds and canvas settings all render in real time across your screen. This all comes with a little twist, a lyric with absolutely no sense which you can sing along to and record your beautifully produced song.

User Stories
* 404 
* mainpage -  Animation.
* XP - Main functionality of the project, canvas and knobs (sliders and a button to record) and a button to save the song
* sign up - Signup 
* login - Login
* logout - logout for security.
* about - about the app
​
Backlog
* Record the visuals together with the songs
* Make more than one option of visual
* Create a community to share songs between users
​
User profile:
​
* see profile
* upload profile picture
* update profile info
* list of songs
​


ROUTES:
​
* GET /main 
    * renders the main page
* GET /home
    * renders the homepage
    * button redirects to sign-up
    * button redirects to log-in
* GET /about
    * renders about
* GET /xp
    * renders the main feature: canvas and knobs
* POST /xp
    * adds a song to the profile
* GET /auth/signup
    * renders the signup form
* POST /auth/signup
    * does not display if user is logged in
    * body:
        * username
        * email
        * password
* GET /auth/login
    * renders the login form
* POST /auth/login
    * does not display if user is logged in
    * body:
        * email
        * password
* GET /auth/logout
        * destroy session
* GET /profile
    * displays profile and songs
* GET /personal/edit
    * renders edit page
* POST /personal/edit
    * redirects to / if user is anonymous
    * body:
        * username
        * profile picture
        * email
        * Songs

User model
​
username: String,
email: String,
password: String,
imgName: String,
imgPath: String,
songs: [{type: Schema.Types.ObjectId, ref: 'Song'}]
​
​
Songs model
​
name: String,
description: String,
urlPath:String
​


Github
https://github.com/yolaresofia/randrum


Trello
https://trello.com/b/Eok4Byw8/novika
