const express = require('express');
const cors = require('cors');

const projects = require('./data/helpers/projectModel.js');
const actions = require('./data/helpers/actionModel.js');

const port = 5000;
const server = express();
server.use(express.json());
server.use(cors({ origin: 'http://localhost:3000' }));


//---------- Post Methods ----------

server.post('/api/projects', (req, res) => {
    let { name, description, completed } = req.body;
    if (!name || !description){
        res.status(400).json({ errorMessage: 'Please provide a project name and description (completed flag optional)' });
        return;
    }
    projects.insert({ name, description, completed })
        .then(project => {
            res.json({ project })
        })
        .catch(err => {
            res.json({ err })
        })
})

server.post('/api/actions', (req, res) => {
    let { project_id, description, notes, completed } = req.body;
    if (!project_id || !description){
        res.status(400).json({ errorMessage: 'Please provide a project_id and description (notes and completed flag optional)' });
        return;
    }
    actions.insert({ project_id, description, notes, completed })
        .then(action => {
            res.json({ action })
        })
        .catch(err => {
            res.json({ err })
        })
})


//---------- Get Methods ----------


//---------- Put Methods ----------


//---------- Delete Methods ----------

server.listen(port, () => console.log(`Server running on port ${port}`));