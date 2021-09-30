const GetOrder = require('../../2. Application/use_cases/GetOrder')
const DeliverOrder = require('../../2. Application/use_cases/DeliverOrder')

module.exports = class OrderController {

  constructor(databaseService, notificationService) {
    this.databaseService = databaseService
    this.notificationService = notificationService
    this.getOrder = this.getOrder.bind(this)
    this.deliverOrder = this.deliverOrder.bind(this)
  }

  async getOrder (req, res, next) {
    const GetOrderCommand = new GetOrder(this.databaseService.orderRepository, this.databaseService.customerRepository)
    const { orderId } = req.params
    const order = await GetOrderCommand.getOrder(orderId)
    res.json(order)
  }

  async deliverOrder (req, res, next) {
    const DeliverOrderCommand = new DeliverOrder(this.databaseService.orderRepository, this.databaseService.customerRepository, this.notificationService)
    const { orderId } = req.params
    const response = await DeliverOrderCommand.deliverOrder(orderId)
    res.json(response)
  }

}