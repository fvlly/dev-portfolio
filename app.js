const express = require("express");
const _ = require("lodash");
const ejs = require("ejs");

const date = require(__dirname + "/date.js");
const posts = [];

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});
app.get("/blog", (req, res) => {
  let day = date();
  res.render("blog", { posts: posts, day: day });
});
app.get("/compose", (req, res) => {
  res.render("compose");
});
app.post("/compose", (req, res) => {
  const post = {
    title: req.body.postTitle,
    content: req.body.postContent,
  };

  posts.push(post);

  res.redirect("/blog");
});

app.get("/posts/:postName", (req, res) => {
  const requestedTitle = _.lowerCase(req.params.postName);
  let day = date();

  posts.forEach((post) => {
    // checking if the titles match
    const storedTitle = _.lowerCase(post.title);
    if (requestedTitle === storedTitle) {
      res.render("posts", {
        title: post.title,
        content: post.content,
        day: day,
      });
    }
  });
});

app.listen(3000, () => {
  console.log("App is up and running on port 3000");
});
