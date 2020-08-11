const BlogPost = require('../models/BlogPost.js');
const path = require('path');

module.exports = async (req, res) => {
  const image = req.files.image;
  await image.mv(path.resolve(__dirname, '../public/img', image.name));
  await BlogPost.create({ ...req.body, image: `/img/${image.name}` });
  res.redirect('/');
}
