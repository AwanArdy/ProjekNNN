// const API_BASE_URL = 'http://localhost:8000';
const BASE_URL = 'https://masak-apa.tomorisakura.vercel.app/api';

export async function fetchRecipes() {
  try {
    const response = await fetch(`${API_BASE_URL}/recipes`);
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

export async function searchRecipes(query) {
  try {
    const response = await fetch(`${BASE_URL}/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Failed to search recipes');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching recipes:", error);
    return []
  }
}

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
