const express = require('express');
const order = require('./order');

const apiRouter = (dependencies) => {
    const routes = express.Router()
    const orderRouter = order(dependencies)

    routes.use('/order', orderRouter)
    routes.get('/health', (req, res) => res.send('OK'))

    return routes

}

module.exports = apiRouter