const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://ankushmadan48:Uc20fMMfLaObvulQ@user.2ywfngb.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=user';

const connectToMongo = () => {
  mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));
};

module.exports = connectToMongo;
