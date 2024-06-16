const express = require('express');
const bcrypt = require('bcryptjs');
const Users = require('./Model/User'); // Ensure this path is correct
const connectToMongo = require('./db');
const cors = require('cors');

connectToMongo();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// User registration route
app.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new Users({ name, email, password });
    await user.save();
    res.send({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).send({ error: 'Failed to save user' });
  }
});

// User login route
app.post('/LOGIN', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(400).send({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send({ error: 'Invalid credentials' });
    }

    res.send({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send({ error: 'Failed to login' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
