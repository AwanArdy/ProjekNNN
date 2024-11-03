const API_BASE_URL = 'http://localhost:8000';

export const fetchRecipes = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/recipes`);
    if (!response.ok) throw new Error("Failed to fetch recipes");
    return await response.json();
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch recipes" };
  }
};

export const fetchRecipeDetail = async (recipeId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/recipes/${recipeId}`);
    if (!response.ok) throw new Error("Failed to fetch recipe detail");
    return await response.json();
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch recipe detail" };
  }
};
