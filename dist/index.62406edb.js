const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
}; // https://forkify-api.herokuapp.com/v2
 ///////////////////////////////////////
 // import { recipedeteilMarkup } from "./recipe";
 // async function showRecipe(url) {
 //   const response = await fetch(url)
 //   const { data } = await response.json()
 //   const {recipe} = data
 //   return (recipe)
 // }
 // const URL_API = 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
 // showRecipe(URL_API)
 //   .then(( recipe ) => {
 //     console.log(recipe);
 //     //colocamos HTML
 //     recipeController.insertAdacentHTML('afterbegin', recipedeteilMarkup(recipe))
 //     console.log(recipe);
 //   })
 //   .catch((er) => {
 //     console.error('URL mal', er)
 //   })

//# sourceMappingURL=index.62406edb.js.map
