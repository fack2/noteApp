const cookie = require('cookie')
const { verify } = require('jsonwebtoken')
const SECRET = process.env.SECRET

exports.auth = (req, res, next) => {
  console.log("auth");

  if (req.headers.cookie) {
    const { token } = cookie.parse(req.headers.cookie)
    verify(token, SECRET, (err, result) => {
      if (err) {
        return res.json({ error: 'server error', success: false })
      }
      if (result) {
        req.user_id = result.user_id
        req.name = result.name

        return next()
      } else {
        return res.json({ error: 'not Authorized', success: false })
      }
    })
  } else {
    return res.json({ error: 'not Authorized', success: false })
  }
}