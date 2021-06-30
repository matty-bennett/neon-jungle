const { AuthenticationError } = require('apollo-server-express');
const { Category, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // me query is to test authMiddleware
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id });

                return userData;
            }
            throw new AuthenticationError('You are not logged in.');
        },
        categories: async () => {
            return await Category.find();
        },
        //products: {},
        //product: {},
        users: async () => {
            return User.find()
                .select('-__v -password')
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findOne({ _id: context.user._id })
                // .populate({
                //     path: 'orders.products',
                //     populate: 'category'
                // });

                // user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user;
            }
            throw new AuthenticationError('You are not logged in!');
        },
        //order: {}
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect login credentials.');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect login credentials.');
            }

            const token = signToken(user);
            return { token, user };
        }
    }
}

module.exports = resolvers;