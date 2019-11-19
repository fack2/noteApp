
const dbConnection = require('./../db_connection')

exports.getCategories = () => {
  return dbConnection
    .query('SELECT * FROM category')
}

