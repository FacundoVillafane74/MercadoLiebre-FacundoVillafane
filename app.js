const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const mainRouter = require('./routes/mainRouter');
const userRouter = require('./routes/userRouter');

const app = express();

const rutaPublic = path.join(__dirname, './public');
app.use(express.static(rutaPublic));

app.use('/', mainRouter);
app.use('/user', userRouter);



app.listen(process.env.PORT, () => {
    console.log('servidor escuchando en puerto ' + process.env.PORT + ' - http://localhost:' + process.env.PORT);
}); 