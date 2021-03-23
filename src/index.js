const express = require('express'); //deben llamarse a sus modulos, en este caso express
const { dirname } = require('path');
const app = express();
const path = require('path');// el modulo path averigua las rutas de que si esta en windows o linux
//lo que hace nodemon es una devDependencia que al guardar cambios los ejecuta automaticamente.

app.set('port', 3000); //esta definiendo una especie de variable para definir el puerto en el que se ejecuta en web
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); //view engine = motor de la vista, para decirle que motor de vista vamos a usar, en este caso 'ejs'

//rutas
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public'))) //Lo que hace esto es publicar la carpeta public desde el navegador, es decir cualquier archivo dentro va a poder ser accedido desde el navegador

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});