const User = require('../models/User.js');
const path = require('path');

module.exports = async (req, res) => {
  try {
    await User.create(req.body);
  }
  catch (error) {
    console.log('Error while creating a user:', error);
    return res.redirect('/auth/register')
  }
  res.redirect('/');
};