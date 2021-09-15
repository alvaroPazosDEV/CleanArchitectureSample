module.exports = class DatabaseService {

  constructor() {
    this.customerRepository = null 
    this.orderRepository = null 
  }

  async connect () {
    return Promise.reject(new Error('Not implemented'))
  }

}