module.exports = {
  paginate: function(docs, options) {
    const { total, page, perPage } = options;
    const pages = Math.ceil(total / perPage);
    const startIndex = page * perPage - perPage - 1;

    const data = docs.slice(startIndex + 1, startIndex + options.perPage + 1);

    const response = {
      data,
      page,
      perPage,
      pages
    };

    return response;
  }
};
