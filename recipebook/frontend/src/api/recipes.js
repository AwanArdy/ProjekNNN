// const API_BASE_URL = 'http://localhost:8000';
const BASE_URL = import.meta.env.VITE_SPOONACULAR_BASE_URL;
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

async function fetchRecipesWithCache(endpoint, cacheKey, ttl = 10 * 60 * 1000) {
  const cachedData = localStorage.getItem(cacheKey);
  const cacheTimestamp = localStorage.getItem(`${cacheKey}_timestamp`);

  if (cachedData && cacheTimestamp && Date.now() - cacheTimestamp < ttl) {
    return JSON.parse(cachedData);
  }

  const response = await feth(`${BASE_URL}${endpoint}&apikey=${API_KEY}`);
  const data = await response.json();

  localStorage.setItem(cacheKey, JSON.stringify(data));
  localStorage.setItem(`${cacheKey}_timestamp`, Date.now());

  return data;
}

export async function fetchRecipes(page = 1, perPage = 10) {
  const offset = (page - 1) * perPage;
  const response = await fetch(`${BASE_URL}/recipes/random?number=${perPage}&offset=${offset}&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.recipes;
  return fetchWithCache('/recipes/random?number=10', 'recipes_cache');
}

export async function searchRecipes(query) {
  return fetchWithCache(`/recipes/complexSearch?query=${query}`, `search_${query}`);
}

/* export async function getRecipeDetail(recipeId) {
  return fetchWithCache(`/recipes/${recipeId}/information`);
} */

/* export const fetchRecipeDetail = async (recipeId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/recipes/${recipeId}`);
    if (!response.ok) throw new Error("Failed to fetch recipe detail");
    return await response.json();
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch recipe detail" };
  }
};
*/
