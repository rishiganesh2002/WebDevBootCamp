const express = require('express');
const {v4: uuid} = require('uuid');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
uuid();

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

let comments = [
    {
        username: "Todd",
        comment: "Hello my name is Todd",
        id: uuid()
    }, 
    {
        username: "Rishi",
        comment: "Test 1234 ", 
        id: uuid()
    }, 
    {
        username: "Skyler",
        comment: "Hello Moon",
        id: uuid()
    }, 
    {
        username: "Matt",
        comment: "Cristiano Siuuuu",
        id: uuid()
    }
]

app.get('/comments', (req, res)=>{
    res.render('comments/index', {comments});
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new'); // Get route to get the form that allows you to submit a new comment
})

app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuid()}); // Fake Database sending
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

app.get('/comments/:id/edit', (req,res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment});
})

app.delete('/comments/:id', (req, res) => {
    const {id} = req.params;
    comments = comments.filter(c => c.id != id);
    res.redirect('/comments');

})

// /comments - resource
// GET/comments - lists all comments
// POST/comments - create a new comment
// GET/comments/:id - get 1 comment using id
// PATCH/comments/:id - edit 1 comment
// DELETE/comments/:id - destroy 1 comment


