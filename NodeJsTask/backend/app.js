
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const errormiddleware = require("./middleware/Error")
const bodyParser = require("body-parser"); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());
app.use(cookieParser());

// Routes
const product = require("./routes/product.js");
const user = require("./routes/user");
app.use("/api/v1", product);
app.use("/api/v1", user);


// Error Middleware
app.use(errormiddleware);

module.exports = app;