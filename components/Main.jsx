import { useState } from "react";
import IngredientsForm from "./IngredientForm.jsx";
import IngredientsList from "./IngredientsList.jsx";
import RecipeFromAI from "./RecipeFromAI.jsx";
import getRecipeFromMistral from "../tools/ai.js";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

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

  function handleRecipe(ingredients) {
    console.log("Ingredients:", ingredients);
    getRecipe(ingredients);
  }

  async function getRecipe(ingredientsList) {
    getRecipeFromMistral(ingredientsList)
      .then((data) => setRecipe(data))
      .catch((err) => console.error(err));
  }

  return (
    <main className="main">
      <IngredientsForm handleIngredients={handleIngredients} />
      <IngredientsList ingredients={ingredients} handleRecipe={handleRecipe} />
      <RecipeFromAI recipe={recipe} />
    </main>
  );
}