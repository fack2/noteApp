exports.get = (req, res) => {
  res.clearCookie('token')
  res.json({ message: 'true' })
}