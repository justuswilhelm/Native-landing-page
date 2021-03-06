var express = require("express")
var path = require("path")
var favicon = require("serve-favicon")
var logger = require("morgan")
var cookieParser = require("cookie-parser")
var bodyParser = require("body-parser")
const request = require("superagent")

var index = require("./routes/index")
var tribes = require("./routes/tribes")
var ideas = require("./routes/ideas")
var people = require("./routes/people")
var users = require("./routes/users")

var app = express()

app.set("env", process.env.NODE_ENV)

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ "extended": false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", index)
app.use("/tribes", tribes)
app.use("/ideas", ideas)
app.use("/people", people)
app.use("/users", users)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found")
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("pages/error", { "title": "app error"})
})

module.exports = app
