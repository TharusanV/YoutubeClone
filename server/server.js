const express = require('express');
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use((cors)); //Allows request from front end to back end

const ytDatabase = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'youtubeDb'
});

app.get('/login', (req,res) => {
    ytDatabase.query(`SELECT username, password FROM ${ytDatabase.database}`, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
    });
})

app.listen(3001, () => {
    console.log('Server Online')
});