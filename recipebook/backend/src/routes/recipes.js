const express = require('express');
import { getRecipes, getRecipeById } from '../controllers/recipeController';

const router = express.Router();

router.get('/', getRecipes);

router.get('/:id', getRecipeById);

module.exports = router;
