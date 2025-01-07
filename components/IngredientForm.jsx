export default function IngredientsForm({ handleIngredients }) {
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleIngredients}>
        <input
          className="form-input"
          type="text"
          placeholder="e.g. basil"
          name="ingredient"
          required
        />

        <input className="form-submit" type="submit" value="+ Add Ingredient" />
      </form>
    </div>
  );
}
