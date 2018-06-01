const express = require('express');

const projects = require('./data/helpers/projectModel.js');
const actions = require('./data/helpers/actionModel.js');

const port = 5000;
const server = express();
server.use(express.json());
server.use(cors({ origin: 'http://localhost:3000' }));



server.listen(port, () => console.loog(`Server running on port ${port}`));