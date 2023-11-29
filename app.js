const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));





// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./src/views/index.html'))
});




// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está escuchando en ${port}`);
});