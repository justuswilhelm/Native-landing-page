var express = require('express');
var router = express.Router();
const request = require('superagent');


/* GET home page. */
router.get('/', function(req, res, next) {
  request
		.get("https://native-api.azurewebsites.net/ideas")
		.end(function(err, resApi){
		    if(err){
		     console.log(err);
		     return next(err);
		    } else {
		     console.log(resApi.body);
  			 res.render('pages/ideas.ejs', { title: 'ideas', ideas: resApi.body });
		    }
		});
});

router.get('/:ideaId', function(req, res, next) {
	var ideaId = req.params.ideaId;
	var idea = {};
	console.log('ideaId: ', ideaId);
	console.log('req: ', req.params);
	console.log('req.path: ', req.path);
	request
		.get("https://native-api.azurewebsites.net/ideas/"+ideaId)
		.end(function(err, resApi){
		    if(err){
		     console.log(err);
		     return next(err);
		    } else {
		     idea = resApi.body;
		     console.log('idea :', idea);
		     request
				.get("https://native-api.azurewebsites.net/users/"+idea.owner)
				.end(function(err, resApiOwner){
				    if(err){
				     console.log(err);
		     		 return next(err);
				    } else {
				     idea.owner = resApiOwner.body;
				     console.log('idea.owner :', idea.owner);
		  			 res.render('pages/idea-profile.ejs', { title: 'idea', idea: idea });
				    }
				});
		    }
		});
});
module.exports = router;
