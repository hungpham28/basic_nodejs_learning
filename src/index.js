const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const route = require("./routes")
const db = require('./config/db')

// connect DB
db.connect()

app.use(express.static("src/public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "src/resources/views");

route(app)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
