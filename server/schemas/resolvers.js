const { AuthenticationError } = require('apollo-server-express');
const { Category, Product, User, Order } = require('../models');
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
        products: async (parent, { category, name }) => {
            const params = {};

            if (category) {
                params.category = category;
            }

            if (name) {
                params.name = {
                    $regex: name
                };
            }

            return await Product.find(params).populate('category');
        },
        product: async (parent, { _id }) => {
            return await Product.findById(_id).populate('category');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findOne({ _id: context.user._id })
                    .populate({
                        path: 'orders.products',
                        populate: 'category'
                    });

                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user;
            }
            throw new AuthenticationError('You are not logged in!');
        },
        order: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id)
                    .populate({
                        path: 'orders.products',
                        populate: 'category'
                    });

                return user.order.id(_id);
            }

            throw new AuthenticationError('You are not logged in!');
        },
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