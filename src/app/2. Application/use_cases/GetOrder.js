module.exports = class GetOrder {
  constructor(orderRepository, customerRepository) {
    this.orderRepository = orderRepository
    this.customerRepository = customerRepository
  }

  async getOrder (orderNumber) {
    const order = await this.orderRepository.getByNumber(orderNumber)
    if(!order) return order
    const client = await this.customerRepository.getByDocument(order.clientDni)
    return { ...order, client}
  }

}