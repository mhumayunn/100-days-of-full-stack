const express = require('express');
const app = express();
//use app
app.use(express.json());
//use for dirname
app.use(express.static(quiz.html));
//port
const PORT = 3000;
//get
app.get('/hello', (req,res) => {
    res.json({message: "Hello from the backend!"});
})
//listen
app.listen(PORT, () => {
    console.log("server lisening");
})
