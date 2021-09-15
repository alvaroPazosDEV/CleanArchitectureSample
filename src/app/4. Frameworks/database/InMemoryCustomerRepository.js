const CustomerRepository = require('../../2. Application/contracts/CustomerRepository')

module.exports = class InMemoryCustomerRepository extends CustomerRepository {

  constructor() {
    super()
    this.customers = []
  }

  add(customer) {
    try {
      this.customers.push(customer)
    } catch(e) {
      throw new Error('error occured')
    }
    return true
  }

  getByDocument(dni) {
    let customer 
    try {
      customer = this.customers.find(c => c.dni === dni)
    } catch(e) {
      throw new Error('error occured')
    }
    return customer
  }

}