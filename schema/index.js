const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql')

const { User, Summary } = require('./types')
const { getUser, getStreamSummary } = require('../api')

const rootQueryType = new GraphQLObjectType({
  name: 'Twitch',
  fields: () => ({
    user: {
      type: User,
      args: {
        name: {
          description: 'The name for this user',
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (root, { name }) => await getUser(name),
    },
    summary: {
      type: Summary,
      resolve: async (root, {}) => await getStreamSummary()
    }
  }),
});

const TwitchSchema = new GraphQLSchema({
  query: rootQueryType,
  types: [User, Summary],
});

module.exports = TwitchSchema;
