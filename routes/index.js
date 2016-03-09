var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var questions = [
    { "question" : "yoyo" }
  ];
  res.render('index', { 
    title: 'Express',
    "questions" : questions
   });
});

module.exports = router;
