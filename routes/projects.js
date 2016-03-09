const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
  res.render('project',{
    'title' : "Project"
  });
})

module.exports = router;