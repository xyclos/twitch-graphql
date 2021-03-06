const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require('graphql')

const { getChannel } = require('../../api')
const Channel = require('./Channel')

const User = new GraphQLObjectType({
  name: 'User',
  description: 'A Twitch user',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'The ID of this user',
      resolve: user => user._id,
    },
    type: {
      type: GraphQLString,
      description: 'The type of this user',
    },
    name: {
      type: GraphQLString,
      description: 'The name of this user',
    },
    createdAt: {
      type: GraphQLString,
      description: 'The date on which this user was created',
      resolve: user => user.created_at,
    },
    updatedAt: {
      type: GraphQLString,
      description: 'The date on which this user was last updated',
    },
    logo: {
      type: GraphQLString,
      description: 'The URL for this user\'s logo',
    },
    displayName: {
      type: GraphQLString,
      description: 'The display name of this user',
      resolve: user => user.display_name,
    },
    bio: {
      type: GraphQLString,
      description: 'The biography for this user',
    },
    channel: {
      type: Channel,
      description: 'The channel on which this user broadcasts',
      resolve: async user => await getChannel(user.name),
    },
  }),
});

module.exports = User;
