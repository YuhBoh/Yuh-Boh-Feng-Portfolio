const express = require('express');
let bodyParser = require('body-parser');


const app = express();


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));


// Routes to here


app.listen(3000, function () {
   console.log(`You started the server! It is running on port 3000.`);
})
