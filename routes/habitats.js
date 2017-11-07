var express = require('express');
var router = express.Router();
const request = require('superagent');

/* GET home page. */
router.get('/', function(req, res, next) {
  request
		.get("https://habitat-api.azurewebsites.net/habitats")
		.end(function(err, resApi){
		    if(err){
		     console.log(err);
		     //res.render('pages/error', { title: 'habitats error'});
		     return next(err);
		    } else {
		     console.log(resApi.body);
  			 res.render('pages/habitats.ejs', { title: 'habitats', habitats: resApi.body });
		    }
		});
});

/*router.get('/habitat', function(req, res, next) {
  res.render('pages/habitat-profile.ejs', { title: 'habitat' });
});*/

router.get('/:habitatId', function(req, res, next) {
	var habitatId = req.params.habitatId;
	var habitat = {};
	console.log('habitatId: ', habitatId);
	console.log('req: ', req.params);
	console.log('req.path: ', req.path);
	request
		.get("https://habitat-api.azurewebsites.net/habitats/"+habitatId)
		.end(function(err, resApi){
		    if(err){
		     console.log(err);
		     return next(err);
		    } else {
		     habitat = resApi.body;
		     console.log('habitat: ', habitat);
  			 res.render('pages/habitat-profile.ejs', { title: 'habitat', habitat: habitat  });
		    }
		});
});

module.exports = router;
