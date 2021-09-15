module.exports = class GetOrder {
  constructor(orderRepository) {
    this.orderRepository = orderRepository
  }

  async getOrder (orderNumber) {
    const order = await this.orderRepository.getByNumber(orderNumber)
    return order
  }

}