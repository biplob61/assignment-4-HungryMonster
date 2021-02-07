//input handler
function inputHandler(){
    const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click",function(){
    const inputArea = document.getElementById("input-area").value;
    console.log(inputArea);
})
}


//display Meals
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
.then(res =>res.json())
.then(data =>displayMealNames(data));
const displayMealNames = mealNames=>{
    const mealNamesDiv = document.getElementById('mealNames');
    for (let i = 0; i <mealNames.meals.length; i++) {
        const meal =mealNames.meals[i];
        const newDiv = document.createElement('div');
        newDiv.className = 'food';
        const mealInfo = `
            <h3>${meal.strMeal}</h3>
            <Button onclick="displayMealDetails('${meal.strMeal}')">Get Recipe</Button>
        `
        newDiv.innerHTML = mealInfo;
        mealNamesDiv.appendChild(newDiv); 
    }
}


//display Meals Details
const displayMealDetails =meal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    fetch(url)
    .then(res => res.json())
    .then(data =>renderFoodInfo(data.meals[0]));
}

const renderFoodInfo = meal =>{
    const detailsDiv = document.getElementById('mealdetails');
    detailsDiv.innerHTML= `
    <h3>${meal.strIngredient1}</h3>
    <h3>${meal.strIngredient2}</h3>
    <h3>${meal.strIngredient3}</h3>
    <h3>${meal.strIngredient4}</h3>
    <h3>${meal.strIngredient5}</h3>
    <h3>${meal.strIngredient6}</h3>
    <h3>${meal.strIngredient7}</h3>
    <h3>${meal.strIngredient8}</h3>
    <h3>${meal.strIngredient9}</h3>
    <h3>${meal.strIngredient10}</h3>
    <h3>${meal.strIngredient11}</h3>
    <h3>${meal.strIngredient12}</h3>
    <h3>${meal.strInstructions}</h3>
    <img src ="${meal.strMealThumb}">
    `
}