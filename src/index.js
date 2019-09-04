import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'

import router from './api';
const app = express();


// app.use('/',router);
// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// import 'dotenv/config';
// console.log('Hello Node.js project.');
// console.log(process.env.MY_SECRET); 

const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router)

app.listen(port, () => {
    console.log('server is listening on port', port);
})