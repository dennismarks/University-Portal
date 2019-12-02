# Contribuing Guide

- [Developing](#developing)

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
