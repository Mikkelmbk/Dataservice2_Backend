const express = require('express'); // npm i express --save
const app = express(); // kalder en funktion ved navn express fra det installerede modul på linjen ovenover

app.use('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

require('./routes/index')(app);

app.listen(3333); // lyt på porten 3333
console.log('Serveren er startet på http://localhost:3333');