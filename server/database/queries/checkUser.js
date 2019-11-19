const dbConnection = require("./../db_connection")

const checkUser = email => {
  return dbConnection
    .query(
      "select password, user_id, name from users_accounts where email = $1",
      [email]
    )

}

module.exports = checkUser