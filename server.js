const express = require('express');
const method = require('method-override');
const body = require('body-parser');
const exphbs = require("express-handlebars");
const port = process.env.PORT || 8080;
const burgerRouter = require('./routes/burger-routes');
const app = express();

app.use(body.urlencoded({ extended: false }));
// app.use(body.json); 

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/views"));
app.use(burgerRouter);
app.use((req,res,next)=> {
	res.status(404).render('404');
});
app.listen(port);

