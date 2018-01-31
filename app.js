const express = require('express')
const app = express();

var bodyParser = require('body-parser')

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded());

const all = {
    "name": "Hlulani",
    "email": "hlullyr@gmail.com",
    "subject": "Testing",
    "message": "testing if the server works"

}
app.get('/contacts/all', (function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    return res.send(JSON.stringify(all, null, 3));
}));


//You post data will be here
app.post('/contacts/add', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;

    console.log(JSON.stringify(req.body));
    res.type('form');
    return res.send("Received post data : name --> " + name + "" + email + "" + subject + "" + message);
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));