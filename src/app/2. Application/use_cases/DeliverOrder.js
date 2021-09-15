module.exports = class DeliverOrder {
  constructor(orderRepository, customerRepository, notificationService) {
    this.orderRepository = orderRepository
    this.customerRepository = customerRepository
    this.notificationService = notificationService
  }

  async deliverOrder (orderNumber) {
    const order = await this.orderRepository.getByNumber(orderNumber)
    if(!order) throw new Error('order doesnt exist')
    console.log(order)
    if(order.status !== 'RECEIVED') throw new Error('order was already delivered')
    const customer = await this.customerRepository.getByDocument(order.clientDni)
    const updateResult = await this.orderRepository.updateStatus(orderNumber, 'DELIVERED')
    console.log(updateResult)
    const notificationResult = await this.notificationService.notify(customer, order)
    console.log(notificationResult)
    return 'order delivered successfully'
  }

}