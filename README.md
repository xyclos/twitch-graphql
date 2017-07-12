# twitch-graphql
A **work-in-progress** wrapper implementation of the [Twitch v5 API](https://dev.twitch.tv/docs) in [GraphQL](http://graphql.org/).

## Setup

Create a file in the project root called secrets.js. Export something like this:

```
{
  twitch: {
    clientId: '<YOUR TWITCH CLIENT ID>'
  }
}
```

## Running
Just run the following commands:

```
twitch-graphql> npm install
twitch-graphql> npm run start
```

This should start an automatically reloading local server using `nodemon` at http://localhost:8080/twitch/graphql/graphiql.
