const express = require ("express");
const app = express();


const cors = require("cors");

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:3002"],
}));

//middle-wares
app.use(express.json());
app.use(express.urlencoded({extended: true}));



const tasks = [];

//basic functions
app.get('/', (req, res) => {
    res.json({message: "Welcome to Coding!"});
});


app.post('/tasks', (req, res) => {
    console.log("This is to test");
    console.log(req.body);

    tasks.push(req.body);
    res.json(req.body);
});







//catch-all
app.get('*', (req, res) => {
    res.status(404).send("Page not Found");
});


//fire-it up!
app.listen(3077, () => {
    console.log("API Server is now running at http://localhost:3077");
});