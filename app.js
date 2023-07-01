const express = require("express");
const path = require("path").join;
const router=require("./routes/route.js")
const htmlFile = path(`${__dirname}/public`);
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(htmlFile));

app.set("view engine", "ejs")

app.use("/",router)

app.listen(3000)