const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const routerAPI = require('./server/router');


app.use(cors());
app.use(express.json());
routerAPI(app);

app.use('/', express.static(path.resolve(__dirname, 'client', 'home')));

app.listen(3100, () =>{
    console.log('aplicacion corriendo en el puerto 3100');
});