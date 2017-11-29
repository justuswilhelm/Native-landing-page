var express = require('express');
var router = express.Router();
const request = require('superagent');

/* GET home page. */
router.get('/', function(req, res, next) {
  request
		.get("https://native-api.azurewebsites.net/natives")
		.end(function(err, resApi){
		    if(err){
		     console.log(err);
		     //res.render('pages/error', { title: 'natives error'});
		     return next(err);
		    } else {
		     console.log(resApi.body);
  			 res.render('pages/tribes.ejs', { title: 'tribes', natives: resApi.body });
		    }
		});
});

/*router.get('/native', function(req, res, next) {
  res.render('pages/native-profile.ejs', { title: 'native' });
});*/

router.get('/:nativeId', function(req, res, next) {
	var nativeId = req.params.nativeId;
	var native = {};
	console.log('nativeId: ', nativeId);
	console.log('req: ', req.params);
	console.log('req.path: ', req.path);
	request
		.get("https://native-api.azurewebsites.net/tribes/"+nativeId)
		.end(function(err, resApi){
		    if(err){
		     console.log(err);
		     return next(err);
		    } else {
		     native = resApi.body;
		     console.log('native: ', native);
  			 res.render('pages/native-profile.ejs', { title: 'native', native: native  });
		    }
		});
});

module.exports = router;
