import { recipedeteilMarkup } from "./recipe.mjs";
import {result_Markup} from "./results.js"
import {ingredientlist} from "./igredientlist.js"



const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


async function showRecipe(url) {
  const Recipe_URL =``;

  const response = await fetch(url)

  const { data } = await response.json()

  const {recipe} = data

  return (recipe)
}

const URL_API = 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'



showRecipe(URL_API)
  .then(( recipe ) => {
    console.log(recipe);
    //colocamos HTML
    recipeContainer.insertAdacentHTML('afterbegin', recipedeteilMarkup(recipe))
    console.log(recipe);
  })
  .catch((er) => {
    console.error('URL mal', er)
  })


  const loadrecipe = ()=>{
    const id = location.hash.slice(1);
    showRecipe(id)
    .then(({recipe} ) => {
      console.log(recipe)
      renderSpinner.recipeContainer()
      recipeContainer.insertAdjacentHTML('afterbegin',result_Markup(recipe))

    })

  }



  const ejemplo = {
    cooking_time: 75

  }
  const searchhandlerreceta = () =>{
    const searchQuery= document.getElementById("SearchTxtInput").value
    console.log(searchQuery)
    showresoults(searchQuery)
  }

  const showresoults = (query) =>{
    fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
    .then( (responcedata)=> responcedata.json())
    .then((res)=> 
    //console.log(res)
    document.getElementById('result_links').innerHTML = res.recipe.map(viewresults => result_Markup(viewresults)).join('')
    //console.log(res.recipe)
    )
  }

  const showconsult = (recipe_id) => {
    fetch (`https://forkify-api.herokuapp.com/api/get?rId=${recipe_id}`)
    .then ((responcedata)=> responcedata.json())
    .then((res)=> 
    //console.log(res)
    recipeContainer.insertAdjacentHTML('afterbegin', generateMarkup(res.recipe))
    //document.getElementById('result_links').innerHTML = res.recipe.map(viewresults => result_Markup(viewresults))
    //console.log(res.recipe)
    )
  }

  document.getElementById('result_links').innerHTML=result_Markup(ejemplo)
  document.getElementById('btn_search').addEventListener("click",searchhandlerreceta)
window.addEventListener('hashchange', loadrecipe)