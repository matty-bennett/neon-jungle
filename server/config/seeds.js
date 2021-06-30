const db = require('./connection');
const { Category, Product, User } = require('../models');

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

  //-------------PRODUCTS-----------------//
  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Brazilian Rainbow Boa',
      description:
        'Lorem ipsum snek very pretty, you will like I promise',
      image: 'brb-snake.jpg',
      category: categories[0]._id,
      price: 500,
      quantity: 10
    },
  ]);

  console.log('Products seeded');

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