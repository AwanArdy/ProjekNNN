import { fetchRecipes, fetchRecipeDetail } from "../../api/recipes";
import createRecipeCard from "./RecipeCard";

export const renderRecipeList = (container, recipes, onRecipeClick) => {
  container.innerHTML = '';

  if (!Array.isArray(recipes) || recipes.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'recipe-list__empty';
    emptyMessage.textContent = 'No recipes found';
    container.appendChild(emptyMessage);
  } else {
    recipes.forEach(recipe => {
      const recipeCard = createRecipeCard(recipe, onRecipeClick);
      container.appendChild(recipeCard);
    });
  }
};
