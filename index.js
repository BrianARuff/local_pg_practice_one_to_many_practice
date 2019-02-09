const express = require('express');

const userRoutes = require('./router/userRoutes');
const categoriesRoutes = require('./router/categoryRouter');

const server = express();

server.use('/api', userRoutes);
server.use('/api', categoriesRoutes);
console.log("DATABASE_URL", process.env.DATABASE_URL);
server.listen(9000, () => console.log("### SERVER RUNNING ON PORT 9000 ###"));