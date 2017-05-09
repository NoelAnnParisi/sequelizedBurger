const express = require('express');
const method = require('method-override');
const body = require('body-parser');
const exphbs = require("express-handlebars");
const port = process.env.PORT || 8080;
const burgerRouter = require('./routes/burger-routes');
const app = express();
const db = require('./models');

app.use(body.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/views"));
app.use(burgerRouter);
app.use((req,res,next)=> {
	res.status(404).render('404');
});

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("App listening on PORT " + port);
  });
});

