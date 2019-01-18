var express = require('express');
var router = express.Router();

var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
var app = express();
/*importera schema */
var News = require("../models/news")

mongoose.connect('mongodb://Maria:Kattegatt2@ds151523.mlab.com:51523/news', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Skapa statisk sökväg
app.use(express.static(path.join(__dirname, 'public')));

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });


/*************get courses****************/
router.get('/', function(req, res, next) {

	News.find(function(err, News){
		if(err){
			res.json(err);

		}else{
			res.json(News)
		}
	});
});
    




/**GET specific course id************************/
router.get('/:id', function(req, res, next) {

	News.findById(req.params.id, function(err, News){
		if(err){
			res.json(err);

		}else{
			res.json(News);
		}
	});

	});

router.post('/', function(req, res, next){
	var news = new News();

	
	news.newsHeadline = req.body.newsHeadline;
	news.newsText = req.body.newsText;

	news.save(function(err){
		if(err){
			res.json(err);

		}else{
			res.json({message:"Nyhet lagrad"})
		}
	});
});

//this part is taken from Mikael Hasselmalm exempel code.
/*Delet a course*/
router.delete('/:id', function(req, res, next) {

	News.remove({_id: req.params.id}, function(err){
		if(err){
			res.json(err);

		}else{
			res.json({message:"kurs borttagen"})
		}
	})

	
});

/*update a course*/
router.put('/:id', function(req, res, next) {

	News.findById({_id: req.params.id}, function(err){
		var news = new News();

	
	news.newsHeadline = req.body.newsHeadline;
	news.newsText = req.body.newsText;

	news.save(function(err){
		if(err){
			res.json(err);

		}else{
			res.json({message:"Nyhet lagrad"})
		}
	});
	})

	
});



module.exports = router;
