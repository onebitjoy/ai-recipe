import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  function handleIngredients(event) {
    event.preventDefault();
    const newIngredient = event.target.ingredient.value.trim();
    if (newIngredient !== "") {
      setIngredients((ingredients) => [...ingredients, newIngredient]);
    } else {
      alert("Please enter an ingredient to get the recipe!");
    }
    event.target.reset();
  }

  return (
    <main className="main">
      <div className="form-container">
        <form className="form" onSubmit={handleIngredients}>
          <input
            className="form-input"
            type="text"
            placeholder="e.g. basil"
            name="ingredient"
            required
          />

          <input
            className="form-submit"
            type="submit"
            value="+ Add Ingredient"
          />
        </form>
      </div>

      {ingredients?.length !== 0 && (
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
                  disabled={ingredients.length === 0}
                  onClick={() => console.log("Fetching Recipe")}
                >
                  Get a recipe
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
