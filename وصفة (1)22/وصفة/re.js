
// let API_URL = 'https://dummyjson.com/recipes';

// async function fetchRecipes() {
//     try {
//         let response = await fetch(API_URL);
//         let data = await response.json();
//         let recipes = data.recipes;
        
//         let recipeList = document.getElementById('recipe-list');
//         recipeList.innerHTML = '';

        
//         recipes.forEach(recipe => {
//             let recipeCard = document.createElement('div');
//             recipeCard.className = 'recipe-card';
//             recipeCard.innerHTML = `
//                 <img class="recipe-image" src="${recipe.image}" alt="${recipe.image}">
//                 <h3 class="recipe-title">${recipe.name}</h3>
//                 <p class="recipe-time"><strong>Country:</strong> ${recipe.cuisine} | <strong>Difficulty:</strong> ${recipe.difficulty}</p>
//                 <p class="recipe-time"><strong>Prepare:</strong> ${recipe.prepTimeMinutes} minutes | 
//                 <strong>Cook:</strong> ${recipe.cookTimeMinutes} minutes</p>
//                 <button class="button">Show More</button>
//             `;
//             recipeList.appendChild(recipeCard);
//         });
//     } catch (error) {
//         console.error('Error fetching recipes:', error);
//     }
// }
// window.onload = fetchRecipes;

let API_URL = 'https://dummyjson.com/recipes';

async function fetchRecipes() {
    try {
        let response = await fetch(API_URL);
        let data = await response.json();
        let recipes = data.recipes;
        
        let recipeList = document.getElementById('recipe-list');
        recipeList.innerHTML = '';

        recipes.forEach(recipe => {
            let recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            recipeCard.innerHTML = `
                <img class="recipe-image" src="${recipe.image}" alt="${recipe.image}">
                <h3 class="recipe-title">${recipe.name}</h3>
                <p class="recipe-time"><strong>Country:</strong> ${recipe.cuisine} | <strong>Difficulty:</strong> ${recipe.difficulty}</p>
                <p class="recipe-time"><strong>Prepare:</strong> ${recipe.prepTimeMinutes} minutes | 
                <strong>Cook:</strong> ${recipe.cookTimeMinutes} minutes</p>
                <p class="recipe-details hidden"> <b>Instructions: </b> ${recipe.instructions}</p>
                <button class="button" onclick="toggleDetails(this)">Show More</button>
            `;
            recipeList.appendChild(recipeCard);
        });
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

function toggleDetails(button) {
    const details = button.previousElementSibling; 
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden'); 
        button.textContent = 'Show Less'; 
    } else {
        details.classList.add('hidden'); 
        button.textContent = 'Show More'; 
    }
}

window.onload = fetchRecipes;



