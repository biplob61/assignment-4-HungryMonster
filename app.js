


function inputHandler(){
    const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click",function(){
    //console.log("click marse");
    const inputArea = document.getElementById("input-area").value;
    console.log(inputArea);
})
}

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
.then(response => response.json())
.then(data => display(data))



const display = mealNames=>{
    const mealList = mealNames.meals
    const div = document.getElementById("mealNames");
    // console.log(mealList);
    for (let i = 0; i < mealList.length; i++) {
        const meal = mealList[i];
        const li = document.createElement('li');
        li.innerText = meal.strMeal;
        div.appendChild(li);
        //console.log(meal.strMeal);
        
    }

}



