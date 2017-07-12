const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require('graphql')

const {
  User,
  Summary,
  Stream
} = require('./types')
const {
  getUser,
  getStreamSummary,
  getStream,
  getStreams
} = require('../api')

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
    },
    stream: {
      description: 'A live channel. "stream" will be null if the channel is offline',
      type: Stream,
      args: {
        name: {
          description: 'The name of the channel.',
          type: GraphQLString
        }
      },
      resolve: async (root, { name }) => await getStream(name)
    },
    streams: {
      description: 'Channels live on Twitch',
      type: new GraphQLList(Stream),
      args: {
        offset: {
          description: 'Page offset.',
          type: GraphQLInt
        }
      },
      resolve: async (root, { offset }) => await getStreams(offset)
    }
  }),
});

const TwitchSchema = new GraphQLSchema({
  query: rootQueryType,
  types: [User, Summary, Stream],
});

module.exports = TwitchSchema;
