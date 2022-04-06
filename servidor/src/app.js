import express from "express";
import morgan from "morgan";
import bodyParser  from "body-parser";
import cors from 'cors';
import { createRoles } from "./libs/initialSetup";
import products from "./routes/products.routes"
import auth  from "./routes/auth.routes"
import user from "./routes/user.routes"
const app = express()

/** Funcion para que se creen los roles automaticamente **/
createRoles();   
    
app.use(cors())  


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false })),
app.use(bodyParser.json()),

app.get('/', (req, res) => {
    res.json("hola mundo");
})
//Codificar Body
app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))

/** Nombre que damos a las rutas **/
app.use('/api/products', products)
app.use('/api/auth', auth)
app.use('/api/user', user)

export default app;


/** Configuracion de todo el servidor **/