import { fetchRecipes } from "./api/recipes";
import renderRecipeList from "./components/RecipeList/RecipeList";


document.addEventListener('DOMContentLoaded', async () => {
  const recipeContainer = document.getElementById('recipe-list');

  const recipesData = await fetchRecipes();
  const recipes = recipesData.recipes;

  const handleRecipeClick = (id) => {
    console.log(`Recipe ID: ${id}`);
  };

  renderRecipeList(recipeContainer, recipes, handleRecipeClick);
})
