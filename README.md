# 🐶 Pickle's Picks 🐶

## Sprint 7 Large group project

The focus of this app is to practice using the Full Stack we teach, (with auth in place) in a large scale app.

The idea of the app is to create a blog style site for [Pickle the dog](https://www.instagram.com/pickleapproves/) to post about places they have eaten at and review them, and for people who follow Pickle to be able to save places for them to eat at later.

As she grows in popularity, Pickle hopes to make the world a more dog-friendly place! Not just dog-tolerant.

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
* I want to register for the App under my name
* I want to browse a list of all the places Pickle has reviewed
* I want to read an individual review from Pickle and see any other details about it
* I want to sort the places by Pickle's rating

As a registered user:
* I want to save reviews to a "Wishlist" so I can eat at that place too!
* I want to view my saved Wishlist

### Stretch

As a registered user:
* I want to add my own rating to the places Pickle has reviewed.
* I want to add my own comment/review beneath Pickle's review so I can share my experience.
* I want to see other user's reviews of the same place when viewing a review from Pickle.
* I want to browse the places Pickle has reviewed on a map.

As Pickle:
* I want a form only I, Pickle, can access so I can upload a new review.

  ---

## Components (Client Side)
| name | purpose |
| --- | --- |
| Login | View for user to enter their login credentials |
| Register | View for user to sign up |
| Home | Welcome users and link to reviews |
| Review | View a Pickle review of an individual place |
| ReviewList | View the reviews Pickle has made |
| SavedList | View places/reviews saved by the user |
| ReviewMap | View the places reviewed on a map (Stretch) |


## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |
| Get | /api/reviews | No | Get the list of Pickle reviews | Array of Objects (object = a review) |
| Get | /api/reviews/saved | Yes | Get the list of reviews a user has saved | Array of ints (int = an id) |
| Post | /api/reviews/saved | Yes | Add a saved review to the db | 201 status code |

## DB (Server Side) -

There should be three tables for MVP. You may want/need to add additional columns or tables.

### Reviews

| Column Name | Data Type | Purpose |
| --- | --- | --- |
| id | integer | Unique identifier for each review |
| location | string | Name of the place reviewed |
| title | string | Synopsis of the review for easy viewing |
| text | text | Pickle's full review! |
| rating | integer | Number from 1-5 of Pickle's approval |
| date | date | When Pickle visited the place |

### Users

| Column Name | Data Type | Purpose |
| --- | --- | --- |
| id | integer | Unique identifier for each user |
| username | string | Used for login |
| email_address | string | So pickle can contact her fans :wink: |
| hash | text | Hashed login password |

### Saved Reviews (Many to Many / join table)

| Column Name | Data Type | Purpose |
| --- | --- | --- |
| id | integer | Unique identifier |
| user_id | integer | Which user saved the review |
| review_id | integer | Which review was saved |

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

---
[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=lost-and-found)
