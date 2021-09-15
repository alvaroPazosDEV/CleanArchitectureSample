module.exports = class OrderRepository {
  constructor() {}

  add(order) {
    return Promise.reject(new Error('Not implemented'))
  }

  getByNumber(orderNumber) {
    return Promise.reject(new Error('Not implemented'))
  }

  getByDocument(dni) {
    return Promise.reject(new Error('Not implemented'))
  }

  updateStatus(orderNumber, status) {
    return Promise.reject(new Error('Not implemented'))
  }

}