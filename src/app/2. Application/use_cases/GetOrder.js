module.exports = class GetOrder {
  constructor(orderRepository, customerRepository) {
    this.orderRepository = orderRepository
    this.customerRepository = customerRepository
  }

  async getOrder (orderNumber) {
    const order = await this.orderRepository.getByNumber(orderNumber)
    const client = await this.customerRepository.getByDocument(order.clientDni)
    if(!order) return order
    return { ...order, client}
  }

}