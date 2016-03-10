const express = require('express');
const Post = require('../models/aarpost');
const router = express.Router();

router.get('/', (req, res, next) => {
  return res.send('respond with a resource');
});

router.post('/',(req,res,next) => {
  var post = new Post(req.body);
  return post.save((err,post)=>{
    if (err) {
      return err
    } else{
      return res.send(req.body);
    }
  });
});

module.exports = router;
