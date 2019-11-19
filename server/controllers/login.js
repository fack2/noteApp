const checkUser = require('../database/queries/checkUser.js')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

exports.get = (req, res) => {
  const { email, password } = req.body
  checkUser(email)
    .then(data => {
      bcrypt.compare(password, data.password, (err, result) => {
        if (err) {
          return res.json({ err })
        }
        if (result) {
          const { userId, userName } = data

          const token = jwt.sign(
            { email, user_id: userId, name: userName },
            process.env.SECRET
          )
          return res
            .cookie('token', token, { maxAge: 99999999 })
            .json({ msg: 'true', token })
        } else {
          return res.json({ msg: 'false' })
        }
      })
    })
    .catch(err => res.json({ err }))
}