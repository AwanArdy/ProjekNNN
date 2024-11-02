import { RecipeAPI } from "../../api/recipes";
import createRecipeCard from "./RecipeCard";

export class RecipeList {
  constructor() {
    this.recipes = [];
    this.loading = false;
    this.error = null;
  }

  async loadRecipes() {
    try {
      this.loading = true;
      this.render();

      this.recipes = await RecipeAPI.getAllRecipes();
      this.loading = false;
      this.render();
    } catch (error) {
      this.error = error.message;
      this.loading = false;
      this.render();
    }
  }

  render() {
    const container = document.querySelector('#recipe-list');

    if (this.loading) {
      container.innerHTML = '<div class="loader">Loading...</div>';
      return;
    }

    if (this.error) {
      container.innerHTML = `<div class="error">${this.error}</div>`;
      return;
    }

    container.innerHTML = `
      <div class="recipes-grid">
        ${this.recipes.map(recipe => new createRecipeCard(recipe).render()).join('')}
      </div>
    `;

    this.recipes.forEach(recipe => {
      const card = container.querySelector(`[data-recipe-id="${recipe.id}"]`);
      card.addEventListener('click', () => this.handleRecipeClick(recipe));
    });
  }

  handleRecipeClick(recipe) {

  }
}
