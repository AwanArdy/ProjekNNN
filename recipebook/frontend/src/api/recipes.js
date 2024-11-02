const API_URL = 'http://localhost:3000/api';

export class RecipeAPI {
  static async getAllRecipes() {
    try {
      const response = await fetch(`${API_URL}/api/recipes`);
      if (!response.ok) throw new Error('Failed to fetch recipes');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  static async getRecipeByPages(page) {
    try {
      const response = await fetch(`${API_URL}/api/recipes/${page}`);
      if (!response.ok) throw new Error('Recipe not found');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  static async searchRecipes(query) {
    try {
      const response = await fetch(`${API_URL} /recipes/search ? q = ${query} `);
      if (!response.ok) throw new Error('Search failed');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}
