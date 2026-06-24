const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Scattergories API is running!' });
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
