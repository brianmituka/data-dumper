const express = require('express');
const util = require('./util');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/backup', (req, res) => {
  let postData = req.body;
    util.log(">>>> request received")
    util.writeToFile(postData.mobile, postData.message, postData.phase,postData.date)
    res.sendStatus(200)
  })

app.listen(port, ()=>{
    util.log(`server running on port ${port}`)
})
