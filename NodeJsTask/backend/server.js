//const express = require("express");
const app = require("./app");
const dotenv = require("dotenv");
const connectDataBase = require("./config/database")
 //Config
 dotenv.config({path:"backend/config/config.env"})

 // Coonect DataBase
 connectDataBase();


app.listen(process.env.PORT, () => {
    console.log(`Server is Working On ${process.env.PORT}`);
})