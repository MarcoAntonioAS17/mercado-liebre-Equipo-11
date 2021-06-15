const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, './public')) );


app.listen(3001, () => {
    console.log('Servidor corriendo en el puerto 3001');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
})
