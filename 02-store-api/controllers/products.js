exports.getAllProducts = (req, res) => {
  res.send('All products');
};

exports.getAllProductsStatic = (req, res) => {
  res.status(200).json({ msg: 'products route' });
};
