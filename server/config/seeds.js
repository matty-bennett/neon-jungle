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
      image: 'product.jpg',
      category: categories[0]._id,
      price: 500,
      quantity: 10
    },
    {
      name: 'Product 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product2.jpg',
      category: categories[1]._id,
      price: 100,
      quantity: 50
    },
    {
      name: 'Product 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product3.jpg',
      category: categories[1]._id,
      price: 150,
      quantity: 7
    },
    {
      name: 'Product 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product4.jpg',
      category: categories[2]._id,
      price: 500,
      quantity: 10
    },
    {
      name: 'Product 5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product5.jpg',
      category: categories[3]._id,
      price: 500,
      quantity: 10
    },
    {
      name: 'Product 6',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'product6.jpg',
      category: categories[4]._id,
      price: 500,
      quantity: 10
    },
  ]);

  console.log('Products seeded');

  //--------------USERS------------------//
  await User.deleteMany();

  await User.create({
    firstName: 'Savvy',
    lastName: 'Bennett',
    email: 'spazzerelli@gmail.com',
    password: 'testPassword54321'
  });

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