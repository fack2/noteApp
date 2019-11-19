const { getCategories } = require('../database/queries/getCategories.js')

exports.getAllCategories = (req, res) => {

  getCategories()
    .then(data => {
      res.json(data.rows)
    })
    .catch(err => console.log("error")
    )
}


