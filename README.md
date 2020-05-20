~~~markdown
# LAVIKA - `README.md` 
​
<br>
​
## Description
​
LAVIKA is an app that lets you create music and visuals through a canvas. Shapes, sounds and canvas settings all render in real time across your screen. This all comes with a little twist, a lyric with absolutely no sense which you can sing along to and record your beautifully produced song.
​
​
​
## User Stories
​
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
​
​
​
​
## Backlog
​
- Record and save a complete Scene (song, voice and visuals)
- Have at least three different canvas experiences, with different sounds and styling.
- Have more options of sounds
- Like other people's work
​
​
<br>
​
​
# Client / Frontend
​
## React Router Routes (React App)
| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | MainPage           | public `<Route>`      | Main Page                                      | 
| `/login`             | LoginPage            | anon only `<AnonRoute>`  | Login form, link to signup, navigate to about after login |
| `/signup`            | SignupPage           | anon only  `<AnonRoute>`   | Signup form, link to login, navigate to about after signup |
| `/logout`            | n/a                  | user only `<PrivateRoute>`  | Navigate to MainPage after logout, expire session            |
| `/about`            | About   | user only `<PrivateRoute>`  | Displays a brief story about the experience with some instructions. Button redirects to XP                              |
| `/xp`        | XP   | user only `<PrivateRoute>`  | Main experience displays canvases and knobs,I as-well as buttons for functionality                                           |
| `/xp/save`        | XP   | user only `<PrivateRoute>`  | Save piece to be displayed in profile.                                           |
| `/profile`         | Profile                  | user only `<PrivateRoute>`  | Displays user's profile page, with saved pieces, profile picture, username and email                                             |
| `/community` | CommunityPage      | user only `<PrivateRoute>`  | Display all user's pieces                               |
​
​
## Components
​
- LoginPage
​
- SignUpPage
​
- AboutPage
​
- CanvasKnobsLyrics
​
- Navbar
​
- MainAnimation
​
- CommunityPage
​
- EachPiece
​
​
 
​
## Services


<br>
​
​
# Server / Backend
​
​
## Models
​
User model
​
```javascript
{
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  imgName: {type: String, required: true, unique: true},
  imgPath: {type: String, required: true, unique: true},
  songs: [{type: Schema.Types.ObjectId, ref:'Song'}]
}
```
​
​
​
Song model
​
```javascript
 {
   name: {type: String, required: true},
   description: {type: String},
   urlPath: {type: String}
 }
```
​
​
<br>
​
​
## API Endpoints (backend routes)
​
| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `           | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session. |
| GET        | `/auth/logout`                 |                            | 204            | 404          | Logs out the user.
| GET         | `/auth/about`                      |                             | 400          | Show about and instructions page.                                       |
| GET         | `/auth/profile`                    |                             |  200                | 404          | Show current session user profile picture and specific data.                                         |
| POST        | `/auth/xp`                         | {name,urlPath}                | 201            | Create and save a new Song.                            |
| PUT         | `/auth/profile/edit/`       | {name,imgPath,songs}           | 200            | 400          | Edits profile                                              |
                                           |
| GET         | `/auth/Community`                    |                              |                | 400          | show all the songs created by the community.                                                 |
                                                   |
​
​
<br>
​
​
## Links
​
### Trello/Kanban
​
[LAVIKA - Trello](https://trello.com/b/Eok4Byw8/lavika) 
​
### Git
​
[LAVIKA - Client](https://github.com/yolaresofia/LAVIKA-front)
​
[LAVIKA - Server](https://github.com/yolaresofia/LAVIKA-back)
​
[LAVIKA - Deployed](http://heroku.com)
​
### Slides
​
The url to your presentation slides
​
[Slides Link](http://slides.com)
