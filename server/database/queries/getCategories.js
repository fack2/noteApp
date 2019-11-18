
const dbConnection = require('./../db_connection')

const getCategories = () => {
  return dbConnection
    .query('SELECT * FROM category')
}

module.exports = getCategories