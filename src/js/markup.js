export const generateMarkup=({cooking_time =30 , image_url, publisher ="Antonio", title}) =>{
return(`
<figure class="recipe__fig">
<img src="${image_url}" alt="Tomato" class="recipe__img" />
<h1 class="recipe__title">
  <span>${title}</span>
</h1>
</figure>
<div class="recipe__details">
<div class="recipe__info">
  <svg class="recipe__info-icon">
    <use href=""></use>
  </svg>
  <span class="recipe__info-data recipe__info-data--minutes">${cooking_time}</span>
  <span class="recipe__info-text">minutes</span>
</div>
<div class="recipe__info">
  <svg class="recipe__info-icon">
    <use href="src/img/icons.svg#icon-users"></use>
  </svg>
  <span class="recipe__info-data recipe__info-data--people">4</span>
  <span class="recipe__info-text">servings</span>

  <div class="recipe__info-buttons">
    <button class="btn--tiny btn--increase-servings">
      <svg>
        <use href="src/img/icons.svg#icon-minus-circle"></use>
      </svg>
    </button>
    <button class="btn--tiny btn--increase-servings">
      <svg>
        <use href="src/img/icons.svg#icon-plus-circle"></use>
      </svg>
    </button>
  </div>
</div>

<div class="recipe__user-generated">
  <svg>
    <use href="src/img/icons.svg#icon-user"></use>
  </svg>
</div>
<button class="btn--round">
  <svg class="">
    <use href="src/img/icons.svg#icon-bookmark-fill"></use>
  </svg>
</button>
</div>

`)}