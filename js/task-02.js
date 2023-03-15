const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientList = document.createDocumentFragment();
for (let i = 0; i < ingredients.length; i++) {
  const singleIngredient = document.createElement("li");
  singleIngredient.textContent = ingredients[i];
  singleIngredient.setAttribute("class", "item");
  ingredientList.appendChild(singleIngredient);
}

document.getElementById("ingredients").appendChild(ingredientList);