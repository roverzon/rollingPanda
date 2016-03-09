var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var questions = [
    { "question" : "What was supposed to happen?" },
    { "question" : "What did happen?"},
    {"question" : "What are some improvements?"},
    {"question" : "What are some sustainments?"},
    {"question" : "What can be done to improve the training next time?"},
    {"question" : "Closing comments"}
  ];
  res.render('index', { 
    title: 'Express',
    "questions" : questions
   });
});

module.exports = router;
