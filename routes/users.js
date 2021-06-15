var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:root@connectplacecluster.0gdr9.gcp.mongodb.net/newTest?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("newTest").collection("Contacts");
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/', function(req, res, next) {
  console.log("Hello");

  console.log(req.body);

  const collection = client.db("newTest").collection("Contacts");


    // perform actions on the collection object
    collection.updateOne(req.body,{$set: req.body},{upsert: true})


  res.send('respond with a resource');
});


router.post('/getAllContactsw', function(req, res, next) {
  console.log("Hello");

  // console.log(req.body);

  const collection = client.db("newTest").collection("Contacts");


  // perform actions on the collection object
  collection.find().toArray( function (error, data){
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(data);
    res.send(data);
  });

  // res.send('respond with a resource');
});



router.post('/sendAllContacts', function(req, res, next) {

  console.log(json.parse(json.stringify(req.body))["contacts"]);
});
module.exports = router;
