function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card';

  const img = document.createElement('img');
  img.src = recipe.thumb;
  img.alt = recipe.title;
  card.appendChild(img)

  const title = document.createElement('h3');
  title.textContent = recipe.title;
  card.appendChild(title)

  card.addEventListener('click', () => {
    alert(`Recipe: ${recipe.title
      }`);
  });

  return card;
}

export default createRecipeCard;
