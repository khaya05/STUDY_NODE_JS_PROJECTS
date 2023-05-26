const { Product } = require('../models/product');

exports.getAllProductsStatic = async (req, res) => {
  const search = 'ab';
  const products = await Product.find({
    name: { $regex: search, $options: 'i' },
  });
  res.status(200).json({ results: products.length, products });
};

exports.getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters, page } =
    req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }

  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };

    const regEx = /\b(<|>|=|>=|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    const options = ['price', 'rating'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, val] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let results = Product.find(queryObject);

  // sort
  if (sort) {
    const sortList = sort.replaceAll(',', ' ');
    results.sort(sortList);
  } else {
    results.sort('createdAt');
  }

  // fields
  if (fields) {
    const fieldsList = fields.replaceAll(',', ' ');
    results.select(fieldsList);
  } else {
    results.select('-__v');
  }

  if (page) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = page - 1 * limit;
    results = results.skip(skip).limit(limit);
  }

  const products = await results;
  res.status(200).json({ results: products.length, products });
};
