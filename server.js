const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
 
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log('mongoose is connected');
});
app.use(cors());
app.use(express.json());

const plantRouter = require('./controllers/plants.js')
app.use('/plants', plantRouter);

app.listen(3015, () => {
  console.log('listening on 3015');
});
