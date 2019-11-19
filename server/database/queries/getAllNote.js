const dbConnection = require('../db_connection');

exports.getAllNote = (category_id, user_id) => {
   return dbConnection.query('SELECT * FROM note WHERE category_id=$1 AND user_id=$2', [
    category_id,
    user_id
  ]);
};
