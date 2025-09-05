const orders = require('./orders');

function getAllOrders(req, res) {
  res.send(orders);
}

function getById(req, res) {
  const { id } = req.query;
  const result = orders.filter(o => o.id === Number(id));
  res.send(result);
}

function getByDate(req, res) {
  const { date } = req.query;
  const result = orders.filter(o => 
    o.date === date
  );
  res.send(result);
}

function getByStatus(req, res) {
  const { status } = req.query;
  const result = orders.filter(o => 
    o.status === status
  );
  res.send(result);
}

function getByTotalAmount(req, res) {
  const { totalAmount } = req.query;
  const result = orders.filter(o => o.totalAmount === parseFloat(totalAmount)
  );
  res.send(result);
}

function getByTotalAmountRange(req, res) {
  const { start, end } = req.query;

  const result = orders.filter(o => {
    return (!start || o.totalAmount >= parseFloat(start)) &&
           (!end   || o.totalAmount <= parseFloat(end));
  });

  res.send(result);
}

module.exports = {
    getAllOrders,
    getByDate,
    getById,
    getByStatus,
    getByTotalAmount,
    getByTotalAmountRange
}