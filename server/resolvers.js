const Joke = require('./models/Joke');
const Category = require('./models/Category');
const paginateService = require('./services/paginateService');

//resolvers need refactoring, add pagination and joke filters

const resolvers = {
  Query: {
    info: () => null,
    categories: () => {
      return Category.find()
        .then(result => result)
        .catch(error => error);
    },
    category: (_, args) => {
      return Category.findOne({ name: args.name })
        .then(result => result)
        .catch(error => error);
    },
    jokes: () => {
      return Joke.find()
        .then(result => result)
        .catch(error => error);
    },
    joke: (obj, args) => {
      return Joke.findOne({ id: args.id })
        .then(result => result)
        .catch(error => error);
    },
    randomJoke: async function getRandomJoke() {
      try {
        const count = await Joke.countDocuments({});
        const randomNumber = Math.floor(Math.random() * count);
        const randomJoke = await Joke.find({})
          .limit(1)
          .skip(randomNumber);

        const options = {
          total: count,
          page: 1,
          perPage: 1,
        };

        const response = paginateService.paginate(randomJoke, options);
        return response.data[0];
      } catch (err) {
        console.log(err);
        // res.status(500).send(err);
      }
    },
  },
  Category: {
    name: obj => obj.name,
    jokes: obj => {
      return Joke.find({ category: [obj.name] })
        .then(result => result)
        .catch(error => error);
    },
  },
  Joke: {
    category: obj => {
      if (!obj.category) {
        return null;
      }
      return Category.find({ name: obj.category[0] })
        .then(result => result)
        .catch(error => error);
    },
  },
};

module.exports = resolvers;
