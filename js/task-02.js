const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = ingredients.map(item => {
  const list = document.createElement('li');
  list.textContent = item;
  return list;
})

document.querySelector('#ingredients').prepend(...ingredientsList);

