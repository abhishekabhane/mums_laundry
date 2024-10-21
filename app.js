const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.get("/services", function(req, res) {
    res.render("services");
});

app.get("/faq", function(req, res) {
    res.render("faq");
});

app.get("/appinformation", function(req, res) {
    res.render("appinformation");
});

app.get("/franchise", function(req, res) {
    res.render("franchise");
});

app.get("/contactus", function(req, res) {
    res.render("contactus");
});

app.get("/locations", function(req, res) {
    res.render("locations");
});

app.get("/blog-view", function(req, res) {
    res.render("blog-view");
});

app.get("/blog-page", function(req, res) {
    res.render("blog-page");
});

app.get("/privacy-policy", function(req, res) {
    res.render("privacy-policy");
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, function() {
    console.log("server has been started.")
});