const express = require('express');
const router = express.Router();
const users = require('../components/user/router.js');
function routerAPI(app){
    app.use('/api/v1', router);
    router.use('/users', users)
};

module.exports = routerAPI;