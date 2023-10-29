export const ingredientlist= ({ingredients})=> ` 
<div class="recipe__ingredients">
<h2 class="heading--2">Recipe ingredients</h2>
<ul class="recipe__ingredient-list">
  <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="src/img/icons.svg#icon-check"></use>
    </svg>
    <div class="recipe__quantity">1000</div>
    <div class="recipe__description">
      <span class="recipe__unit">g</span>
      pasta
    </div>
  </li>

  <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="src/img/icons.svg#icon-check"></use>
    </svg>
    <div class="recipe__quantity">0.5</div>
    <div class="recipe__description">
      <span class="recipe__unit">cup</span>
      ricotta cheese
    </div>
  </li>
</ul>
</div>`



