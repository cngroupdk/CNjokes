const mongoose = require('mongoose');
const Categories = mongoose.model('categories');

module.exports = app => {
  app.get('/api/categories', async (req, res) => {
    const categories = await Categories.find({});
    res.send(categories);
  });
};
