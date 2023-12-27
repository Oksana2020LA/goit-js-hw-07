// Отримуємо список категорій
const categoriesList = document.getElementById('categories');
const categoriesItems = document.querySelectorAll('.item');

// Виводимо загальну кількість категорій
console.log(`Number of categories: ${categoriesItems.length}`);

// Для кожної категорії виводимо назву та кількість елементів
categoriesItems.forEach(category => {
  // Отримуємо назву категорії
  const categoryName = category.querySelector('h2').textContent;

  // Отримуємо елементи в межах категорії
  const categoryElements = category.querySelectorAll('ul li');

  // Виводимо інформацію в консоль
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});