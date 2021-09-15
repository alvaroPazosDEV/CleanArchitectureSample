const express = require('express')
const OrderController = require('../../../3. Adapters/controllers/OrderController')
const cw = require('../../common/controllerWrapper')

const orderRouter = (dependencies) => {
    const router = express.Router()
    const controller = new OrderController(dependencies.DatabaseService, dependencies.NotificationService)

    router.route('/:orderId')
        .get(cw(controller.getOrder))
    router.route('/:orderId/deliver')
        .put(cw(controller.deliverOrder))
    return router
};


module.exports = orderRouter
