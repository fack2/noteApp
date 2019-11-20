exports.checkAuth = (req, res) => {
  const { name } = req
  res.json({ success: true, username: name })
}