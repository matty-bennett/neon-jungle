const db = require('./connection');
const { Category, User } = require('../models');

db.once('open', async () => {
    //--------------CATEGORIES-------------//
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Snakes' },
        { name: 'Geckos' },
        { name: 'Lizards' },
        { name: 'Frogs' },
        { name: 'Plants' }
    ]);

    console.log('Categories seeded');

    //--------------USERS------------------//
    await User.deleteMany();

    await User.create({
        firstName: 'Pamela',
        lastName: 'Washington',
        email: 'pamela@testmail.com',
        password: 'password12345',
    });

    await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345'
    });

    console.log('Users seeded');

    process.exit();
});