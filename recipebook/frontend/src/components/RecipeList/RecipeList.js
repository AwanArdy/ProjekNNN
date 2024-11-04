import { fetchRecipes, searchRecipes } from "../../api/recipes";
import createRecipeCard from "./RecipeCard";

let debounceTimeout;
function debounce(func, delay) {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(func, delay);
}

let currentPage = 1;
const RECIPES_PER_PAGE = 10;

async function renderRecipeList(container, query = '') {
  container.innerHTML = '';
  let recipes = [];

  try {
    recipes = query
      ? await searchRecipes(query, page, RECIPES_PER_PAGE)
      : await fetchRecipes(page, RECIPES_PER_PAGE);
  } catch (error) {
    console.error(error);
    const errorMessage = document.createElement('p');
    errorMessage.className = 'error-message';
    errorMessage.textContent = 'Failed to load recipes. Please try again later';
    container.appendChild(errorMessage);
    return
  }

  if (!recipes || recipes.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'recipe-list__empty';
    emptyMessage.textContent = 'No recipes found';
    container.appendChild(emptyMessage);
  } else {
    recipes.forEach(recipe => {
      const recipeCard = createRecipeCard(recipe);
      container.appendChild(recipeCard);
    });
  }
}

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
  debounce(() => {
    const query = searchInput.value;
    currentPage = 1;
    renderRecipeList(document.getElementById('recipe-container'), query, currentPage);
  }, 300);
});

document.getElementById('nextPage').addEventListener('click', () => {
  currentPage += 1;
  renderRecipeList(document.getElementById('recipe-container'), searchInput.value, currentPage);
});

document.getElementById('prevPage').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage -= 1;
    renderRecipeList(document.getElementById('recipe-container'), searchInput.value, currentPage);
  }
});

export default renderRecipeList;
