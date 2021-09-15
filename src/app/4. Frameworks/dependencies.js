const InMemoryDatabaseService = require('../4. Frameworks/database/InMemoryDatabaseService')
const EmailNotificationService = require('../4. Frameworks/externalServices/EmailNotificationService')

module.exports = {
  DatabaseService: new InMemoryDatabaseService(),
  NotificationService: new EmailNotificationService()
}