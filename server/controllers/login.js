const checkUser = require('../database/queries/checkUser.js')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

exports.get = (req, res) => {
  console.log("rr");

  const { email, password } = req.body

  checkUser(email)
    .then(data => {
      const dddd = data.rows[0]
      bcrypt.compare(password, dddd.password, (err, result) => {

     
        if (result) {

          const { user_id, name } = data
          const token = jwt.sign(
            { email, user_id: user_id, name: name },
            process.env.SECRET)
          return res
            .cookie('token', token, { maxAge: 99999999 })
            .json({ msg: true, token })
        } else {
          return res.json({ msg: false })
        }
      })
    })
    .catch(err => res.json({ msg: false }))
}