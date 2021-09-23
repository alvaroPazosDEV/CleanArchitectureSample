const OrderRepository = require('../../2. Application/contracts/OrderRepository')

module.exports = class InMemoryOrderRepository extends OrderRepository {

  constructor() {
    super()
    this.orders = []
  }

  add(order) {
    try {
      this.orders.push(order)
    } catch(e) {
      throw new Error('error occured')
    }
    return true
  }

  getByNumber(orderNumber) {
    let order 
    try {
      order = this.orders.find(o => o.orderNumber === orderNumber)
    } catch(e) {
      throw new Error('error occured')
    }
    return order
  }

  getByDocument(clientDni) {
    let order
    try {
      order = this.orders.find(o => o.clientDni === clientDni)
    } catch(e) {
      throw new Error('error occured')
    }
    return order
  }

  updateStatus(orderNumber, status) {
    const temp = this.orders
    try {
      const index = temp.findIndex(t => t.orderNumber === orderNumber)
      temp[index].status = status 
      this.orders = temp
    } catch(e) {
      throw new Error('error occured')
    }
    return 'order successfully updated'
  }

}