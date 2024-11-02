const express = require('express');
const dotenv = require('dotenv');
const recipeRoutes = require('./routes/recipes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/recipes', recipeRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).jon({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di https://localhost:${PORT}`);
});
