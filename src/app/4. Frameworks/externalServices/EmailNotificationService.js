const NotificationService = require('../../2. Application/contracts/NotificationService')

module.exports = class EmailNotificationService extends NotificationService {

  notify(customer, order) {
    return Promise.resolve('email sent to customer')
  }

}