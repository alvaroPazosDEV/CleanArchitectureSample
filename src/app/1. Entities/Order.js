module.exports = class Order {
  constructor(orderNumber, clientDni, status) {
    this.orderNumber = orderNumber
    this.clientDni = clientDni
    this.status = status
  }
}