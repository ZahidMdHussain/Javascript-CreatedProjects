const search = document.querySelector('#search'),
    submit = document.querySelector('#submit'),
    random = document.querySelector('#random-btn'),
    mealsEl = document.querySelector('#meals'),
    resultHeading = document.querySelector('#result-heading'),
    single_mealEl = document.querySelector('#single-meal');

//fuction searchMeal
function searchMeal(e) {
    e.preventDefault();

    // clear single meal
    single_mealEl.innerHTML = '';
    mealsEl.innerHTML = ''
    resultHeading.innerHTML = ''

    //Get search input value
    const dish = search.value;

    // Check for input meal value from API
    if (dish.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`)
            .then(res => res.json())
            .then(data => {
                resultHeading.innerHTML = `<h2>Search results for '${dish}' :</h2>`;

                if (data.meals === null) {
                    resultHeading.innerHTML = `<h2>Search results for '${dish}' not available :</h2>`;
                } else {
                    mealsEl.innerHTML = data.meals.map(meal =>
                        `<div class="meal">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                        <div class="meal-info" data-mealID="${meal.idMeal}">
                            <h3>${meal.strMeal}</h3>
                        </div>
                    </div>
                `).join('');
                }
            });

        //clear search input
        search.value = '';
    } else {
        alert('Please enter a meal name')
    }

}

// function getmealbyid for meal details
function getmealById(mealID){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res  => res.json())
    .then(data => {
        const meal = data.meals[0];
        addMealToDOM(meal);

    })
}

// Function for random meal
function randomMeal(){
    //clear meal and heading
    single_mealEl.innerHTML = '';
    mealsEl.innerHTML = ''
    resultHeading.innerHTML = ''
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
        const meal = data.meals[0];
        addMealToDOM(meal);
    })
}

// Add meal to DOM
function addMealToDOM(meal){
    const ingredients = [];
    for(let i=1; i<=20; i++){
        if(meal[`strIngredient${i}`]){
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        }else{
            break;
        }
    }

    single_mealEl.innerHTML = `
    <div class='single-meal'>
    <h2>${meal.strMeal}</h2>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
    <div class="meal-category">
    ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
    ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}</div>
    <div class="meal-info">
    <p>${meal.strInstructions}</p>
    <h2>Ingredients</h2>
    <ul>
    ${ingredients.map(ingre => `<li>${ingre}</li>`).join('')}
    
    </ul>
    </div>
    <div class="meal-ingredients">

    </div>
    </div>`;
}


// Event listerner
submit.addEventListener('submit', searchMeal);
mealsEl.addEventListener('click', e => {
    const mealInfo = e.path.find(item => {
      if(item.classList){
        return item.classList.contains('meal-info');
      }else {
        return false;
      }
    });
    if (mealInfo){
        const mealId = mealInfo.getAttribute('data-mealid')
        getmealById(mealId);
    }
})

random.addEventListener('click',randomMeal);
