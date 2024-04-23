
let rowData = document.getElementById("rowData");

function openSideNav(){
    $(".side-nav-menu").animate({left:0}, 500)
  
    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");
    for( let i = 0; i < 5; i++ ){
        $(".links li").eq(i).animate({
            top:0
        },(i+5)*100)
    }
}
function closeSideNav(){
    let boxWidth = $(".side-nav-menu .nav-tab").outerWidth();
    $(".side-nav-menu").animate({left:-boxWidth},500)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");
   
    $(".links li").animate({top:300},500)
}

closeSideNav()

$(".side-nav-menu i.open-close-icon").click(() =>{
 
   if($(".side-nav-menu").css("left") == "0px"){
    closeSideNav()
   }else{
    openSideNav()
   }
    
})

async function searchByName(term){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    response = await response.json()
    console.log(response.meals);

    displayMeals(response.meals)
}

function displayMeals(arr){
    let data = ""
    for(let i=0; i < arr.length; i++ ){
        data += `
        <div class="col-md-3">
          <div class="meal position-relative overflow-hidden rounded-2">
            <img class="w-100" src="${arr[i].strMealThumb}" alt="">
             <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                <h3>${arr[i].strMeal}</h3>
             </div>
          </div>
        </div>
        `
    }
    rowData.innerHTML = data
}

searchByName("")
async function gitCategories(){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  response = await response.json()
  console.log(response.categories);
  displayCategories(response.categories)
}

function displayCategories(arr){
    let data = ""
    for(let i=0; i < arr.length; i++ ){
        data += `
        <div class="col-md-3">
          <div class="meal position-relative overflow-hidden rounded-2">
            <img class="w-30" src="${arr[i].strCategoryThumb}" alt="">
             <div class="meal-layer position-absolute text-center text-black p-2">
                <h3>${arr[i].strCategory}</h3>
                <P>${arr[i].strCategoryDescription.splite(" ").slice(0,20).join(" ")}</P>
             </div>
          </div>
        </div>
        `
    }

    rowData.innerHTML = data
}

