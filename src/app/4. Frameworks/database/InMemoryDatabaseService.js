const DatabaseService = require('../../2. Application/contracts/DatabaseService')
const InMemoryCustomerRepository = require('./InMemoryCustomerRepository')
const InMemoryOrderRepository = require('./InMemoryOrderRepository')
const Customer = require('../../1. Entities/Customer')
const Order = require('../../1. Entities/Order')

module.exports = class InMemoryDatabaseService extends DatabaseService {

  constructor() {
    super()
    this.customerRepository = new InMemoryCustomerRepository()
    this.orderRepository = new InMemoryOrderRepository()
  }

  async connect() {
    this.seedData()
  }

  async seedData() {
    let sampleCustomer = new Customer('75913803', 'Alvaro Pazos', '921911654', 'apazos@ripley.com.pe')
    let sampleOrder = new Order('28342911', '75913803', 'RECEIVED')

    await this.customerRepository.add(sampleCustomer)
    await this.orderRepository.add(sampleOrder)
  }

}