const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, './public')) );


app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ',PORT);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});
