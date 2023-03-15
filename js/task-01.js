const categoriesByID = document.getElementById("categories");
const categoryItems = categoriesByID.querySelectorAll("li.item");
//task 1.1: count all categories
const numberOfCategories = categoryItems.length;
console.log("Number of categories: " + numberOfCategories);

//task 1.2: display every category and number of items inside of it
let categoriesAndItemsTextArray = [];
for (let i = 0; i < categoryItems.length; i++) {
  categoriesAndItemsTextArray[i] = categoryItems[i].innerText;
}
let arrayOfCategoryArrays = [];
for (let i = 0; i < categoriesAndItemsTextArray.length; i++) {
  arrayOfCategoryArrays[i] = categoriesAndItemsTextArray[i].split("\n");
}

for (let i = 0; i < arrayOfCategoryArrays.length; i++) {
  console.log("Category: " + arrayOfCategoryArrays[i][0]);
  console.log("Elements: " + (arrayOfCategoryArrays[i].length - 1));
}