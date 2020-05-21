
# LAVIKA 



## Description

LAVIKA is an app that lets you create music and visuals through a canvas. Shapes, sounds and canvas settings all render in real time across your screen. This all comes with a little twist, a lyric with absolutely no sense which you can sing along to and record your beautifully produced song.



## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start the experience.
-  **Login:** As a user I can login to the platform so that I can start the experience.
-  **Logout:** As a user I can logout from the platform so no one else can use it.
-  **Create music** As a user I can create music clicking on the canvas.
-  **Create visuals** As a user I can create visuals which respond to microphone amplitude.
-  **Get a random lyric** As a user I can get a random lyric so I can sing along
-  **Record my song** As a user I can record my music, as-well as my voice singing along.
-  **Save my song** As a user I can save my song in my profile, as-well as downloading it.
-  **Edit Profile** As a user I can access and edit my profile
-  **View Generated music** As a user I want to see my music displayed in my profile
-  **Enter Community** As a user I can enter the community, where other people's work can and will be shared.




## Backlog

- Record and save a complete Scene (song, voice and visuals)
- Have at least three different canvas experiences, with different sounds and styling.
- Have more options of sounds
- Like other people's work


<br>


# Client / Frontend

## React Router Routes (React App)
| Path         | Component     | Permissions                | Behavior                                                     |
| ------------ | ------------- | -------------------------- | ------------------------------------------------------------ |
| `/`          | MainPage      | public `<Route>`           | Main Page                                                    |
| `/login`     | LoginPage     | anon only `<PublicRoute>`  | Login form, link to signup, navigate to about after login    |
| `/signup`    | SignupPage    | anon only  `<PublicRoute>` | Signup form, link to login, navigate to about after signup   |
| `/about`     | AboutPage     | user only `<PrivateRoute>` | Displays a brief story about the experience with some instructions. Button redirects to XP |
| `/xp`        | XP            | user only `<PrivateRoute>` | Main experience displays canvases and knobs, as-well as buttons for functionality |
| `/profile`   | ProfilePage   | user only `<PrivateRoute>` | Displays user's profile page, with saved pieces, profile picture, username and email |
| `/community` | CommunityPage | user only `<PrivateRoute>` | Display all users' songs                                     |


## Page Components

- LoginPage
- SignUpPage
- AboutPage
- XP
- MainPage
- CommunityPage
- ProfilePage

## Components

- Navbar

- EachPiece




## Services

<br>


# Server / Backend


## Models

User model

```javascript
{
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  imgPath: {type: String, required: true, unique: true},
  songs: [{type: Schema.Types.ObjectId, ref:'Song'}]
}
```



Song model

```javascript
 {
   name: {type: String, required: true},
   description: {type: String},
   urlPath: {type: String}
 }
```


<br>


## API Endpoints (backend routes)

| HTTP Method | URL            | Request Body                | Success status | Error Status | Description                                                  |
| ----------- | -------------- | --------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| POST        | `/auth/signup` | {username, email, password} | 201            | 404          | Checks if fields not empty  ( else 400) and if user not exists (else 400), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`  | {username, password}        | 200            | 401          | Checks if fields not empty (else 400), if user exists (else 400), and if password matches (else 401), then stores user in session. |
| GET         | `/auth/logout` |                             | 204            | 404          | Logs out the user. And destroys the session.                 |
| GET         | `/users`       |                             | 200            | 404          | Check if user is logged in and returns current user data.    |
| PUT         | `/users`       | {username, email, imgPath}        | 200            | 400          | Edits profile                                                |
| POST        | `/scenes`      | {name} + formData           | 201            |              | Receives a file, uploads to cloudinary and creates a new song document. |
| DELETE      | `/scenes/:id`  |                             | 200            | 400          | Deletes a song by its ID and updates current user's songs.   |
| GET         | `/scenes`      |                             | 200            | 400          | Shows all the songs created by the community.                |
<br>


## Links

### Trello/Kanban

[LAVIKA - Trello](https://trello.com/b/Eok4Byw8/lavika) 

### Git

[LAVIKA - Client](https://github.com/yolaresofia/LAVIKA-front)

[LAVIKA - Server](https://github.com/yolaresofia/LAVIKA-back)

[LAVIKA - Deployed](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)