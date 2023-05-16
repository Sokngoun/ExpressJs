
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connection");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
require("dotenv").config()
app.get("/", (req, res) => {
  res.send("Home Page");

});


app.use("/api/v1/tasks/", tasks);
// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get signle task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task

const port = 3000;

const start = async () => {
  try{
    await connectDB(process.env.URL);
    app.listen(port, (req, res) => {
      console.log(`listening on port ${port}`);
    });
  }catch(e){
    console.log(e);
  }}


  start();


// app.listen(port, (req, res) => {
//   console.log(`listening on port ${port}`)})

