const { AuthenticationError } = require('apollo-server-express');
const { Category, User } = require('../models');

const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
        //products: {},
        //product: {},
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id)
                // .populate({
                //     path: 'orders.products',
                //     populate: 'category'
                // });

                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user;
            }
            throw new AuthenticationError('You are not logged in!');
        },
        //order: {}
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return user;
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

            return user;
        }
    }
}

module.exports = resolvers;