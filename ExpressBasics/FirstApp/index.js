const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("HI");
//     res.send("Hello we got your request");
// })

app.get('/cats', (req, res)=> {
    console.log('cats request');
    res.send('Meow');
})

app.listen(3000,()=> {
    console.log("Listening on port 3000");
})

app.get('/r/:subreddit', (req, res)=>{
    const {subreddit} = req.params;
    res.send(`Browsing the ${subreddit} subreddit`);
})

app.get('/search', (req, res)=>{
    console.log(req.query);
    res.send('Hi');
})

