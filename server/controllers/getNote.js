const { getAllNote } = require('../database/queries/getAllNote');

console.log('8888889755555555555555555555');

exports.getNote = (request, response) => {
  console.log('pppp');
  console.log('req',request.params.category_id, request.params.user_id);

  getAllNote(request.params.category_id, request.params.user_id)
    .then(result => {
      response.json({ data: result.rows });
    })
    .catch(err => response.status(500).json({ err: err }));
};
