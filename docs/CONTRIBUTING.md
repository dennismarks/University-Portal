# Contribuing Guide

- [Contribuing Guide](#contribuing-guide)
  - [Developing](#developing)
  - [Express routes](#express-routes)

## Developing

In order to start the development environment:

1. Run `npm install` in both the [frontend/](/frontend/) and [portal-api/](/portal-api/) folders.
2. `cp ./portal-api/.env.example ./portal-api/.env` and update the `.env` file
3. Then simultaneously start the frontend and backend development servers by running:

```
cd frontend/
npm start
```

and

```
cd portal-api/
npm run dev
```

## Express routes

- Also, provide an overview of the routes in your Express server, and what they are used for in your app.
- 5 main API routes (Prefix):
  - `/api/v1/courses` : Course management
    - `/` - GET: returns course object from database
    - `/:school/:code` - GET: returns a specific course object from a specific school
    - `/top` - GET: returns top 3 highest rated courses at the University of Toronto
    - `/` - POST: Create a new course entry given courseCode and school
    - `/search` - GET: Return list of course objects that matches search Regex
    - `/ids` - POST: Create a list of all courses from the given id
  - `/api/v1/course-resource`: Course Resource management
    - `/:school` - GET all pending(unresolved) course requests at a given school
    - `/:school/:course/pending` - GET all pending(unresolved) course requests for a given course
    - `/:school/:course/approved` - GET all approved(resolved) course requests for a given course
    - `/:school/:course/` - POST: Create an entry for course resource.
    - `/:school/:course/:resId` - POST: Create an entry for course resource.
    - `/:school/:course/:id` - DELETE: Delete a course resource given id
  - `/api/v1/courses/course-review`: Course comments management
    - `/:school/:course/` - POST: Post new comment + rating for a given course.
    - `/:school/:course/:id` - DELETE: Delete comment
  - `/api/v1/courses/reddit-comments`: Reddit posts management
    - `/:school/:course` - PATCH: Refresh to get the latest posts regarding the course.
    - `/:id` - DELETE: Delete reddit comment from database
  - `/api/v1/user`:
    - `/` - GET: Returns user profile object
    - `/me/` - GET: Returns logged in user profile.
    - `/login/` - POST: Verify credentials and log user in.
    - `/logout/` - GET: Remove user current session and log out.
    - `/show` - GET: Read one single object.
    - `/add-current/course/:id` - POST: add course id to user's current courses
    - `/add-taken/course/:id` - POST: add course id to user's taken courses
    - `/add-planned/course/:id` - POST: add course id to user's planned courses
