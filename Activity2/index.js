const express = require('express');
const app = express();
app.use(express.json());

const customerRoutes = require('./customers-route');
const orderRoutes = require('./orders-route');
const productsRoutes = require('./products-route');

// mount correctly
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productsRoutes);

app.get('/', (req, res) => {
  res.send('Working');
});

app.listen(3000, () => {
  console.log('Server running');
});
