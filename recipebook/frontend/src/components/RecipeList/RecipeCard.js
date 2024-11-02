function createRecipeCard(recipe, onViewDetail) {
  const card = document.createElement('div');
  card.className = 'recipe-card';

  const image = document.createElement('img');
  image.className = 'recipe-card__image';
  image.src = recipe.image;
  image.alt = recipe.name;
  card.appendChild(image);

  const content = document.createElement('div');
  content.className = 'recipe-card__content';
  card.appendChild(content);

  const title = document.createElement('h3');
  title.className = 'recipe-card__title';
  title.textContent = recipe.name;
  content.appendChild(title);

  const description = document.createElement('p');
  description.className = 'recipe-card__description';
  description.textContent = recipe.description;
  content.appendChild(description);

  const button = document.createElement('button');
  button.className = 'recipe-card__button';
  button.textContent = 'View Recipe';
  button.addEventLisener('click', () => onViewDetail(recipe.id));
  content.appendChild(button);

  return card;
}

export default createRecipeCard;
