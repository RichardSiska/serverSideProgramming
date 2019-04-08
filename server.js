/*

Author: Richard Siska
Date: 4/08/18

This is a tutorial in order to learn server side programming


*/

//Import express framework
const express = require('express');
const app = express();

//Use to construct web site data
const people = require('./people.json');

//Sets templating engine to pug
app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));

//Returns what is requested when we go to web page
app.get('/', (req, res) => {

    //Tells it to get the index file from views
    res.render('index', {
        title: 'Homepage',
        people: people.profiles
      });
  });

  app.get('/profile', (req, res) => {
    const person = people.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
      title: `About ${person.firstname} ${person.lastname}`,
      person,
    });
  });


//Set port for web site to be accessed.
const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });



  




