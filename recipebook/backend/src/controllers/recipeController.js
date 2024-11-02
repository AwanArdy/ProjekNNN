const axios = require('axios');

const API_BASE_URL = process.env.API_BASE_URL;

const getRecipes = async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipes`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching recipes:', error.message);
    res.status(500).json({ message: 'Error fetching recipes' });
  }
};

const getRecipeById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${API_BASE_URL}/recipe/${id}`);
    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching recipe with ID ${id}:`, error.message);
    res.status(500).json({ message: 'Error fetching recipe details' });
  }
};

module.exports = { getRecipes, getRecipeById };
