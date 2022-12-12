require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const PORT = process.env.PORT || 3000;
const password = process.env.MONGODB_PASSWORD;
const dbURL = `mongodb+srv://owen:${password}@cluster0.23a4d.mongodb.net/meditation-app?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);
mongoose.connect(dbURL);
const database = mongoose.connection;

database.on('error', (error) => {
  console.error(error);
});

database.once('connected', () => {
  console.log('Connected to MongoDB');
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes);

app.listen(PORT, () => {
  console.log('App listening on port', PORT);
});

app.get('/', (req, res) => {
  res.status(200).json('Welcome to meditation app backend');
});
