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
    category: (getCategory = async (_, args) => {
      try {
        const data = await Category.findOne({ name: args.name });
        return data ? data.name : 'none';
      } catch (error) {
        console.log(error);
      }
    }),
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
    jokes: (getJokesFromCategory = async (obj, args) => {
      try {
        const query = obj !== 'none' ? { category: [obj] } : {};
        const count = await Joke.countDocuments(query);
        const total = args.limit > count ? count : args.limit;
        const jokes = await Joke.find(query);
        // const perPage = args.perPage > total ? total : args.perPage;
        const options = {
          total: total,
          page: parseInt(args.page, 10),
          perPage: parseInt(args.perPage, 10),
        };
        const response = paginateService.paginate(jokes, options);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }),
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
