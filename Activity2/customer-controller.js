const customers = require('./customers');

function getAllCustomers(req, res) {
  res.send(customers);
}

function getById(req, res) {
  const { id } = req.query;
  const result = customers.filter(c => c.id === Number(id));
  res.send(result);
}

function getByFirstName(req, res) {
  const { firstName } = req.query;
  const result = customers.filter(c => 
    c.firstName === firstName
  );
  res.send(result);
}

function getByLastName(req, res) {
  const { lastName } = req.query;
  const result = customers.filter(c => 
    c.lastName === lastName
  );
  res.send(result);
}

function getByEmail(req, res) {
  const { email } = req.query;
  const result = customers.filter(c => 
    c.email === email
  );
  res.send(result);
}

function getByGender(req, res) {
  const { gender } = req.query;
  const result = customers.filter(c => 
    c.gender === gender
  );
  res.send(result);
}

function getByCreatedAt(req, res) {
  const { from, to } = req.query;
  const result = customers.filter(c => {
    const date = new Date(c.createdAt);
    return (!from || date >= new Date(from)) && (!to || date <= new Date(to));
  });
  res.send(result);
}


function getByBirthday(req, res) {
  const { from, to } = req.query;
  const result = customers.filter(c => {
    const date = new Date(c.birthday);
    return (!from || date >= new Date(from)) && (!to || date <= new Date(to));
  });
  res.send(result);
}

module.exports = {
  getAllCustomers,
  getById,
  getByFirstName,
  getByLastName,
  getByEmail,
  getByGender,
  getByCreatedAt,
  getByBirthday
};