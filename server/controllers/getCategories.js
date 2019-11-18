const getCategories = require('../database/queries/getCategories.js')

exports.get = (req, res) => {
  console.log("login back end ");

  getCategories()
    .then(data => {
      res.json({ data })
    })

    .catch(err => res.json({ err }))
}