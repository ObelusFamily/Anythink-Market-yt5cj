# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

So first thing’s first [install Docker](https://docs.docker.com/get-docker/)

Verify install with following commands.
`docker -v`
`docker-compose -v`

Next run `docker-compose up` from the project root directory

Lets test the backend is running, point your browser to
[http://localhost:3000/api/ping](http://localhost:3000/api/ping)

Now lets test that the frontend is connected to the backend.
create a new user on [http://localhost:3001/register](http://localhost:3001/register)
