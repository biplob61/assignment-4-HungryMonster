//input handler
function inputHandler(){
    const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click",function(){
    const inputArea = document.getElementById("input-area").value;

})
}


//meallist handler
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
.then(response => response.json())
.then(data => displayMeal(data))

const displayMeal = mealNames=>{
    const mealList = mealNames.meals
    const div = document.getElementById("mealNames");
    for (let i = 0; i < mealList.length; i++) {
        const meal = mealList[i];
        const mealDiv = document.createElement('div');
        mealDiv.className = 'mealContainer';
        mealDiv.innerText = meal.strMeal;
        div.appendChild(mealDiv);
        
    }
}



