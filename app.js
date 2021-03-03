const express = require ('express')
const _ = require('lodash')
const ejs = require('ejs');
const posts = []

const app = express()

app.set("view engine","ejs")

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.render('home')
})

app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/portfolio",(req,res)=>{
    res.render('portfolio')
})
app.get("/blog",(req,res)=>{
    res.render('blog', {posts:posts})
})
app.get("/compose",(req,res)=>{
    res.render('compose')
})
app.post("/compose",(req,res)=>{
   const post = {
       title:req.body.postTitle,
       content:req.body.postContent,
   }
   
   posts.push(post)

   res.redirect("/blog")
})







app.listen (3000, ()=>{
    console.log('App is up and running on port 3000');
})