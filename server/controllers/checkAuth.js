exports.checkAuth = (req, res) => {
  console.log("kkkklll");
  const { name } = req


  res.json({ success: true, username: name })
}