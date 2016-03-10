const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  return res.send('respond with a resource');
});

router.post('/',(req,res,next) => {
  return res.send(req.body);
});

module.exports = router;
