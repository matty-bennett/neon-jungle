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
      name: 'Brazilian Rainbow Boa (Epicrates E. cenchria',
      description:
        'Native to Brazil, these snakes have a beautiful rainbow shein. Adult length is appx 6ft. Very easy to tame and always captive bred.',
      image: 'rainbowboa.jpg',
      category: categories[0]._id,
      price: 350,
      quantity: 10
    },
    {
      name: 'Gold Dust Day Gecko (Phelsuma laticauda)',
      description:
        'Native to tropical islands, these diurnal geckos are fun to watch and make great display animals.',
      image: 'gold-dust-gecko.jpg',
      category: categories[1]._id,
      price: 80,
      quantity: 50
    },
    {
      name: '"Southern" Dart Frog (Ranitomeya Variabilis)',
      description:
        'Native to South America, these stunning thumbnail dart frogs only reach about 1 inch in adulthood.',
      image: 'variabilis.jpg',
      category: categories[3]._id,
      price: 75,
      quantity: 7
    },
    {
      name: 'Emerald Tree Skink (Lamprolepis smaragdina)',
      description:
        'Native to the Phillipines, these are the most friendly and playful lizards you will ever keep.',
      image: 'tree-skink.jpg',
      category: categories[2]._id,
      price: 80,
      quantity: 10
    },
    {
      name: 'Pink Quill (Tillandsia cyanea)',
      description:
        'Beautiful species of bromeliad. Darts love to lay eggs and deposit tadpoles in their leaves',
      image: 'pink-quill.jpg',
      category: categories[4]._id,
      price: 22,
      quantity: 10
    },
    {
      name: 'Fruit Fly Culture (Melanogaster)',
      description:
        'Starter culture for smaller, flightless fruit flies, great for feeding smaller herps.',
      image: 'fruit-fly.jpg',
      category: categories[4]._id,
      price: 15,
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