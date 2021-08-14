const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const { User } = require('../models');

const resolvers = {
    Query: {
        user: async (parent, {_id, username}) => {
            console.log(_id)
            return User.findOne({
                $or: [{_id}, {username}]
            })
            .select('-__v, -password')
            .populate('savedBooks')
        }
    }
}

module.exports = resolvers;