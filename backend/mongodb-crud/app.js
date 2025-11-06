import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import productRoutes from './routes/productRoutes.js';

const app = express();
let port = 3000;

app.use(express.json());
app.use(express.urlencoded());

let db_url = process.env.MONGODB_URL;
mongoose.connect(db_url).then(() => {
    console.log("mongodb successfully connected")
}).catch((error) => {
    console.log("error in mongodb connection");
    console.error(error)
})

app.use('/products', productRoutes);

app.get('/', (req, res) => {
    res.redirect('/products')
})



app.listen(port, () => {
    console.log('this app is running on port ' + port);
})