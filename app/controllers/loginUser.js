const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = async (req, res) => {
  const { username, password } = req.body;
  user = await User.findOne({ username: username });
  if (user) {
    same = await bcrypt.compare(password, user.password);
    if (same) {
      req.session.userId = user._id;
      res.redirect('/')
    }
    else {
      res.redirect('/auth/login')
    }
  }
  else {
    res.redirect('/auth/login')
  }
}

