const express = require('express')
const graphqlHttp = require('express-graphql')
const schema = require('./schema')

const app = express()

app.use('/twitch/graphql', graphqlHttp({
  schema,
  graphiql: true,
  pretty: true
}))

const server = app.listen(8080, () => {
  const { port } = server.address()

  console.log(`Server listening on port ${port}`)
})
