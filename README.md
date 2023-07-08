# Task Monkey - Productivity App

Developer: Mark Daniel

![Mockup image](***)

[View live website](***)

## Table of Contents

0. [About](#about)

1. [Project Goals](#project-goals)

   1. [User Goals](#user-goals)

2. [User Experience](#user-experience)

   1. [Target Audience](#target-audience)
   2. [User Requirements and Expectations](#user-requirements-and-expectations)
   3. [User Stories](#user-stories)
   4. [Site Owner Stories](#site-owner-stories)

3. [Wireframes](#wireframes)

4. [Technologies Used](#technologies-used)

   1. [Languages](#languages)
   2. [Libraries, frameworks and dependencies](#libraries-frameworks-and-dependencies)
   3. [Tools & Programs](#tools--programs)

5. [Agile Design](#agile-design)

6. [Design](#design)

   1. [Colors](#colours)
   2. [Fonts](#fonts)

7. [Project Structure](#project-structure)

   1. [Front End](#front-end)
   2. [Back End API](#back-end-api)

8. [Features](#features)

   1. [Implemented Features](#implemented-features)
   2. [Features to be Implemented](#features-to-be-implemented)

9. [Validation](#validation)

   1. [CSS](#css)
   2. [Html](#html)
   3. [Lighthouse](#lighthouse)
   4. [ESLint](#eslint-validation)

10. [Testing](#testing)

11. [Deployment](#deployment)

    1. [Deploying in Heroku](#deploying-the-website-in-heroko)
    2. [Forking of Github repo](#forking-the-github-repository)
    3. [Cloning the Github repo](#cloning-the-repository-in-github)

12. [Credits](#credits)

    1. [Image](#images)
    2. [Code](#code)

13. [Thank You](#thank-you)

# About

***

---

## Project Goals



### User Goals


## User Experience

### Target Audience


### User Requirements and Expectations



### User stories



### Site Owner Stories



## Wireframes


## Technologies Used

### Languages

- HTML
- CSS
- Javascript
  - React 

### Libraries, frameworks and dependencies

- [Axios](https://axios-http.com/docs/intro) - axios were used for promise-based HTTP. Justification: I used axios to send API requests from the React project to the API and avoid any CORS errors when sending cookies.
- [ClassNames](https://www.npmjs.com/package/classnames/) - JavaScript utility for conditionally joining classNames together, used in the FeedbackMsg component. This is used to apply the styles dynamically based on the type of style and apply more than one style to elements in FeedbackMsg component
- [JWT](https://jwt.io/) - library to decode out JSON Web token. Justification: I used JWT to prevent unauthenticated user from making extra network requests to refresh their access token. Also used to remove the timestamp from the browser when the user refreshes token expires or the user logs out.
- [React 17](https://17.reactjs.org/) - JavaScript library for building user interfaces
- [React-Bootstrap 4.6](https://react-bootstrap-v4.netlify.app/) - Justification: I used Bootstrap React library for UI components, styling and responsiveness.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - Justification: I used this component to load content (posts/comments) automatically as the user scrolls towards the bottom of the page without having to jump to next/previous page.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - used for dynamic routing. Justification: I used this library to enable the navigation among views of various components and control what the user sees depending on the URL they have accessed in the browser.
- [Prettier](https://prettier.io/): This extension was used to format code for all files

### Tools & Programs

- [Am I Responsive](http://ami.responsivedesign.is/) was used to create the multi-device mock-up at the top of this README.md file
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) was used for debugging of the code and checking site for responsiveness
- [Cloudinary](https://cloudinary.com/) to store static files
- [Favicon.io](https://favicon.io) for making the site favicon
- [Font Awesome](https://fontawesome.com/) - Icons from Font Awesome were used throughout the site
- [Google Fonts](https://fonts.google.com/) - import of font for the website
- [CodeAnyWhere](https://app.codeanywhere.com/) was IDE used for writing code and to push the code to GitHub
- [GitHub](https://github.com/) was used as a remote repository to store project code
- Validation:
  - [WC3 Validator](https://validator.w3.org/) was used to validate the html
  - [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) was used to validate the css
  - [ESLint](https://eslint.org/) used to validate JSX code
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse/) used to validate performance, accessibility, best practice and SEO of the app

##### Back to [top](#table-of-contents)

## Agile design

### About

- Agile development is the most effective way to development of any website
- This was able to do basic development of website using user story template

### User Story Template

- Using Github issues first I created the template for a user story that was later used to create user stories. I created three labels: must have, could have, should have.


### Kanban Board

- As a visual representation of the project's status, showing what tasks are to be done, in progress and completed.Each task is represented as a card on the board, and the cards can be moved from one column to another to show progress.


## Design

### Colours



### Fonts



## Project Structure

### Front-End

#### React

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Its primary goal is to make it easy to reason about an interface and its state at any point in time, by dividing the UI into a collection of independent and reusable components ([source](https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/)).

I used React for this application for several reasons:

- Speed - applying React significantly increases the page loading speed and reducing the wait, which affects user experience and satisfaction
- Flexibility - the React code is easier to maintain and is flexible due to its modular structure, compared to other front-end frameworks
- React Bootstrap - excellent choice for improving user experience, used for styling and responsiveness. It comes with ready-to-use React built components. They are implemented with accessibility in mind, which is a vital factor when creating a front-end application.
- Reusability of components - no need to write various codes for the same features

There were various components created and reused across this application.

- `<Asset />` - multi purpose component, used to display a range of items due to being passed props.

  - Those include a loading spinner from React Bootstrap, image with source and alt attribute or a message consisting of a paragraph.


- `<Avatar />` - resuable component, used to display the relevant user profile picture.

  - This component uses props which can specify the source of the image and also its size
  - This components was used in profile avatar, event owner, comment create form and comments posted


- `<DropDowns />` - resuable component, used to display the three dots option button based on the required rights of the user.

  - This was used for user who are authorised to make changes. For example, for user to edit and delete their own comments and user to edit their profile, change their username and password.


- `<Feedback />` - resuable component, used to display feedback messages.

  - This component was used in when user edit and delete their comments successfully
  - This component is also displayed when user deletes his events posted

- `<NavBar />` - resuable component, used for easy navigation of the site.

  - This component is reusable as it will display different icons based on a users logged in status.
  - If no user is logged in a log in, sign up and contact icon will be available however if a user is currently logged in, the full range of icons will be available apart from log in.


- `<PageNotFound />` - specific component, used to display a 404 page made up of an image file and return home button for when the page does not exist.


There were various pages created and used in this application

- auth - The auth page group consisted of the following files:

  - SignInForm.js - This file handles the Login form
  - SignUpForm.js - This file handles the Sign up form

- comments - The comments page group consisted of the following files:

  - Comment.js - This file returns the comments
  - CommentEditForm.js - This file handles the comment edit form
  - CommentCreateForm.js - This file handles the create comment form


- profiles - The profiles page group consisted of the following files:

  - Profile.js - This file returns the profile section
  - ProfilePage.js - This file returns the entire Profile page
  - PopularProfiles.js - This file returns the users of the site as per the events count they posted
  - ProfileContactDetails.js - This file returns the contact details of the user's profile
  - ProfileEditForm.js - This file handles the profile edit form
  - UsernameForm.js - This file handles the username change form
  - UserPasswordForm.js - This file handles the password change form

### Back-End API

#### Django REST Framework

The API for this Front-End application was built with the Django REST Framework. The repository with a README file for the DRF Back-End can be found [here](***).

##### Back to [top](#table-of-contents)

## Features

### Implemented Features

#### Navigation(Navbar)

- Navbar consists of Logo image and is displayed in all pages for easy navigation of website
- Navbar consists of name of website which is displayed in larger device
- Logo and website name both are links for home page
- Navbar consists of a links to a signin page and signup page for logged out users
- Authenticated/Signed in user can see additional icons as follows:
  - Add event: It opens the event create form page
  - Feed: It shows the events posted of all users whom the logged in user has followed
  - Interested: It shows the events user has shown interest into
  - Logout: This is used for user to logout
  - Profile: This shows the user avatar and opens the user's profile page
- Feature is fully responsive and on smaller screen sizes it coverts into a 'Hamburger menu'



#### Sign Up Page

- This page consists of sign up form for user to create new account
- New users can access this page by clicked on SignUp link on Navbar



#### Sign In Page

- This page consists of sign in form for existing user to signin using their credentials
- Users can access this page by clicking on SignIn link on Navbar

#### HomePage



##### Active Profiles (Our Top Users)





##### Search form and filters

- This component is provided for user to search all events easily by their title, date, category and sub-category.
- User can also type other user's name and see all events posted by them
- This component has a search bar for user to type and search and also filter buttons for categories and sub-categories for better user interaction
- User Stories covered: 27

<details><summary>See Search form and filters Section</summary>

![Search form and filters](docs/readme/search-filters.png)

</details>


#### Profile Page

- This page consists the detail of user including their bio, following and followers counts and events posted by that user
- User can access other's profile by clicking on avatar of other users
- Logged in user can access this page by clicking on their avatar image in Navbar
- User Stories covered: 17


#### Profile Edit Page

- This page consists of profile form where loggedin user can update their profile data
- Profile owner can access this page by clicking on edit profile in their profile page
- After successful update user is displayed successful message
- User Stories covered: 18

<details><summary>See Profile Edit Page</summary>


</details>

#### Change Username Page

- This page consists of username change form where loggedin user can update their username
- Profile owner can access this page by clicking on change username in their profile page
- After successful update user is displayed successful message
- User Stories covered: 19

<details><summary>See Change Username Page</summary>

![Change username Page](docs/readme/usernamedit.png)
![Change username success Modal](docs/readme/username-success.png)

</details>

#### Change Password Page

- This page consists of username change form where loggedin user can update their password
- Profile owner can access this page by clicking on change password in their profile page
- After successful update user is displayed successful message
- User Stories covered: 20

<details><summary>See Change Password Page</summary>

![Change Password Page](docs/readme/passwordediit.png)
![Change password success Modal](docs/readme/password-success.png)

</details>

#### Not Found



### Features to be Implemented



## Validation

### CSS

- [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/)was used to validate the css in the project.
- Validator with no errors.
- The deployed app was passed as url input for validation


### Html

- [WC3 Validator](https://validator.w3.org/) was used to validate the html in the project
- The deployed app was passed as url input for validation
- No errors were found

### Lighthouse

- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) for performance, accessibility, progressive web apps, SEO analysis of the project code here are the results:


### ESLint Validation

- The JSX code was validated using the ESLint utility.
- The library was preinstalled in Codeanywhere IDE
- The code was getting validated so the errors were corrected during development process
- The library was also installed later using [ESLint website](https://eslint.org/) for final validation
- Few errors were shown which has been documented in Bug and fixes in TESTING.md
- No errors remained before final submission


## Testing



## Deployment

### Deploying the website in Heroko

- Before deploying in Heroku following file was created:
- Procfile : Very important for deployment and must be added with capital P

<details><summary>See Image</summary>

![Procfile](docs/readme/procfile.png)

</details>
  
- The website was deployed to Heroko using following steps:

#### Login or create an account at Heroku

- Make an account in Heroko and login

#### Creating an app

- Create new app in the top right of the screen and add an app name.
- Select region
- Then click "create app".


#### Open settings Tab

##### Click on config var

- No key or value was added as it is already connected to API


##### Add Buildpacks

- Add python buildpack first
- Add Nodejs buildpack after that

#### Open Deploy Tab

##### Choose deployment method

- Connect GITHUB
- Login if prompted


##### Connect to Github

- Choose repositories you want to connect
- Click "Connect"



##### Automatic and Manual deploy

- Choose a method to deploy
- After Deploy is clicked it will install various file


##### Deployment

- Project was deployed in Heroku



### Forking the GitHub Repository

1. Go to the GitHub repository
2. Click on Fork button in top right corner
3. You will then have a copy of the repository in your own GitHub account.
4. [GitHub Repository](https://github.com/Sinha5714/humanitas-events-pp5)

### Cloning the repository in GitHub

1. Visit the GitHub page of the website's repository
2. Click the “Clone” button on top of the page
3. Click on “HTTPS”
4. Click on the copy button next to the link to copy it
5. Open your IDE
6. Type `git clone <copied URL>` into the terminal

## Credits

### Images


### Code

- The code was written with the help of Code Institute walkthrough project [Moments](https://github.com/Code-Institute-Solutions/moments)



## Thank You


- to Code Institute and Slack community for helping me when I was getting stuck with some challenges.