const products = require('./products');

// get all
function getAllProducts(req, res) {
  res.send(products);
}

function getById(req, res) {
  const { id } = req.query;
  const result = products.filter(o => o.id === Number(id));
  res.send(result);
}

function getByName(req, res) {
  const { name } = req.query;

  const result = products.filter(p =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
  res.send(result);
}

function getByDescription(req, res) {
  const { description } = req.query;

  const result = products.filter(p =>
    p.description.toLowerCase().includes(description.toLowerCase())
  );
  res.send(result);
}

function getByPriceRange(req, res) {
  const { min, max } = req.query;

  const result = products.filter(p => {
    return (!min || p.price >= parseFloat(min)) &&
           (!max || p.price <= parseFloat(max));
  });

  res.send(result);
}

function getByStockRange(req, res) {
  const { min, max } = req.query;

  const result = products.filter(p => {
    return (!min || p.stock >= parseInt(min)) &&
           (!max || p.stock <= parseInt(max));
  });

  res.send(result);
}

function getByCategory(req, res) {
  const { category } = req.query;

  const result = products.filter(p =>
    p.category === category
  );
  res.send(result);
}

module.exports = {
  getAllProducts,
  getByName,
  getByDescription,
  getByPriceRange,
  getByStockRange,
  getById,
  getByCategory
};
