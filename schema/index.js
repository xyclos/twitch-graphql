const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql')

const { User } = require('./types')
const { getUser } = require('../api')

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
  }),
});

const TwitchSchema = new GraphQLSchema({
  query: rootQueryType,
  types: [User],
});

module.exports = TwitchSchema;
