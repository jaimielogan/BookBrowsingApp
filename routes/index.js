var express = require('express');
var router = express.Router();

var unirest = require('unirest');

var key = "016bb440492c4390905f4f3221aa960a";
var books;

/* GET home page. */
router.get('/', function(req, res, next) {
  unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + key)
  .end(function(response){
    res.end('Done');
    books = response.body.results.books;
    console.log(books);
  });
  res.render('index', { title: 'Book Browsing App', books: books });
});

module.exports = router;
