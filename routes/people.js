var express = require("express")
var router = express.Router()
const request = require("superagent")


/* GET home page. */
router.get("/", function(req, res, next) {
	request
		.get("https://native-api.azurewebsites.net/users")
		.end(function(err, resApi){
		    if(err){
		     console.log(err)
		     return next(err)
		    } else {
		     console.log(resApi.body)
  			 res.render("pages/people.ejs", { "title": "people", "users": resApi.body })
		    }
		})
})

router.get("/:userId", function(req, res, next) {
	var userId = req.params.userId
	var user = {}
	console.log("userId: ", userId)
	console.log("req: ", req.params)
	console.log("req.path: ", req.path)
	request
		.get("https://native-api.azurewebsites.net/users/"+userId)
		.end(function(err, resApi){
		    if(err){
		     console.log(err)
		     return next(err)
		    } else {
		     //console.log(resApi.body);
		     request
				.get("https://native-api.azurewebsites.net/natives?owner="+userId)
				.end(function(err, resApinatives){
				    if(err){
				     console.log(err)
		     		 return next(err)
				    } else {
				     user = resApi.body
				     user.natives = resApinatives.body
				     //console.log('user: ', user);
				     request
						.get("https://native-api.azurewebsites.net/ideas?owner="+userId)
						.end(function(err, resApiIdeas){
						    if(err){
						     console.log(err)
		     				 return next(err)
						    } else {
						     user.ideas = resApiIdeas.body
						     console.log("qui :", user)
				  			 res.render("pages/user-profile.ejs", { "title": "people", "user": user })
						    }
						})
				    }
				})
  			 //res.render('pages/user-profile.ejs', { title: 'people', user: resApi.body });
		    }
		})
})

module.exports = router
