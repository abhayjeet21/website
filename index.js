const dotenv = require('dotenv');
const connectToMongo = require('./db');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

dotenv.config();
app.use(cors());
connectToMongo();
app.use(express.json());

app.use(express.static(path.join(__dirname, './client/build')))
app.use('/api/notes', require('./Routes/Notes'));
app.use('/api/user', require('./Routes/User'));

// app.get('/', (req,res)=>{
//     res.send('Hello MassGyan');
// });

app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'.client/build'));
})


app.listen(port, () => {
    console.log(`Server started on port https://localhost:${port}`);
});