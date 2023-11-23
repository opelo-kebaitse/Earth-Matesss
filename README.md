🌎 EarthMates 🌎

The focus of this app is to practice using the Full Stack we teach, (with auth in place) in a large scale app.

The idea of the app is to create a site for Earth Friendly Events, to post their events so people can join them, and to view the events as a user (MVP version)

## The Tech

A Boilerplate is already set up for you with everything you will need to get started. This boilerplate is set up to use:

* [React](https://reactjs.org/docs/getting-started.html)
* [React Query](https://tanstack.com/query/v3/docs/react/overview)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js](https://knexjs.org/)
* [Auth0](https://www.auth0.com)

## User Stories

### MVP

As a non-registered user:
<!-- Am I supposed to be logged in do this? When I click Regiter in the main page, and try and fill out the First Name, I can't. So IF the idea is I can't register unless I'm logged in, then I'd set a conditional so that the Register button can only be seen after log in.  
Additionally, why do I need to register once I'm logged in? The interface is just confusing.
-->
* I want to register for the App under my name
* I want to browse a list of all the events posted by other users
* I want to click into an event and view the details
<!-- Looks like the two points below are not yet implemented? -->
* I want to sort the places by date
* Filter events by location

As a registered user:
<!-- I don't see a listing of my events-->
* I want to save reviews to the 'myevents' component so I can remember my events too!
* I want to view my joined events in the 'myevents' component
* Be able to post about an event
<!-- I THINK I'm able to join an event, but I get no feedback after clicking join -->
* Be able to register or join an event 
* As a user I want to save my event and view them on the 'myevents'

### Stretch

As a registered user:
* Badges for users per events attended (every time you go to an event you get 'points' added to your profile, level up)
* Community Forum - blog/ reviews page

## Components (Client Side)
| name | purpose |
| --- | --- |
| Login | View for user to enter their login credentials |
| Register | View for user to sign up |
| Home | Welcome users and link to reviews |

## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |

## DB (Server Side) -

## Authentication

Authentication is already set up in the client side of this project using Auth0. Users are currently able to login and logout.
When you wish to protect your server side routes (those for registered users only), you may need to reference other exercises or materials.
If you wish to replace the Auth0 authentication with your own, so you can customise the login for example, you will need to update the `client/index.tsx` file of the project with your own Auth0 details.

## Setup

Run the following commands in your terminal:

```sh
npm install
npm run dev
```

To run before merging:
```sh
npm run lint
npm run format
npm run test
```
