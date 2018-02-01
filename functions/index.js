var functions = require('firebase-functions');
const LOCAL_TMP_FOLDER = '/tmp/';


const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors')({ origin: true });
const app = express();

exports.contacts_all = functions.https.onRequest((req, res) => {

    // Read contacts from the database.
    admin.database().ref("contacts").once('value', function (contacts) {
        //Reply the request
        return res.status(200).send(JSON.stringify(contacts, null, 3));
    });

});

exports.contacts_add = functions.https.onRequest((req, res) => {

    // Not to give you too much trouble, but make sure you sanitate this before storing below.

    //store the `contact` to contacts node in the database.
    admin.database().ref("contacts").push(req.body);

    // Reply the request
    return res.status(200).send({ "status": "ok" });
});