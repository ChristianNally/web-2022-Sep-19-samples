# W05D05 - Mid-term Project Kickoff

### Learning outcomes
* pain and suffering
* working as a group
* practice with collab
* communication
* practice skills
* git/github practice
* apply what we've learned

### Pick a Project

### User Stories
* how a user will interact with our app
* As a _____, I can _____, because _______

* As a logged-in user, I can see a list of maps of my local area, because I'm interested in things around me
* As a hungry logged-in user, I can see the menu from a local restaurant, because I'm hungry

planning/user-stories.md

### Nouns === Resources
* resources are tables
* create the ERD

planning/ERD.png

### Routes
* how can people access the data
* http routes
* RESTful routes
* resources are plural
* actions are singular

GET /all-users-in-the-db
POST /create-a-new-user

Login   POST  /login
Register POST /register

Browse  GET   /users
Read    GET   /users/:id
Edit    POST  /users/:id
Add     POST  /users
Delete  POST  /users/:id/delete

planning/routes.md

### What are we building?
* MVP
* Minimum Viable Product
* @KV Minimum Viable Demo
* what is the min set of features we can demo in 5 mins

### Login
* please don't do login/register

```js
// http://localhost:3000/login/5

app.get('/login/:userId', (req, res) => {
  // set a plain-text cookie
  res.cookie('user_id', req.params.userId);

  // set an encrypted cookie
  req.cookies.user_id = req.params.userId;

  // send the user somewhere
  res.redirect('/home');
});
```

### Wireframes/Mockups
* what is the website going to look like
* we are not a design school

planning/home-page.png

### Tech Choices
* Back end: Node, postgres, express
* Front end: HTML, CSS, JS, jQuery, css library (bootstrap)

### Splitting up the work
* Vertical - each team member is working on a separate piece of the stack
* Horizontal - each team member is working on the same layer
* Pair programming

### Coding on Main/Master
* beyond initial setup please don't
* use branches
* are you merging locally (git merge my-branch) or in the cloud (git push origin my-branch / pull request)

### Communication
* please communicate




