const { getAllNote } = require('../database/queries/getAllNote');

exports.getNote = (request, response) => {
  getAllNote(request.params.category_id, request.params.user_id)
    .then(result => {
      response.json({ data: result.rows });
    })
    .catch(err => response.status(500).json({ err: err }));
};
