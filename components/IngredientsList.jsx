export default function IngredientsList({
  ingredients,
  handleRecipe,
  isRecipeBtnDisabled,
}) {
  return ingredients.length !== 0 ? (
    <>
      <div className="ingredients-list">
        <h2 className="list-heading">Ingredients List:</h2>
        <ul className="list">
          {ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="get-recipe">
        <div className="left">
          <div className="want-recipe">Ready for a recipe?</div>
          <div className="want-recipe-bottom">
            Generate a recipe from your list of ingredients
          </div>
        </div>

        <div className="right">
          <div className="get-recipe-btn">
            <button
              disabled={ingredients.length === 0 || isRecipeBtnDisabled}
              onClick={() => handleRecipe(ingredients)}
            >
              Get a recipe
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
