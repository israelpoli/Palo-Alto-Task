const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


app.use(cors())
app.use(bodyParser.json());



const db = []

app.use('/GET', (req, res) => {

    res.send(db);

});

app.use('/POST', (req, res) => {

    if (!req.body.resource || !req.body.category || !req.body.severity || !req.body.status) {
        res.send("is not good")

    }
    var data_tags = {};
    req.body.tags.map((tag) => {
        if (tag) {

            data_tags[Object.keys(tag)[0]] = tag[Object.keys(tag)[0]];
        }
    })
    var data = {
        resource: req.body.resource,
        category: req.body.category,
        creation_date: req.body.creation_date,
        severity: req.body.severity,
        status: req.body.status,
        region: req.body.region,
        tags: data_tags,
        creation_date: new Date().getTime()
    };


    db.push(data);
    res.send("is good");
});




app.listen(8080, () => console.log('API is running on http://localhost:8080'));