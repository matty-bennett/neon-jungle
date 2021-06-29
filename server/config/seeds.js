const db = require('./connection');
const { Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Snakes' },
        { name: 'Geckos' },
        { name: 'Lizards' },
        { name: 'Frogs' },
        { name: 'Plants' }
    ]);

    console.log('Categories seeded');

    process.exit();
});