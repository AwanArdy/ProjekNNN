function createRecipeCard(recipe, onViewDetail) {
  const card = document.createElement('div');
  card.className = 'recipe-card';
  card.onclick = () => onClick(recipe.id);

  const img = document.createElement('img');
  img.className = 'recipe-card__image';
  img.src = recipe.image;
  img.alt = recipe.name;

  const content = document.createElement('div');
  content.className = 'recipe-card__content';

  const title = document.createElement('h3');
  title.className = 'recipe-card__title';
  title.textContent = recipe.name;

  const description = document.createElement('p');
  description.className = 'recipe-card__description';
  description.textContent = recipe.description;

  content.appendChild(title);
  content.appendChild(description);
  card.appendChild(img);
  card.appendChild(content);

  return card;
}

export default createRecipeCard;
