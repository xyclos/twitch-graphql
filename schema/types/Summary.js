const {
  GraphQLObjectType,
  GraphQLInt
} = require('graphql')

const Summary = new GraphQLObjectType({
  name: 'Summary',
  description: 'A summary of live streams',
  fields: () => ({
    channels: {
      type: GraphQLInt,
      description: 'The total number of live channels on Twitch'
    },
    viewers: {
      type: GraphQLInt,
      description: 'The total number of viewers currently watching on Twitch'
    }
  })
})

module.exports = Summary